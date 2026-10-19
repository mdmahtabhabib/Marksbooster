import { useState } from "react";


// ---------------------------------------------
// 2. HELPERS (small plain functions)
// ---------------------------------------------

// put a list in random order . Returns a new list, the original stays the same.
function shuffle(list){
  const copy = [...list] ;
  for (let i = copy.length -1 ; i > 0 ; i--){
    const j = Math.floor(Math.random() * ( i + 1)); // random position from 0 to i 

    // swap copy[i] and copy [j]
    const temp = copy [i];
    copy [i] = copy[j];
    copy[j] = temp
  }
  return copy ;
}

// shuffle the options of every question (except questions marked keeporder)
function shuffleOptions(questions) {
  return questions.map((q) => {
    if (q.keep_order) {
      return q ;
    }
    return {...q, options: shuffle(q.options)} ; 
  });
}

// Long question -> smaller text , so the options still fit on screen 
function questionSize(text){
  if (text.length <= 80 ){
    return "text-xl md:text-2xl lg:text-3xl leading-normal" ;
  }
  if (text.length <= 200){
    return "text-lg md:text-xl lg:text-2xl leading-relaxed " ;
  }
  return "text-base md:text-lg lg:text-xl leading-relaxed" ;
}

// ---------------------------------------------
// 3. RESULT SCREEN (shown after the last question)
// ---------------------------------------------

function ConceptcheckResult({ questions , answers , onRetry , onRestart}){
  //count correct , wrong and skipped
  let correct = 0;
  let wrong = 0;
  let skipped = 0 ; 

  questions.forEach((q) => {
    const picked = answers[q.id];
    if (picked === undefined ){
      skipped = skipped + 1 ;
    }else if ( picked === q.answer ){
      correct = correct + 1 ;
    } else{
      wrong = wrong + 1 ;
    }
  });

  const pct = Math.round(( correct / questions.length)*100 ) ;

    // Mistakes = wrong + skipped questions
    const mistakes = wrong + skipped ; 

    return(
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10" >
        <div className="w-full max-w-xl lg:max-w-2xl flex flex-col items-center gap-5" >
          {/*  Score circle */}
          <div className="w-28 h-28 rounded-full border-4 border-blue-500 flex flex-col items-center justify-center" >
            <span className="text-3xl font-bold" >{pct}%</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest" >SCORE</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold" >Round Complete!</h2>
        
        {/* Correct /  Wrong / Skipped boxes */}
        <div className="grid grid-cols-3 gap-3 w-full"  >
          <div className="bg-slate-900 border border-emerald-500/30 rounded-xl p-4 text-center" >
            <span className="block text-3xl font-bold text-emerald-400" >{correct}</span>
            <span className="block text-xs text-slate-500 mt-1" >Correct</span>
          </div>

          <div className="bg-slate-900 border border-red-500/30 rounded-xl p-4 text-center" >
            <span className="block text-3xl font-bold text-red-400" >{wrong}</span>
            <span className="block text-xs text-slate-500 mt-1" >Wrong</span>
          </div>

          <div className="bg-slate-900 border border-slate-600/50 rounded-xl p-4 text-center" >
            <span className="block text-3xl font-bold text-slate-300" >{skipped}</span>
            <span className="block text-xs text-slate-500 mt-1" >Skipped</span>
          </div>

        </div>

      {/* Button */}

    {mistakes > 0 && (
      <button onClick={onRetry} className="w-full bg-amber-500 hover:bg-amber-400 font-semibold py-3.5 rounded-xl transition-colors" >
        Retry wrong & skipped ({mistakes})
      </button>
    )}

    <button onClick={onRestart} className="w-full bg-blue-600 hover:bg-blue-500 font-semibold py-3.5 rounded-xl transition-colors"  >
      Restart all questions
    </button>

        </div>
      </div>
    );

}

// ---------------------------------------------
// 4. QUIZ SCREEN (one question at a time)
// ---------------------------------------------
function ConceptCheckQuiz({mcqs , title}){
  //state
  const [questions , setQuestions ] = useState(() => shuffleOptions(mcqs)) // question in this round 
 
  const [current , setCurrent] = useState(0) ; // which question we are on
  const [answers , setAnswers] = useState({}); //{questionId: "chosen option "} 
  const [isFinished , setIsFinished] = useState(false); 
  const [isRetry ,  setIsRetry ] = useState(false); // retry mistakes ?

  //Derived values 
  const q = questions[current];
  const chosen = answers[q.id];
  const hasAnswered = chosen !== undefined; 
  const isCorrect = chosen === q.answer;
  const isLast = current === questions.length - 1 ;
  const progress = ((current + 1 )/ questions.length)*100;

  //Handlers 
  function chooseOption(option){
    if(hasAnswered) return;      // only the first click counts
    setAnswers((prev) => ({...prev , [q.id] : option })) //prev = the lestest answer
  }

  function goNext(){
    if(isLast){
      setIsFinished(true);
    }else{
      setCurrent(current + 1 );
    }
  }

  function goPrev(){
    if(current > 0 ){
      setCurrent(current - 1) ;
    }
  }


  //Start again with all questions 
function restart(){
  setQuestions(shuffleOptions(mcqs)) ; 
  setCurrent(0);
  setAnswers({});
  setIsFinished(false);
  setIsRetry(false);
}

//Start again with only the wrong + skipped questions 
function retryMistakes(){
  const mistakes = questions.filter((question) => answers[question.id] !== question.answer  );
  setQuestions(shuffleOptions(mistakes));
  setCurrent(0);
  setAnswers({});
  setIsFinished(false);
  setIsRetry(true);
} 
// Colour of each option after answering 
function optionStyle(option) {
  if (!hasAnswered){
    return "border-slate-700 hover:border-blue-500 hover:bg-blue-500/10";
  }
  if(option===q.answer){
    return "border-emerald-500 bg-emerald-500/15 text-emerald-300"   //right answer
  }
  if(option === chosen){
    return "border-red-500 bg-red-500/15 text-red-300" ; //your wrong pick
  }
  return "border-slate-800 text-slate-500"
}

//Icon for each option after answering (so its not only colour)
function optionIcon(option){
  if(!hasAnswered)return "";
  if (option === q.answer) return "✓";
  if (option===chosen) return  "✗";
  return "";
}

//Text for the next button
let nextLabel = "Skip →" ;
if (hasAnswered) nextLabel = "Next →" ;
if (isLast) nextLabel = "Finish" ;

//show result screen when done 
if (isFinished){
  return(
    <ConceptcheckResult questions={questions}  answers={answers} onRetry={retryMistakes} onRestart={restart} />
  );
}
// Main UI
const letters = "ABCDEF";
const barColor = isRetry ? "bg-amber-500" : "bg-blue-500" ;

return(
  <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-4 py-8" >
    <div className="w-full max-w-xl lg:max-w-2xl">
      {/*Header*/}
      <div className="mb-2" >
    <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold" >{isRetry ? "Retry mistakes" : title} </p>
    <p className="text-sm text-slate-400 mt-0.5" >Question {current + 1 } of {questions.length}</p>
      </div>

      {/* Progress bar*/}
      <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mb-8">
         <div className={`h-full rounded-full transition-all duration-300 ${barColor}`} style={{width: `${progress}%`}}  />
      </div>

      {/* Question (whitespace-pre-line makes \n show as a new line )*/}
      <div className="bg-slate-800 border border-emerald-500/20 rounded-2xl p-6 mb-5" >
      <span className="text-xs font-semibold uppercase tracking-widest text-blue-400" > Question </span>
      <p className= {`mt-2 whitespace-pre-line ${questionSize(q.question)}`} >{q.question}</p>

      {/*Diagram, only if the question has one */}
      {q.image && (
        <img src={q.image} alt="Diagram for this question" className="mt-4 mx-auto max-h-64 rounded-lg bg-white p-2" />
      )}
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3 mb-5">
      {q.options.map((option, index ) => (
        <button key={option} onClick={() => chooseOption(option)} className={`flex items-center gap-3 text-left border rounded-xl px-4 py-3.5 lg:py-4 lg:text-lg transition-all ${optionStyle(option)}`} >
         <span className="w-7 h-7 shrink-0 rounded-full border border-current flex items-center justify-center text-xs font-bold" >
          {letters[index]}
          </span>
          <span className="flex-1">{option}</span> 
          <span className="shrink-0 font-bold" >{optionIcon(option)}</span>
        </button>
      ))}
      </div>

      {/* Explaination, only after answering  */}
      {hasAnswered && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-5" >
        <p className={`font-semibold mb-1 ${isCorrect ? "text-emerald-400" : "text-red-400"}`} >
         {isCorrect ? "✓ Correct!" :"✗ Wrong" }
        </p>
        {q.explanation && (
          <p className="text-sm lg:text-base text-slate-400 whitespace-pre-line">{q.explanation}</p>
        )}
        </div>
      )}

      {/*Navigation*/}
      <div className="flex items-center justify-between" >
     <button onClick={goPrev} disabled={current===0} className="text-sm text-slate-200 hover:text-white disabled:opacity-20 transition-colors px-2 py-1"  >
     ← Prev
     </button>

     <button onClick={goNext}  className="text-sm bg-blue-600 hover:bg-blue-500 font-semibold px-5 py-2 rounded-lg transition-colors" >
       {nextLabel}
     </button>
      </div>

    </div>

  </div>
);

}

// ---------------------------------------------
// 5. CONCEPT CHECK (the one you import and reuse)
// ---------------------------------------------
// It checks the data first, then shows the quiz.
//

// Later: <ConceptCheck title={chapter.title} mcqs={chapter.mcqs} />
//        (no key needed - it resets by itself when the chapter changes, see quizKey below)
function Conceptcheck({mcqs , title = "concept Check"}) {
  // keep only good questions (protects against broken or AI-made data)
let goodQuestions = [];
const seenIds = new Set(); // ids of the questions we have already kept 

if(Array.isArray(mcqs)) {
  goodQuestions = mcqs.filter((q) => {
    if (typeof q.question !== "string") return false; //question  must be text
    if (!Array.isArray(q.options)) return false ; // option must be a real list 
    if (!q.options.includes(q.answer)) return false ; // answer must be one of the options

    const uniqueOptions = new Set(q.options) ;   // a set removes repeated values
    if (uniqueOptions.size !== q.options.length) return false ;  // two option are same 
    if(seenIds.has(q.id)) return false;      // same id as an earlier question
    seenIds.add(q.id);

    return true ;
  });
}

if (goodQuestions.length ===0){
  return(
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 " >
      <p className="text-slate-400 text-center" >No questions for this chapter yet , check back soon</p>
    </div>
  );
}
 // A key made from the question ids, e.g. "12,13,14".
  // When the chapter changes, the ids change, so React starts a fresh quiz
  // (new shuffle, score back to 0) instead of keeping the old chapter's questions.
const quizKey = goodQuestions.map((q) => q.id).join(",");

return <ConceptCheckQuiz key={quizKey} mcqs={goodQuestions} title={title} />

}

export default Conceptcheck ;