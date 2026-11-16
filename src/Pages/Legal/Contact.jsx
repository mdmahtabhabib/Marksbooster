import LegalPage, {LegalSection} from "./LegalPage";

function Contact(){
    return(
        <LegalPage title="Contact Us" lastUpdated="16 November 2026" >

            <LegalSection heading="Email" >
                <p>
                    For any question about your account, payment or content, email us at {" "}
                    <a href="mailto:support@marksbooster.com" className="text-blue-600 underline" >
                    support@marksbooster.com
                    </a>
                </p>
               <p> We usually reply within 48 hours (Monday to Saturday). </p>
            </LegalSection>

            <LegalSection heading="For payment problems" >
                <p>
                    Please write from the email you used on MarksBooster and include your 
                    Payment ID or a screenshot of payment. This helps us fix it faster
                </p>
            </LegalSection>

        </LegalPage>
    );
}
export default Contact;