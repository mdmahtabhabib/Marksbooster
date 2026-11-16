import LegalPage, {LegalSection} from "./LegalPage";

function About(){
    return(
        <LegalPage title="About Us" lastUpdated="16 November 2026" >

            <LegalSection heading="Who we are" >
                <p>
                    MarksBooster is an online study platform that helps school students
                    revise smarter and score better in their exams. It is run by
                    Md Mahtab Ansari from Ranchi, Jharkhand, India.
                </p>
            </LegalSection>

            <LegalSection heading="What we offer" >
                <p>
                    For every chapter, students get four study tools: Flashcards, Short Notes,
                    Concept Check (MCQ practice) and Important Questions.
                </p>
                <p>
                    We are live now for CBSE Class 8 and Class 9. More classes and exams are coming soon.
                </p>
            </LegalSection>

            <LegalSection heading="How it works" >
                <p>
                    Students create an account, buy access to their class, and can then use
                    all its study tools online right away on mobile or computer. Nothing is
                    shipped physically. The price and access period are shown before payment.
                </p>
            </LegalSection>

            <LegalSection heading="Contact" >
                <p>
                    Have a question? Email us at {" "}
                    <a href="mailto:support@marksbooster.com" className="text-blue-600 underline" >
                    support@marksbooster.com
                    </a>
                </p>
            </LegalSection>

        </LegalPage>
    );
}
export default About;
