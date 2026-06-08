import { useState } from "react";

 
// 1.DATA
   


// 2. Score summary screen
function ScoreSummary({correct , wrong , wrongCards , onReview , onRestart}) {
    const total = correct + wrong ;
    const pct = total > 0 ? Math.round((correct/total)*100):0;
    return(
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 " >
            <div className="w-full max-w-sm flex flex-col items-center gap-5" >
                {/*Score circle*/}
                <div className="w-28 h-28 rounded-full border-4 border-blue-500 flex flex-col items-center justify-center" >
                    <span className="text-3xl font-bold text-white" >{pct}%</span>
                    <span className="text-xs text-slate-500 uppercase tracking-widest" >score</span>
                </div>
                <h2 className="text-2xl font-bold text-white" >Round Complete !</h2>

                {/*Correct / wrong count*/}
                <div className="grid grid-cols-2 gap-3 w-full" >
                    <div className="bg-slate-900 border border-emerald-500/30 rounded-xl p-4 text-center" >
                        <span className="block text-3xl font-bold text-emerald-400" >{correct}</span>
                        <span className="block text-xs text-slate-500 mt-1" >Correct</span>
                    </div>
                    <div className="bg-slate-900 border border-red-500/30 rounded-xl p-4 text-center" >
                        <span className="block text-3xl font-bold text-red-400" >{wrong}</span>
                        <span className="block text-xs text-slate-500 mt-1" >Wrong</span>
                    </div>
                </div>

                {/*Buttons*/}
                {wrongCards.length > 0 && (
                    <button onClick={onReview} className="w-full bg-amber-500 hover:bg-amber-400 text-white font-semibold py-3.5 rounded-xl transition-colors " >
                        Drill mistakes again ({wrongCards.length} Cards )
                    </button>
                )}
                <button onClick={onRestart} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition-colors" >
                    Restart full deck
                </button>
            </div>
        </div>
    )
}

//3. MAIN FLASHCARD COMPONENT
function  Cards({flashcards , title} ){
    // State
    const [deck , setDeck] = useState(flashcards); //Card we are studying
    const [current , setCurrent] = useState(0); //which card we are on
    const [showAnswer, setShowAnswer] = useState(false); // is card flipped
    const [scores , setScores] = useState({});    // {cardId: "correct | wrong"}
    const [wrongIds , setWrongIds] = useState(new Set()) ; //ids of wrong cards
    const [isFinished , setIsFinished] = useState(false); //reached the end?
    const [isReview , setIsReview]  = useState(false); //mistake drill mo

   // Derived values
   const card = deck[current];
   const progress = ((current + 1) / deck.length)*100;
   const correct = Object.values(scores).filter(s => s==="correct").length;
   const wrong  = Object.values(scores).filter(s => s === "wrong").length;
   const wrongCards = flashcards.filter(C => wrongIds.has(C.id));

   // Handlers
   function flipcard(){
    setShowAnswer(prev => !prev);
   }
   function goNext(){
    const isLast = current >= deck.length - 1;
    if(isLast) {
        setIsFinished(true);
    }else {
        setCurrent(prev => prev + 1);
        setShowAnswer(false);
    }
   }
 
   function goPrev(){
    if (current>0){
        setCurrent( prev => prev -1);
        setShowAnswer(false);
    }
   }

   function markCard(result){
     setShowAnswer(false);
    //Save score for this card 
    setScores (prev => ({...prev , [card.id]:result}));
   
   //if wrong, add to wrongIds set
   if(result === "wrong" ){
    setWrongIds(prev => new Set([...prev, card.id]));
   
   }
    //Auto-advance to next card
    const isLast = current >= deck.length -1;
    setTimeout(() => { if (isLast){
        setIsFinished(true);
    }else{
        setCurrent(prev => prev +1 );
    }  
    },150);
}
   function startReview(){ 
    setDeck(wrongCards);
    setCurrent(0);
    setScores({});
    setIsFinished(false);
    setIsReview(true);
 }
   function restart(){
    setDeck(flashcards);
    setCurrent(0);
    setShowAnswer(false);
    setScores({});
    setWrongIds(new Set());
    setIsFinished(false);
    setIsReview(false);
   }
    // --show summary when done --
    if (isFinished){
        return(
            <ScoreSummary 
            correct={correct}
            wrong={wrong}
            wrongCards={wrongCards}
            onReview={startReview}
            onRestart={restart} />
        );
    }
 // Main UI
    return(
       <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-4 py-8" >
        <div className="w-full max-w-xl" >
            {/*Header*/}
            <div className="flex items-center justify-between mb-2" >
                <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold" >{isReview ? "Mistake drill" : title}</p>
                    <p className="text-sm text-slate-400 mt-0.5" >Card {current + 1} of {deck.length} </p>
                </div>
                <div className="flex gap-4 text-sm font-semibold" >
                    <span>✓ {correct}</span>
                    <span>✗ {wrong}</span>
                </div>
            </div>
            {/*Progress bar*/}
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mb-8" >
                <div className={`h-full rounded-full transition-all duration-300 ${isReview ? "bg-amber-500" : "bg-blue-500"}`}
                style={{width: `${progress}%`}} />
            </div>
            {/* Flashcard 3D flip*/}
            <div onClick={flipcard} className="max-w-sm  mx-auto md:max-w-full cursor-pointer mb-6 " style={{perspective:"1200px"}} >
                <div className="relative w-full transition-all duration-500" style={{ height:"400px", transformStyle:"preserve-3d" , transform : showAnswer? "rotateY(180deg)" : "rotateY(0deg)" ,  }} >
            {/* Front face question */}
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-slate-800 px-8 gap-4 " style={{ backfaceVisibility:"hidden"  }}  >
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 " >Question</span>
            <p className="text-center text-2xl md:text-3xl text-white leading-normal " >{card.question}</p>
            <span className="text-xs text-slate-600" >Tap to flip</span>
            </div>
            {/*Back face - Answer*/}
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-slate-800 px-8 gap-4 " style={{ backfaceVisibility:"hidden" , transform:"rotateY(180deg)"}}  >
           <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400" >Answer</span>
           <p className="text-center text-xl font-normal text-emerald-100 leading-relaxed" >{card.answer}</p>
           <span className="text-xs text-slate-600" >Tap to flip</span>
            </div>
                </div>
            </div>
            
            {/*Mark button*/}
            <div className="grid grid-cols-2 gap-3 mb-4 " >
                <button onClick={() => markCard("wrong")} className={`py-3.5 rounded-xl border text-sm font-semibold transition-all ${ scores[card.id] === "wrong" ? "bg-red-500 border-red-500 text-white" : " bg-transparent border-red 500/50 text-red-400 hover:border-red-500 hover:bg-red-500/10  " }`}  > Need review</button>
                <button onClick={() => markCard("correct")} className={`py-3.5 rounded-xl border text-sm font-semibold transition-all ${scores[card.id]==="correct" ? "bg-emerald-500 text-white" : "bg-transparent border-emerald-500/50 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10"}`} >Got it right</button>
            </div>
            
            {/*Navigation*/}
            <div className="flex items-center justify-between" >
                <button onClick={goPrev} disabled ={current===0} className="text-sm text-slate-400 hover:text-white disabled:opacity-20 transition-colors px-2 py-1" >
                    ← Prev
                </button>
                <button onClick={flipcard} className="text-xs text-slate-700 hover:text-slate-500 transition-colors uppercase tracking-wider" >
                    Tap card to flip
                </button>
                <button onClick={goNext} className="text-sm text-blue-400 hover:text-blue-300 transition-colors px-2 py-1" >{current === deck.length -1 ? "Finish " : "Skip →"}</button>
            </div>

        </div>
       </div>
    );
};
export default  Cards;