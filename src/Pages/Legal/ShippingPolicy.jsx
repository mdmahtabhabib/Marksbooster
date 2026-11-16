import LegalPage, { LegalSection } from "./LegalPage";

function ShippingPolicy() {
  return (
    <LegalPage title="Shipping and Delivery Policy" lastUpdated="16 November 2026">

      <LegalSection heading="Digital product only">
        <p>
          MarksBooster sells only digital study material that you use online.
          Nothing is shipped to your address, and there are no delivery charges.
        </p>
      </LegalSection>

      <LegalSection heading="When you get access">
        <p>
          Access to the class you bought is added to your account as soon as
          your payment succeeds, usually within a few minutes. Log in at
          www.marksbooster.com and open your dashboard to start studying.
        </p>
        <p>
          How long your access lasts is shown on the course page before you pay.
        </p>
      </LegalSection>

      <LegalSection heading="If you don't get access">
        <p>
          If your payment succeeded but you can't see your class after 1 hour,
          email{" "}
          <a href="mailto:support@marksbooster.com" className="text-blue-600 underline">
            support@marksbooster.com
          </a>{" "}
          with your payment ID or a screenshot of the payment. We will fix it
          within 3 working days, or refund you as explained in our Refund Policy.
        </p>
      </LegalSection>

    </LegalPage>
  );
}

export default ShippingPolicy;
