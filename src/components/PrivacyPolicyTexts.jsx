import { useEffect } from "react";

const PrivacyPolicyTexts = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="px-3 relative pb-10 sm:pb-20 lg:pb-24 pt-24 sm:pt-32 bg-black overflow-x-hidden">
        <div className="mx-auto xl:w-[952px] text-white">
          <h3 className="text-white sm:text-4xl text-[28px] font-poppins font-bold pb-5">
            <strong>Privacy Policy for Devomon</strong>
          </h3>
          <p className="font-normal font-poppins">
            Last Updated: January 3, 2024
          </p>
          <p className="font-normal font-poppins">
            This Privacy Policy clarifies how Saguni Tech LLC, operator of
            Devomon (“we”, “us”, “our”, etc.), collects, uses, and shares your
            personal data when you use our website (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className=" font-normal font-poppins color-white text-decoration-none"
              href="https://www.devomon.io"
            >
              www.devomon.io
            </a>
            ), our game, mobile applications, and other online products and
            services (collectively “Services”), or otherwise interact with us.
            We are the data controller of your personal data under the EU
            General Data Protection Regulation and other local data protection
            laws. We may change this Privacy Policy from time to time and will
            notify you accordingly. .
          </p>
          <h3 className="text-2xl my-2 font-medium font-poppins pt-2">
            1. Data Collection
          </h3>
          <ul className="font-normal font-poppins list-disc  pl-8 space-y-2">
            <li>
              <p>
                <strong>Data provided by you:</strong> Collected during account
                creation, game interactions, image uploads, customer service
                usage, newsletter registration, survey participation, or other
                communications.
              </p>
            </li>
            <li>
              <p>
                <strong>Automatically collected data:</strong> Includes gameplay
                usage data, log information, device hardware information, and
                location data.
              </p>
            </li>
            <li>
              <p>
                <strong>Information collected from third parties:</strong> We
                may also gather data from other sources and combine it with the
                information collected through our Services.
              </p>
            </li>
            <li>
              <p>
                We collect various types of information, including, but not
                limited to, device information (such as model, operating
                system), usage data (such as gameplay activities, in-app
                purchases), and personal data required for creating a user
                account.
              </p>
            </li>
          </ul>
          <h3 className="text-2xl my-2 pt-2 font-medium font-poppins">
            2. Data Usage
          </h3>
          <ul className="font-normal font-poppins list-disc  pl-8 space-y-2">
            <li>
              Data is collected, stored, and used only with your consent or as
              necessary for contract fulfillment, legal requirements, or
              pursuing legitimate interests.
            </li>
          </ul>
          <h3 className="text-2xl my-2 pt-2 font-medium font-poppins">
            3. Information Sharing
          </h3>
          <ul className="font-normal font-poppins list-disc  pl-8 space-y-2">
            <li>
              Personal data is not shared with third parties, except as
              necessary for providing our products and services or as legally
              permitted or required.
            </li>
          </ul>
          <h3 className="text-2xl my-2 pt-2 font-medium font-poppins">
            4. Third-Party Advertising and Analysis Services
          </h3>
          <ul className="font-normal font-poppins list-disc  pl-8 space-y-2">
            <li>
              We may allow others to provide analysis services for us and place
              advertising in our Services.
            </li>
          </ul>
          <h3 className="text-2xl my-2 pt-2 font-medium font-poppins">
            5. Social Sharing Features
          </h3>
          <ul className="font-normal font-poppins list-disc  pl-8 space-y-2">
            <li>
              Services may include social sharing features that allow you to
              share information with friends or the public.
            </li>
          </ul>
          <h3 className="text-2xl my-2 pt-2 font-medium font-poppins">
            6. Security
          </h3>
          <ul className="font-normal font-poppins list-disc  pl-8 space-y-2">
            <li>
              We take reasonable technical and organizational precautions to
              protect your data.
            </li>
          </ul>
          <h3 className="text-2xl my-2 pt-2 font-medium font-poppins">
            7. Data Storage and Deletion
          </h3>
          <ul className="font-normal font-poppins list-disc  pl-8 space-y-2">
            <li>
              Data is stored and deleted in accordance with privacy regulations.
            </li>
          </ul>
          <h3 className="text-2xl my-2 pt-2 font-medium font-poppins">
            8. International Transfers
          </h3>
          <ul className="font-normal font-poppins list-disc  pl-8 space-y-2">
            <li>
              Your data may be transferred to and processed on our servers
              outside your country.
            </li>
            <li>
              Personal data may be transferred to other countries and processed
              there, always complying with applicable privacy laws.
            </li>
          </ul>
          <h3 className="text-2xl my-2 pt-2 font-medium font-poppins">
            9. Your Rights
          </h3>
          <ul className="font-normal font-poppins list-disc  pl-8 space-y-2">
            <li>
              As a data subject, you have rights regarding your personal data:
              access, correction, deletion, processing restriction, and data
              portability.
            </li>
            <li>
              Users have the right to access, correct, or delete their personal
              data. Requests can be made through the game settings or directly
              through our customer service.
            </li>
          </ul>
          <h3 className="text-2xl my-2 pt-2 font-medium font-poppins">
            10. Contact Information
          </h3>
          <ul className="font-normal font-poppins list-disc  pl-8 space-y-2">
            <li>
              If you have questions about this Privacy Policy or want to
              exercise your rights, contact us at: Saguni Tech LLC, Business
              Center 1, Nad Al Sheba, Dubai, U.A.E, Email: contact@devomon.io,
              Contact Person: Martin Schulze, Game Director.
            </li>
          </ul>
          <h3 className="text-2xl my-2 pt-2 font-medium font-poppins">
            11. Changes to This Privacy Policy
          </h3>
          <ul className="font-normal font-poppins list-disc  pl-8 space-y-2">
            <li>
              We reserve the right to change this Privacy Policy from time to
              time. Changes will be posted on our website and communicated via
              email or our services if significant.
            </li>
            <li>
              Consent of parents or guardians is required for users under
              [appropriate age]. We take additional measures to protect the data
              of minors, including limited access to certain game content.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyTexts;
