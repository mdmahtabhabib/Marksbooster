import { Link } from "react-router-dom";
import LegalPage, { LegalSection } from "./LegalPage";

function Privacy() {
  const linkClass = "text-blue-600 underline";

  return (
    <LegalPage title="Privacy Policy" lastUpdated="16 November 2026">

      <LegalSection heading="Who we are">
        <p>
          MarksBooster (www.marksbooster.com) is run by Md Mahtab Ansari, an
          individual based in India. This page explains what information we
          collect, why, and how you can control it.
        </p>
      </LegalSection>

      <LegalSection heading="What we collect">
        <ul className="list-disc pl-6 space-y-1">
          <li>Your name and email address, when you sign up.</li>
          <li>
            Your password, which is stored in a scrambled (encrypted) form.
            We can never see it.
          </li>
          <li>
            If you use "Continue with Google": your name, email address and
            profile picture from your Google account.
          </li>
          <li>Which course you bought, when, and your payment ID.</li>
          <li>
            Basic technical data such as your IP address and browser type,
            recorded automatically by our hosting and login services for
            security.
          </li>
        </ul>
        <p>
          We do not collect your phone number, home address, photos or ID
          documents.
        </p>
      </LegalSection>

      <LegalSection heading="Payments">
        <p>
          Payments are handled by Razorpay. Your card, UPI or bank details go
          directly to Razorpay. We never see or store them.
        </p>
      </LegalSection>

      <LegalSection heading="Why we use it">
        <ul className="list-disc pl-6 space-y-1">
          <li>To create your account and let you log in.</li>
          <li>To give you access to the course you bought.</li>
          <li>
            To send account emails, such as verification codes and password
            reset links.
          </li>
          <li>To answer your questions and fix payment problems.</li>
          <li>To keep the site secure and stop misuse.</li>
        </ul>
        <p>We do not send marketing emails without your permission.</p>
      </LegalSection>

      <LegalSection heading="Services that process your data">
        <p>We use trusted services to run MarksBooster:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Supabase: stores your account and course data, and handles login.</li>
          <li>Resend: sends account emails.</li>
          <li>Razorpay: processes payments.</li>
          <li>Google: lets you sign in with your Google account.</li>
          <li>Vercel: hosts the website.</li>
        </ul>
       
      </LegalSection>

      <LegalSection heading="We do not sell your data">
        <p>
          We never sell or rent your personal information, and we do not show
          ads.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and browser storage">
        <p>
          We store your login session in your browser so you stay logged in.
          We do not use advertising or tracking cookies.
        </p>
      </LegalSection>

      <LegalSection heading="Students under 18">
        <p>
          MarksBooster is made for school students. If you are under 18, a
          parent or guardian must agree before you create an account or buy a
          course. 
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          You can ask us to show, correct or delete your personal data at any
          time by emailing{" "}
          <a href="mailto:support@marksbooster.com" className={linkClass}>
            support@marksbooster.com
          </a>
          . We will reply within 30 days.
        </p>
      </LegalSection>

      <LegalSection heading="How long we keep it">
        <p>
          We keep your account data while your account is active. If you ask
          us to delete your account, we delete your personal data, except
          payment records, which we must keep for as long as the law requires.
        </p>
      </LegalSection>

      <LegalSection heading="Keeping it safe">
        <p>
          Your data is protected with secure connections (HTTPS) and access
          rules, so each student can only see their own information.
        </p>
      </LegalSection>

      <LegalSection heading="Grievance officer">
        <p>
          If you have a complaint about how we handle your data, contact Us at{" "}
          <a href="mailto:support@marksbooster.com" className={linkClass}>
            support@marksbooster.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          If we change this policy, we will update the date at the top of this
          page. See also our{" "}
          <Link to="/terms" className={linkClass}>Terms of Use</Link>.
        </p>
      </LegalSection>

    </LegalPage>
  );
}

export default Privacy;
