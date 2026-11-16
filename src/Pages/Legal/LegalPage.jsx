import { Helmet } from "react-helmet-async" ;
import Nav from "@/Components/home/Nav";
import Footer from "@/Components/home/Footer";

function LegalPage({ title , lastUpdated, children}){
    return(
        <div>
            <Helmet>
                <title>{title} | MarksBooster</title>
            </Helmet>

            <Nav />

            <main className="bg-slate-50 px-6 py-12 md:py-16" >
                <div className="max-w-3xl mx-auto" >
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2" >
                     {title}
                    </h1>
                    <p className="text-sm text-slate-500 mb-8" >
                      Last updated: {lastUpdated}
                    </p>

                    {children}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export function LegalSection({ heading , children}) {
    return(
        <section className="mt-8" >
        <h2 className="text-xl font-bold text-slate-900 mb-3" >{heading}</h2>
        <div className="text-slate-700 leading-relaxed space-y-3" >
            {children}
        </div>
        </section>
    );
}

export default LegalPage ;