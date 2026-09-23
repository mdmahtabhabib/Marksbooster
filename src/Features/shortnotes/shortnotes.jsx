// cell-the-building-block-of-life


// =====================================================
// CARD
// =====================================================

function Card({ item }){
  return(
    <article className="mb-[12px] break-inside-avoid rounded-[12px] border border-slate-200 bg-white p-[16px] shadow-sm transition duration-200 hover:-translate-y-[2px] hover:shadow-md " >
      <h3 className="mb-[8px] border-b border-slate-200 pb-[7px] text-[16px] font-bold text-slate-800 " >
     {item.title}

     {item.subtitle && (
      <span className="ml-[6px] text-[13px] font-medium italic text-slate-500 " >
        {item.subtitle}
      </span>
     )}
      </h3>


      {item.description && (
        <p className="mb-[10px] text-[15px] leading-[1.5] text-slate-700 "  >
          {item.description}
        </p>
      )}


     { item.bullets && (
      <ul className="list-disc space-y-[4px] pl-[19px] text-[15px] leading-[1.5] text-slate-700" >
    {item.bullets.map((bullet, index) => (
      <li key={index} >{bullet}</li>
    ))}
      </ul>
     )} 


     {item.table && (
      <div className="mt-[10px] overflow-x-auto" >
        <table className="w-full border-collapse text-[12px]" >
          <thead>
            <tr>
              {item.table.headers.map((header , index) =>(
                <th key={index} className="border border-slate-200 bg-slate-50 px-[7px] py-[6px] text-left font-bold text-slate-800" >
                  {header}
                </th>
              ) )}
            </tr>
          </thead>

          <tbody>
           {item.table.rows.map((row, rowIndex) =>(
            <tr key={rowIndex} >
              {row.map((cell, cellIndex) => (
               <td key={cellIndex} className="border border-slate-200 px-[7px] py-[6px] align-top whitespace-pre-line text-slate-700"  >
                {cell}
               </td>
              ))}

            </tr>
           ) ) } 
          </tbody>
        </table>
      </div>
     )}


     { item.note && (
      <div className="mt-[10px] rounded-[8px] bg-slate-50 px-[11px] py-[9px] text-[13px] leading-[1.55] text-slate-700" >
       {item.note.map((line, index ) => (
        <div key={index} >
        {line}
        </div>
       ))}
      </div>
     )

     }
    </article>
  );
}

// =====================================================
// SECTION
// =====================================================

function Section({ section }) {
  return(
    <section>
      <div className={section.type=== "sub" ? "mb-[8px] mt-[16px] break-inside-avoid text-[13px] font-bold uppercase tracking-[0.06em] text-slate-500 " : "mb-[10px] mt-[20px] break-inside-avoid border-l-[3px] border-[#0e5490] pl-[8px] text-[14px] font-bold uppercase tracking-[0.08em] text-[#0e5490] "}  >
       {section.title}
      </div>

      {section.items && section.items.map((item, index )=>(
        <Card key={`${section.title}-${index}`} item={item}/>
      ))}
    </section>
  );
}

// =====================================================
// SHORT NOTES
// =====================================================
 
export default function ShortNotes ({ chapter }){
  if (!chapter){
    return null ;
  }

  return(
    <div className="min-h-screen bg-slate-100 text-slate-800" >
      <header className="sticky top-0 z-20 bg-[linear-gradient(165deg,#2379bb_0%,#125a9b_48%,#0a4a80_100%)] text-white shadow-[0_1px_2px_rgba(10,74,128,0.45),0_10px_28px_-12px_rgba(10,74,128,0.55)] ">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(115%_130%_at_12%_-15%,rgba(255,255,255,0.18),transparent_58%)]" />
         <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/15" />
          <div className="relative mx-auto max-w-[1080px] px-[22px] pb-[15px] pt-[17px]" >
            {chapter.kicker && (
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65" >
                {chapter.kicker}
              </div>
            )}

            <h1 className="mt-[6px] text-[25px] font-bold leading-[1.15] tracking-[-0.015em] sm:text-[29px]" >
              {chapter.title}
            </h1>
            
          {chapter.subtitle &&(
            <div className="mt-[6px] text-white/70" >
              {chapter.subtitle}
            </div>
          )}
          </div> 
        
      </header>

    {/* CONTENT */}
    <div className="mx-auto max-w-[1080px]" >
      <main className="px-[22px] pb-[40px] pt-[24px]" >
        {chapter.sections.map((section , index ) => (
          <Section key={`${section.title}-${index}`} section={section} />
        ))}

        { /*FOOTER*/ }

        {chapter.footer &&(
          <footer className="pt-[22px] text-center text-[11px] text-slate-500 " >
            {chapter.footer}
          </footer>
        )}
      </main>

    </div>

    </div>
  );
}
