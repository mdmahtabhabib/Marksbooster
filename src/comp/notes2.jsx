/* ==================================================================
   CHAPTER NOTES — VERSION 2 ("paper" / textbook style)

   test.jsx (V1) cards wala look hai — dashboard jaisa.
   Yeh V2 padhne ke liye banaya hai, textbook page jaisa:

     - warm paper background (stone), pure white nahi -> aankh kam thakti hai
     - text 17px serif + line-height 1.75 -> lambi padhai ke liye
     - ek hi column, max-w-3xl (~70 character ki line) -> aankh line ke
       end se agli line ke start tak aasaani se pahunchti hai
     - har topic ke around card border nahi, sirf ek patli line ->
       kam shor, hierarchy saaf dikhti hai
     - ek hi accent colour (blue), sirf headings aur markers par
     - laptop par left side sticky contents, phone par upar ek list

   DATA yahan dobara nahi likha — same chapter02 test.jsx se import
   ho raha hai, taaki content ek hi jagah rahe.

   Route: /notes2   (App.jsx me lagaya hai)
   ================================================================== */

import { chapter02 } from "./test";

/* ---- STEP 1: Saari class strings ek jagah --------------------------
   Normal Tailwind classes — stone (warm grey) + blue accent.
   V1 ki tarah yahan CSS variable nahi hai, sab seedha classes me hai,
   isliye padhna aur badalna dono aasaan.
-------------------------------------------------------------------- */
const STYLE = {
  // page ka dhaancha
  page:    "min-h-screen bg-stone-50 font-newsreader text-stone-800",
  shell:   "mx-auto flex max-w-6xl gap-10 px-5 md:px-8",
  column:  "min-w-0 max-w-3xl flex-1 py-8 md:py-12",   // padhne wala column

  // upar ka title block
  head:     "border-b border-stone-200 pb-6 mb-8",
  kicker:   "font-archivo text-xs font-bold uppercase tracking-[0.16em] text-blue-700",
  title:    "mt-3 text-3xl md:text-5xl font-bold leading-tight text-stone-900",
  subtitle: "mt-3 font-archivo text-sm text-stone-500",

  // contents — laptop par sticky rail, phone par simple list
  rail:      "hidden lg:block w-52 shrink-0 py-12",
  railStick: "sticky top-10",
  railHead:  "font-archivo text-[11px] font-bold uppercase tracking-[0.14em] text-stone-400",
  railList:  "mt-4 space-y-2.5 font-archivo text-sm",
  railLink:  "flex gap-2 text-stone-600 transition-colors hover:text-blue-700",
  railNo:    "w-7 shrink-0 text-stone-400 tabular-nums",
  phoneBox:  "lg:hidden mb-10 rounded-lg border border-stone-200 bg-white p-4",
  phoneList: "mt-3 space-y-2 font-archivo text-sm",

  // section
  section:  "scroll-mt-8 mb-12 md:mb-16",
  secNo:    "font-archivo text-sm font-bold text-blue-700",
  secTitle: "mt-1 font-archivo text-xl md:text-2xl font-bold text-stone-900",
  subTitle: "font-archivo text-xs font-bold uppercase tracking-[0.14em] text-stone-500",
  secRule:  "mt-4 mb-2 h-px bg-stone-200",

  // ek topic — koi card nahi, bas upar ek patli line
  topic:      "border-t border-stone-200 pt-6 mt-6 first:border-0 first:pt-0 first:mt-0",
  topicTitle: "font-archivo text-lg font-bold text-stone-900",
  metaAccent: "ml-2 font-archivo text-sm font-medium text-blue-700",
  metaMuted:  "ml-2 font-archivo text-sm font-medium italic text-stone-500",

  // content
  bullets:   "mt-3 list-disc space-y-2 pl-5 text-[17px] leading-[1.75] marker:text-stone-300",
  tableWrap: "mt-4 overflow-x-auto",
  table:     "w-full border-collapse font-archivo text-[15px]",
  th:        "border-b-2 border-stone-300 bg-stone-100 px-3 py-2.5 text-left font-bold text-stone-900",
  cell:      "border-b border-stone-200 px-3 py-2.5 align-top",
  note:      "mt-4 border-l-2 border-blue-600 bg-white py-3 pl-4 pr-3 text-[15px] leading-[1.7]",
  strong:    "font-bold text-stone-900",
  muted:     "text-stone-500",
  footer:    "mt-16 border-t border-stone-200 pt-6 font-archivo text-xs text-stone-400",
};

/* ---- STEP 2: Chhota helper -----------------------------------------
   Label me number pehle se hai ("2.1 · How to Study Cells"), isliye
   apna naya number nahi bana rahe — bas usi ko do hisso me tod diya.
-------------------------------------------------------------------- */
function splitLabel(label){
    const parts = label.split(" · ");
    if (parts.length === 2) return { no: parts[0] , name: parts[1] };
    return { no: "" , name: label };
}

/* ---- STEP 3: Text ko React elements me badalna --------------------
   Wahi chaar marker jo V1 me hain — koi HTML nahi ban sakta:

     **bold**    _italic_    %muted%    \n = line break
-------------------------------------------------------------------- */
const MARKUP = /(\*\*[^*]+\*\*|_[^_]+_|%[^%]+%|\n)/;

function RichText({ text }){
    return text.split(MARKUP).map((part , i) => {
        if (part === "\n")         return <br key={i} />;
        if (part.startsWith("**")) return <strong key={i} className={STYLE.strong} >{part.slice(2 , -2)}</strong>;
        if (part.startsWith("_"))  return <em key={i} >{part.slice(1 , -1)}</em>;
        if (part.startsWith("%"))  return <span key={i} className={STYLE.muted} >{part.slice(1 , -1)}</span>;
        return part;
    });
}

/* ---- STEP 4: Chhote components ------------------------------------
   Har component sirf props leta hai aur JSX return karta hai.
-------------------------------------------------------------------- */

// Ek bullet list
function Bullets({ list }){
    return(
        <ul className={STYLE.bullets} >
            {list.map((text , i) => <li key={i} ><RichText text={text} /></li>)}
        </ul>
    );
}

// Ek topic — title, bullets, table aur note sab optional hain
function Topic({ item }){
    // data ki keys chhoti hain (t, m, i, b, tbl, box) — yahan poore naam
    const { t: title , m: meta , i: intro , b: bullets , tbl: table , box: note } = item;

    return(
        <div className={STYLE.topic} >
            <h3 className={STYLE.topicTitle} >
                {title}
                {meta && (
                    <span className={meta[1] === "accent" ? STYLE.metaAccent : STYLE.metaMuted} >{meta[0]}</span>
                )}
            </h3>

            {intro   && <Bullets list={intro} />}
            {bullets && <Bullets list={bullets} />}

            {table && (
                <div className={STYLE.tableWrap} >
                    <table className={STYLE.table} >
                        <thead>
                            <tr>
                                {table.h.map((cell , i) => <th key={i} className={STYLE.th} ><RichText text={cell} /></th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {table.rows.map((row , ri) => (
                                <tr key={ri} >
                                    {row.map((cell , ci) => <td key={ci} className={STYLE.cell} ><RichText text={cell} /></td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {note && <div className={STYLE.note} ><RichText text={note} /></div>}
        </div>
    );
}

// Ek section — heading + uske saare topics
function Section({ sec , id }){
    const { no , name } = splitLabel(sec.label);
    const isSub = sec.variant === "sub";

    return(
        <section id={id} className={STYLE.section} >
            {isSub
                ? <h2 className={STYLE.subTitle} >{name}</h2>
                : <>
                      {no && <div className={STYLE.secNo} >{no}</div>}
                      <h2 className={STYLE.secTitle} >{name}</h2>
                  </>}
            <div className={STYLE.secRule} ></div>

            {sec.items.map((item , i) => <Topic key={i} item={item} />)}
        </section>
    );
}

// Contents ki list — laptop wala rail aur phone wala box, dono isi ko use karte hain
function ContentsLinks({ sections , className }){
    return(
        <ul className={className} >
            {sections.map((sec , i) => {
                const { no , name } = splitLabel(sec.label);
                return(
                    <li key={i} >
                        <a href={`#sec-${i}`} className={STYLE.railLink} >
                            <span className={STYLE.railNo} >{no || "·"}</span>
                            <span>{name}</span>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

/* ---- STEP 5: Poora page ------------------------------------------- */
export function ChapterNotesPaper({ chapter }){
    if(!chapter) return null;

    return(
        <div className={STYLE.page} >
            <div className={STYLE.shell} >

                {/*left rail — sirf laptop par dikhta hai, scroll ke saath chipka rehta hai*/}
                <nav className={STYLE.rail} >
                    <div className={STYLE.railStick} >
                        <div className={STYLE.railHead} >Contents</div>
                        <ContentsLinks sections={chapter.sections} className={STYLE.railList} />
                    </div>
                </nav>

                <main className={STYLE.column} >
                    <header className={STYLE.head} >
                        {chapter.kicker && <div className={STYLE.kicker} >{chapter.kicker}</div>}
                        <h1 className={STYLE.title} >{chapter.title}</h1>
                        {chapter.subtitle && <div className={STYLE.subtitle} >{chapter.subtitle}</div>}
                    </header>

                    {/*phone par rail nahi hai, isliye contents yahan upar de diya*/}
                    <div className={STYLE.phoneBox} >
                        <div className={STYLE.railHead} >Contents</div>
                        <ContentsLinks sections={chapter.sections} className={STYLE.phoneList} />
                    </div>

                    {chapter.sections.map((sec , i) => <Section key={i} id={`sec-${i}`} sec={sec} />)}

                    {chapter.footer && <div className={STYLE.footer} >{chapter.footer}</div>}
                </main>
            </div>
        </div>
    );
}

// ---- STEP 6: Wiring — App.jsx isi ko /notes2 route par import karta hai ----
function Chapter02PaperPage(){
    return <ChapterNotesPaper chapter={chapter02} />;
}
export default Chapter02PaperPage;
