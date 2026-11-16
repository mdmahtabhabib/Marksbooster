import LegalPage, { LegalSection } from "./LegalPage";

function RefundPolicy(){
    return(
        <LegalPage title="Refund Policy" lastUpdated="16 November 2026" >

            <LegalSection heading="Summary">
                <p>
                    MarksBooster sells digital study material. You get access as soon as 
                    your payment succeeds. Because the full content is available to you 
                    straight away, we do not give refunds once access has been given, 
                    except in the cases below.
                </p>
            </LegalSection>

            <LegalSection heading="When you will get a full refund" >
             <ul className="list-disc pl-6 space-y-1" >
            <li>You were charged twice for the same purchase. </li>
            <li>
                Money was taken from your account, but you did not get access, and 
                we could not fix it within 3 working days of your email.
            </li>
            <li>
                A technical problem on our side stops you from using the content,
                and we cannot fix it within 7 days.
            </li>
             </ul>
            </LegalSection>

            <LegalSection heading="When we cannot give a refund" >
                <ul className="list-disc pl-6 space-y-1" > 
                     <li>You changed your mind or no longer need the course.</li>
                     <li>You did not use the content.</li>
                     <li>Your access period has ended. </li>
                     <li>
                        Your account was blocked for breaking our Terms
                     </li>
                </ul>

            </LegalSection>

            <LegalSection heading="Failed payments" >
             <p>
                If money was taken but the payment shows as failed, it is usually 
                returned to you automatically by your bank within 5-7
                working days. If it isn't, email us. 
             </p>
            </LegalSection>

            <LegalSection heading="How to ask for a refund" >
                <p>
                    Email{" "}
                    <a href="mailto:support@marksbooster.com" className="text-blue-600 underline">
                    support@marksbooster.com
                    </a> {" "}
                    within 30 days of payment, from the email you used on MarksBooster.
                    Include your Payment ID (or a screenshot of the payment) and explain the problem.
                </p>
            </LegalSection>

            <LegalSection heading="How you get the money back" > 
              <p>
                Approved refunds go back to the original payment method (UPI, card or 
                net banking), within 5-7 working days. Your bank may take a little 
                longer to show it.
              </p>
            </LegalSection>

        </LegalPage>
    );
}

export default RefundPolicy;