/* Host-independent deterministic extraction; no OCR or AI calls are made here. */
(function(root){
'use strict';
const templates=root.NoteTemplates||(typeof require==='function'?require('./note-templates.js'):[]);
const norm=s=>String(s).toLowerCase().replace(/[—–]/g,'-').replace(/[₂]/g,'2').replace(/[ₒ]/g,'o').replace(/[^a-z0-9]+/g,' ').trim();
const rules=[
'Use only the supplied source pages for ONE identified note. Never combine separate encounters or clinicians because dates match.',
'Preserve original wording, negation, uncertainty, laterality, units, timestamps, reporting windows, and medication status. Do not create normal findings or negative ROS.',
'Every extracted entry must cite supplied page and line evidence. Missing information remains empty; unreadable or conflicting information requires review.',
'Keep encounter, admission, examination, signature, and addendum timestamps distinct. Keep resident/fellow/APP text and attending/addendum text separately attributed.',
'Keep home, active, administered, held, discontinued, and planned medications distinct; separate ordered interventions from completed care.',
'Do not infer reviewed checklist items, code status discussions, billed codes/units, critical-care minutes, clinical trajectory, goals met, or scores.',
'Keep current support separate from historical measurements. Do not infer bedside aspiration or assign IDDSI levels. Preserve therapy cue level/type with performance.',
'Unmapped or ambiguous text must remain in the review queue; never discard it or silently merge assessment and plan.'
];
function blank(type){if(!templates.some(t=>t.id===type))throw Error('Unknown template');return {version:1,templateId:type,id:'note-'+Date.now(),sourceName:'',sourceKind:'extracted-text',sourceText:'',metadata:{},resolutions:{},fields:{},authors:[],addenda:[],unmapped:[],reviewed:false};}
function extract(type,text,sourceName='Extracted text'){
 if(typeof text!=='string'||text.length>500000)throw Error('Use one note with no more than 500,000 characters.');
 const template=templates.find(t=>t.id===type),note=blank(type);note.sourceName=sourceName;note.sourceText=text;
 const fields=template.sections.flatMap(g=>g.fields.map(f=>({...f,group:g.id})));
 let group='',current=null,page=null,addendum=null,neuroScope='',encounterHeader=null;
 const neuroGroups={exam_mental:'mental',exam_memory:'mental',exam_attention:'mental',exam_language:'mental',exam_knowledge:'mental',exam_cn:'cn',exam_motor:'motor',exam_bulk:'motor',exam_tone:'motor',exam_sensory:'sensory',exam_reflexes:'reflexes',exam_coordination:'coordination',exam_gait:'gait',exam_neuro_special:'special'};
 const evidence=(body,i)=>({text:body,originalText:body,page,line:i+1,status:'unreviewed',authorId:null});
 const add=(entry)=>{if(addendum){addendum.entries.push(entry);return;}if(current){(note.fields[current]??=[]).push(entry);}else note.unmapped.push(entry);};
 text.split(/\r?\n/).forEach((raw,i)=>{
  let line=raw.trim();if(!line)return;
  const pm=line.match(/^\[\[PAGE\s+(\d+)\]\]$/i);if(pm){page=Number(pm[1]);if(page<1||page>100000)throw Error('Invalid page marker');return;}
  line=line.replace(/^#{1,6}\s*/,'').replace(/^[-*•]\s+/, '').replace(/\*\*/g,'');
  if(/^[-_*]{3,}$/.test(line))return;
  if(/^(attending (attestation|addendum)|addendum|co[- ]?signature|co[- ]?signed by)(\s*[:—-]|$)/i.test(line)){
   addendum={kind:/attestation/i.test(line)?'attestation':/co[- ]?sign/i.test(line)?'cosignature':'addendum',author:'',role:'',signedAt:'',entries:[]};note.addenda.push(addendum);addendum.entries.push(evidence(line,i));current=null;return;
  }
  const author=line.match(/^(author(?:\s*\/\s*role)?|attending|consultant|resident(?:\/app)?|fellow(?:\/resident)?|provider|clinician|signed by|signature(?:\/time)?|date\/time signed)\s*:\s*(.+)$/i);
  if(author){const entry=evidence(line,i);if(addendum){if(!/signature|date\/time/i.test(author[1])){addendum.author=author[2];addendum.role=author[1];}else addendum.signedAt=author[2];addendum.entries.push(entry);}else{note.authors.push({role:author[1],name:author[2],signedAt:'',entries:[entry]});}return;}
  if(addendum){addendum.entries.push(evidence(line,i));return;}
  // Only parse an initial encounter header or a matching repeated page header.
  const eh=line.match(/^(\d{1,2}\/\d{1,2}\/\d{4})\s*[-–—]\s*(Office Visit)\s+in\s+([^,]+),\s*(.+?)(?:\s*\(continued\))?\s*$/i);
  if(eh){
   const clean=line.replace(/\s*\(continued\)\s*$/i,'');
   const parts=eh[1].split('/').map(Number),d=new Date(Date.UTC(parts[2],parts[0]-1,parts[1]));
   const valid=d.getUTCFullYear()===parts[2]&&d.getUTCMonth()===parts[0]-1&&d.getUTCDate()===parts[1];
   const initial=!group&&!Object.keys(note.fields).some(k=>!k.startsWith('identity_'));
   if(valid&&((!encounterHeader&&initial)||encounterHeader===norm(clean))){
    encounterHeader=norm(clean);
    for(const [id,value] of [['identity_4',eh[1]],['identity_7',eh[2]],['identity_6',eh[3].trim()],['identity_facility',eh[4].trim()],['identity_header',line]]){
     (note.fields[id]??=[]).push({...evidence(value,i),originalText:line});
    }
    return;
   }
   // Historical, conflicting or invalid-date headers need human review.
   note.unmapped.push(evidence(line,i));current=null;group='';neuroScope='';return;
  }
  // Preserve review labels and facility/source names as evidence, not just their suffix.
  if(/^i have reviewed the following\s*(?::|$)/i.test(line)||/^chart review from\s+\S/i.test(line)){
   const target=fields.find(f=>f.id==='data_12');
   if(target){group=target.group;current=target.id;neuroScope='';add(evidence(line,i));return;}
  }
  // Recognize exact headings only. Unknown labels remain visible; no speculative clinical synthesis.
  const m=line.match(/^([^:]{1,120}):\s*(.*)$/);const heading=m?m[1]:line;const key=norm((group==='exam'?heading.replace(/^\d+[.)]\s*/, ''):heading).replace(/^[S O A P]\s*[—–-]\s*/i,''));
  const gs=template.sections.filter(g=>norm(g.label)===key||norm(g.id)===key);
  if(/^(neurological examination|neurologic examination|neurological exam|neurologic exam)$/.test(key)){group='exam';current='exam_8';neuroScope='';if(m&&m[2])add(evidence(m[2],i));return;}
  // Organ-system labels are exam findings only inside an explicit examination section.
  // This prevents historical/ROS/plan headings from becoming current examination findings.
  let candidates=fields.filter(f=>(!f.examContextOnly||group==='exam')&&f.aliases.some(a=>norm(a)===key));
  if(group==='exam' && /^(review of systems|ros|hpi|history of present illness|history of presenting illness|subjective|assessment|plan|assessment and plan|recommendations|data reviewed|past medical history|medications|chart review)( |$)/.test(key)){
   group='';current=null;
   candidates=fields.filter(f=>!f.examContextOnly&&f.aliases.some(a=>norm(a)===key));
  }
  if(candidates.length>1&&group==='exam'&&neuroScope){const ns=candidates.filter(f=>f.neuroScope===neuroScope);if(ns.length)candidates=ns;}
  if(candidates.length>1){const scoped=candidates.filter(f=>f.group===group);if(scoped.length)candidates=scoped;}
  if(candidates.length===1){current=candidates[0].id;group=candidates[0].group;neuroScope=group==='exam'?(neuroGroups[current]||candidates[0].neuroScope||''):'';if(m&&m[2])add(evidence(m[2],i));return;}
  if(gs.length===1){group=gs[0].id;current=null;neuroScope='';if(m&&m[2])note.unmapped.push(evidence(line,i));return;}
  if(candidates.length>1 || (m&&!/^\d/.test(heading))){current=null;group='';neuroScope='';note.unmapped.push(evidence(line,i));return;}
  add(evidence(line,i));
 });
 return note;
}
function validate(note){
 if(!note||note.version!==1||!templates.some(t=>t.id===note.templateId))throw Error('This is not a supported structured-note file.');
 const allowed=new Set(templates.find(t=>t.id===note.templateId).sections.flatMap(g=>g.fields.map(f=>f.id)));
 if(!note.fields||typeof note.fields!=='object'||Array.isArray(note.fields))throw Error('Invalid note fields');
 if(note.resolutions){for(const [key,value] of Object.entries(note.resolutions)){if(!allowed.has(key)||!['not-found','not-applicable'].includes(value))throw Error('Invalid field review status');}}
 const checkEntry=e=>{if(!e||typeof e.text!=='string'||typeof e.originalText!=='string'||!['unreviewed','corrected','reviewed'].includes(e.status)||!(e.page===null||(Number.isInteger(e.page)&&e.page>0&&e.page<=100000))||!(e.line===null||(Number.isInteger(e.line)&&e.line>0)))throw Error('Invalid text or source reference');};
 for(const [key,entries]of Object.entries(note.fields)){if(!allowed.has(key)||!Array.isArray(entries))throw Error('Unknown field');entries.forEach(checkEntry);}
 for(const key of ['authors','addenda','unmapped'])if(!Array.isArray(note[key]))throw Error('Missing review information');
 note.unmapped.forEach(checkEntry);
 note.authors.forEach(a=>{if(typeof a.name!=='string'||typeof a.role!=='string'||!Array.isArray(a.entries))throw Error('Invalid author');a.entries.forEach(checkEntry);});
 note.addenda.forEach(a=>{if(typeof a.author!=='string'||typeof a.role!=='string'||typeof a.signedAt!=='string'||!Array.isArray(a.entries))throw Error('Invalid addendum');a.entries.forEach(checkEntry);});
 if(typeof note.sourceText!=='string'||typeof note.sourceName!=='string'||note.sourceText.length>500000)throw Error('Invalid source');
 return note;
}
function contract(type){const t=templates.find(t=>t.id===type);if(!t)throw Error('Unknown template');return {templateId:type,instructions:rules,sections:t.sections,outputExample:blank(type),evidenceEntry:{text:'Exact source wording',originalText:'Exact source wording',page:1,line:1,status:'unreviewed',authorId:null}};}
root.NoteEngine={blank,extract,validate,contract,rules,norm};if(typeof module!=='undefined')module.exports=root.NoteEngine;
})(typeof globalThis!=='undefined'?globalThis:this);
