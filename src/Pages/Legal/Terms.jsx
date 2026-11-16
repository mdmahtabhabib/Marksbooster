import { Link } from "react-router-dom";
import LegalPage, { LegalSection } from "./LegalPage";

function Terms() {
  const linkClass = "text-blue-600 underline";

  return (
    <LegalPage title="Terms of Use" lastUpdated="16 November 2026">

      <LegalSection heading="About these terms">
        <p>
          MarksBooster (www.marksbooster.com) is run by Md Mahtab Ansari, an
          individual based in India ("we", "us"). By creating an account or
          buying a course, you agree to these terms. Please read them with our{" "}
          <Link to="/privacy" className={linkClass}>Privacy Policy</Link> and{" "}
          <Link to="/refund-policy" className={linkClass}>Refund Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection heading="Students under 18">
        <p>
          If you are under 18, a parent or guardian must agree to these terms
          and make or approve any payment.
        </p>
      </LegalSection>

      <LegalSection heading="Your account">
        <ul className="list-disc pl-6 space-y-1">
          <li>One account is for one student only.</li>
          <li>Do not share your login with anyone.</li>
          <li>Keep your password safe. You are responsible for activity on your account.</li>
          <li>Give a correct name and email address.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Buying a course">
        <p>
          Prices are in Indian Rupees (₹) and are shown before you pay.
          Payments are processed securely by Razorpay. We never see or store
          your card or UPI details.
        </p>
        <p>
          How long your access lasts is shown on the course page before you
          pay. When the access period ends, the paid content is no longer
          available unless you buy again.
        </p>
        <p>
          Refunds are given only as explained in our{" "}
          <Link to="/refund-policy" className={linkClass}>Refund Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection heading="Using the content">
        <p>
          All notes, flashcards, questions and other material on MarksBooster
          belong to us. You may use them for your own study only. You may not
          copy, share, sell, record, or publish them anywhere else.
        </p>
      </LegalSection>

      <LegalSection heading="Blocking an account">
        <p>
          We may block an account that is shared, misuses the content, or
          breaks these terms. A blocked account does not get a refund.
        </p>
      </LegalSection>

      <LegalSection heading="Our responsibility">
        <p>
          We work hard to keep the content correct and the site running, but
          we cannot promise it will always be error-free or available. The
          content helps you study; it does not guarantee any exam marks or
          results. Our total responsibility to you is limited to the amount
          you paid for the course.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these terms">
        <p>
          We may update these terms. The date at the top of this page shows
          the latest version. Continuing to use MarksBooster after a change
          means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection heading="Law and disputes">
        <p>
          These terms follow the laws of India. Any dispute will be handled
          by the courts in Ranchi, Jharkhand.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions? Email{" "}
          <a href="mailto:support@marksbooster.com" className={linkClass}>
            support@marksbooster.com
          </a>{" "}
          or see our <Link to="/contact" className={linkClass}>Contact page</Link>.
        </p>
      </LegalSection>

    </LegalPage>
  );
}

export default Terms;
