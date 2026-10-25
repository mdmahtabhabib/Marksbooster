import { useState } from "react";


// =====================================================
// IMPORTANT QUESTIONS — everything in one file
// =====================================================
// 0. DATA          the questions (later they come from Supabase)
// 1. SETTINGS      question types, section letters, ruled lines
// 2. HELPER        puts the questions into sections
// 3. ONE QUESTION
// 4. ONE SECTION
// 5. THE PAPER     draws everything
// 6. THE PAGE      picks this chapter's questions and shows the paper
//
// Only parts 0 and 6 know where the questions come from.
// When Supabase is connected, delete part 0 and change part 6.
// Parts 1–5 stay exactly the same.

// =====================================================
// 1. SETTINGS
// =====================================================

// One line = one section on the paper, in this order.
//   key   : must be the same as "type" in the data
//   label : the section heading
//   marks : the small text under the heading
//   hint  : (optional) a box shown before the questions
const QUESTION_TYPES = [
    {key : "very-short" , label : "Very Short Answer Questions" , marks: "1 mark each" } , 
    {
     key: "assertion-reason",
     label : "Assertion & Reason Questions" , 
     marks:"1 mark each" ,
     hint : `(a) Both A and R are true , and R is correct explanation of A.
             (b) Both A and R are true, but R is not the correct explanation of A.
             (c) A is true, but R is false.
             (d) A is false, but R is true.   `
        
    },
    {key : "short" , label: "Short Answer Questions" , marks: "2-3 marks"} ,
    {key : "long" , label: "Long Answer Questions" , marks : " 5 marks each" },
];

// Section A, Section B, Section C ...
const LETTERS = "ABCDEFGH" ;

// The lines behind an answer, like a notebook: a thin blue line every 28px.
// The answer text is also 28px high per line, so every line of text sits on a ruled line.
const ruledLines = { backgroundImage: "repeating-linear-gradient(to bottom , transparent 0px, transparent 27px, #dbe7f3 27px, #dbe7f3 28px)"}


// =====================================================
// 2. HELPER — put the questions into sections
// =====================================================
// Gets : all the questions, all types mixed
// Gives: [ { key, label, marks, hint, questions: [...] }, ... ]
//
// Every question also gets a "number" (1, 2, 3 ...). The number keeps counting
// from one section to the next, like a real question paper.

function makesections(questions){
  const sections = [];
  let number = 0;

 QUESTION_TYPES.forEach((type) =>{
  // only the questions of this type 
  const list = questions.filter((q) =>q.type === type.key);

  //no questions of this type --> no section 
  if (list.length === 0 ) return ;

  //put them in order: position 1, 2, 3 ....
  list.sort(( a, b) => a.position - b.position);

  //copy each question and add its number 
  const numbered = [];
  list.forEach ((q)=>{
    number = number + 1;
    numbered.push({...q , number : number });
  });

  sections.push({...type, questions:numbered})
 } ) ;
 return sections;
}

// ====================
// 3. ONE QUESTION
//=====================

function Question({q , isOpen , onToggle }){
  return(
   // last:border-b-0 = no dotted line under the last question
   <li className="border-b border-dashed border-stone-300 py-[16px] last:border-b-0 " >
  {/* Row 1:  number | question | [marks] */}
  <div className="flex gap-[8px]" >
<span className="w-[34px] shrink-0 font-newsreader text-[17px] font-bold text-stone-900" >{q.number}</span>
<p className="flex-1 whitespace-pre-line font-newsreader text-[17px] leading-[1.6] text-stone-900" >{q.question}</p>
<span className="shrink-0 pt-[2px] font-newsreader text-[15px] text-stone-500" >[{q.marks}]</span>
  </div>


{/*  Row 2:  tag, answer button, answer
          pl-[42px] = number width (34px) + gap (8px), so this row starts under the question */}

  <div className="pl-[42px]" >
    {q.tag &&(
      <div className="mt-[2px] font-newsreader text-[14px] italic text-red-700" >★{q.tag}</div>
    )}

    {q.answer &&(
      // aria-expanded tells screen readers if the answer is open
      <button onClick={onToggle}  aria-expanded ={isOpen} className="mt-[8px] font-archivo text-[12px] font-bold uppercase tracking-[0.12em] text-[#0e5490] hover:underline"  >
       {isOpen ? "Hide answer" : "view answer →"}
      </button>
    )}

    {isOpen &&(
      <div style={ruledLines} className="mt-[12px] rounded-[4px] border border-sky-200 border-l-[3px] border-l-red-300 bg-[#f8fbff] px-[14px]" >
      <p className="whitespace-pre-line font-archivo text-[15px] leading-[28px] text-[#1d3f8f]" >
        <span className="font-bold text-red-700" >Ans.</span> {q.answer}
      </p>

      {/* Diagram, only if the answer has one */}
      {q.image && (
        <img src={q.image} alt="Diagram"  className="mx-auto my-[10px] max-h-[320px] rounded-[4px] bg-white p-[8px]"/>
      )}
      </div>
    )}
 </div>
   </li>  
  );
}

// =====================================================
// 4. ONE SECTION (Section A, Section B ...)
// =====================================================

function Section({section, letter , openIds , onToggle}){
  const count = section.questions.length ;

  return(
    <section className="mt-[36px]" >
   {/* Heading */}
   <div className="border-b border-stone-800 pb-[10px] text-center"  >
    <div className="font-archivo text-[11px] font-bold uppercase tracking-[0.3em] text-[#0e5490]" >
      section {letter}
    </div>

  <h2 className="mt-[4px] font-newsreader text-[21px] font-bold text-stone-900 " >{section.label}</h2>
  <div className="mt-[2px] font-archivo text-[12px] text-stone-500" >
 {count} {count===1 ? "question" : "questions"} . {section.marks}
  </div>
    </div>  

    {/* Hint box, only if this type has one */}

    {section.hint && (
      <div className="mt-[14px] border border-stone-300 px-[12px] py-[9px] font-newsreader text-[15px] leading-[1.55] text-stone-700" >
        <div className="italic" >Choose the correct option:</div> 
        <div className="whitespace-pre-line">{section.hint}</div>
      </div>
    )}

    {/* Question*/}
    <ol>
      {section.questions.map((q) => (
        <Question key={q.id} q={q} isOpen={openIds.includes(q.id)} onToggle={()=> onToggle(q.id)}  />
      ))}
    </ol>

    </section>
  );
}

// =====================================================
// 5. THE PAPER (draws everything)
// =====================================================

function ImportantquestionsPaper({title , questions}){
 // ids of the questions whose answer is open, e.g. [3, 15, 21]
 const [openIds , setOpenIds ] = useState([]); 

 // No questions yet → show a message instead of the paper
 if (!questions || questions.length === 0 ){
  return(
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6" >
      <p className="text-slate-400 text-center" > No important question for this yet , check back soon. </p>
    </div>
  );
 }

 // Put the questions into sections
 const sections = makesections(questions);

  // Count the questions and marks for the header,
  // and keep the ids of the questions that have an answer (for "Show answers")

  let totalQuestions = 0 ; 
  let totalMarks = 0 ;
  const answerIds = [];

  sections.forEach((section) => {
    section.questions.forEach((q) => {
      totalQuestions = totalQuestions + 1 ;
      totalMarks = totalMarks + q.marks ;

      if(q.answer){
        answerIds.push(q.id);
      }
    });
  });

  // true when every answer is open
const allOpen = answerIds.length > 0 && answerIds.every((id) => openIds.includes(id));
  // ---------- Handlers ----------

  // Open or close one answer
  function toggleAnswer(id){
    setOpenIds((previousIds) => 
    previousIds.includes(id) ? previousIds.filter((openId) => openId !== id) : [...previousIds, id] );
  }

  function showAllAnswers(){
    setOpenIds(answerIds);
  }

  function hideAllAnswers(){
    setOpenIds([]);
  }

  // The Hide / Show switch: the dark half is the one that is "on"
  const switchOn = "rounded-full px-[12px] py-[5px] bg-stone-900 text-white transition-colors" ;
  const switchOff = "rounded-full px-[12px] py-[5px] text-stone-600 hover:text-stone-900 transition-colors";

    // ---------- UI ----------
    return(
      <div className="min-h-screen bg-stone-200 sm:px-[16px] sm:py-[28px]" >

         {/* THE PAPER */}
         <div className="mx-auto max-w-[820px] bg-[#fffdf8] px-[18px] pb-[36px] pt-[26px]
                         shadow-[0_1px_3px_rgba(0,0,0,0.12),0_12px_32px_-12px_rgba(0,0,0,0.25)]
                         sm:rounded-[4px] sm:px-[44px] sm:pt-[36px] " >

        {/* HEADER */}
        <header className="border-b-[4px] border-double border-stone-800 pb-[14px] text-center" >
         <div className="font-archivo text-[11px] font-bold uppercase tracking-[0.25em] text-[#0e5490]" >
        MarksBooster . Important questions
         </div>  
         <h1 className="mt-[8px] font-newsreader text-[28px] font-bold leading-[1.15] text-stone-900 sm:text-[34px] " >
        {title}
         </h1>

         <div className="mt-[14px] flex justify-between font-archivo text-[12px] font-medium text-stone-600" >
           <span> Questions: {totalQuestions}</span>
           <span> Total marks : {totalMarks}</span>
         </div>
        </header>                  
        {/* INSTRUCTIONS + HIDE / SHOW SWITCH */}
        <div className="mt-[14px] flex flex-col gap-[12px] sm:flex-row sm:items-start sm:justify-between ">
          <div className="font-newsreader text-[14px] leading-[1.5] text-stone-600" >
            <span className="font-bold text-stone-800" > General instructions: </span>
            <span className="italic" > Write each answer yourself first, then open it to check, questons marked ★ are asked most often </span>
          </div>
      
          <div className="inline-flex shrink-0 self-start rounded-full border border-stone-300 bg-white p-[3px] font-archivo text-[12px] font-bold" >
           <button onClick={hideAllAnswers} className={allOpen ? switchOff : switchOn } > Hide answers</button> 
           <button onClick={showAllAnswers}  className={allOpen ? switchOn : switchOff} > Show answers </button>
          </div>
        </div>

        {/* SECTIONS */}
        {sections.map((section , index) => (
          <Section key={section.key} section={section} letter={LETTERS[index]} openIds={openIds} onToggle={toggleAnswer} />
        ))}
        

        {/* FOOTER */}
        <footer className="mt-[30px] text-center font-archivo text-[11px] font-bold uppercase tracking-[0.3em] text-stone-400" >
       — End of questions —   
        </footer>
         </div>
      </div>
    );
}

export default ImportantquestionsPaper ;

