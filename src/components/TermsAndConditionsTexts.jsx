import { useEffect } from "react";
import { Link } from "react-router-dom";

const TermsAndConditionsTexts = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="px-3 relative pb-10 sm:pb-20 lg:pb-24 pt-24 sm:pt-32 bg-black overflow-x-hidden">
      <div className="mx-auto xl:w-[952px]">
        <h3 className="text-white sm:text-4xl text-[28px] font-poppins font-bold pb-3">
          Service Terms for Devomon by Saguni Tech LLC - FZ - "Devomon Callisto"
        </h3>
        <p className="font-normal font-poppins text-white">
          Last Updated: January 3, 2024
        </p>
        <ul className="text-white list-decimal list-outside sm:ps-7 ps-4 font-poppins">
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">INTRODUCTION:</strong> These Terms
              of Service ("Terms") govern your access to and use of our
              services, including our games, mobile applications, websites, and
              other online products and services (collectively referred to as
              "Services"), provided by SaGuNi Tech L.L.C - FZ ("we," "us,"
              "our," etc.). By using our Services, you agree to these Terms.
              Users must be of legal age and agree to all our terms to use our
              services. This license is non-transferable and intended only for
              personal, non- commercial use
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">CHANGES TO TERMS:</strong> We
              reserve the right to modify these Terms at any time. We will
              notify you of such changes by changing the date of the last update
              at the top of this page and, in some cases, providing additional
              notice. Your continued use of the Services following such changes
              constitutes your agreement to the new Terms.
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">USE OF SERVICES:</strong>{" "}
              <p>
                <span className="font-medium">a) Account Creation:</span> You
                must create an account to access certain features of our
                Services. You are responsible for the security of your account
                and the truthfulness of the information provided.
              </p>{" "}
              <p>
                <span className="font-medium">b) Beam Integration:</span> Our
                Services may utilize the integration of Beam from Merit Circle,
                which allows you to use game accounts for optional Web3
                features. This use is voluntary and supplements the basic Web2
                elements of the game.
              </p>{" "}
              <p>
                <span className="font-medium">c) Privacy:</span> We take the
                protection of your data seriously. Our privacy practices are
                detailed in our Privacy Policy. Users are responsible for the
                security of their account and must keep passwords confidential.
                Any activities occurring under their account are their
                responsibility.
              </p>
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">PROPERTY RIGHTS:</strong> All
              content, including texts, graphics, logos, and software, are the
              property of SaGuNi Tech L.L.C - FZ or our licensors and are
              subject to copyright and other intellectual property rights. All
              content and services of Devomon are copyrighted. Users are granted
              a license to use, without obtaining any ownership rights
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">DISCLAIMER OF WARRANTIES:</strong>{" "}
              We provide the Services "as is" and "as available," without any
              express or implied warranties.
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">LIMITATION OF LIABILITY:</strong>{" "}
              Our liability for direct damages arising from or in connection
              with the use of our Services is limited to the amount you have
              paid us in the last twelve months.
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">
                APPLICABLE LAW AND JURISDICTION :
              </strong>{" "}
              These Terms are governed by the laws of your country and should be
              interpreted accordingly.
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">CONTACT :</strong> For questions
              or concerns about these Terms, please contact us at{" "}
              <Link
                to={"http://contact@devomon.io"}
                target="_blank"
                rel="noopener noreferrer"
              >
                contact@devomon.io
              </Link>
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">USAGE RESTRICTIONS:</strong>{" "}
              <p>
                <span className="font-poppins font-medium">
                  a) Prohibited Activities:
                </span>{" "}
                You may not use the Services for illegal purposes or in a manner
                that could harm, disable, overload, or impair our Services.
              </p>
              <p>
                <span className="font-poppins font-medium">
                  b) Copyright Infringement:{" "}
                </span>{" "}
                Copyright and other intellectual property rights violations are
                strictly prohibited.
              </p>
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">USER CONTENT:</strong>{" "}
              <p>
                <span className="font-poppins font-medium">
                  a) Rights to User Content:
                </span>{" "}
                You retain all rights to the content you create and share, and
                you grant us a limited license to use that content in connection
                with the operation of our Services.
              </p>{" "}
              <p>
                <span className="font-poppins font-medium">
                  {" "}
                  b) Responsibility:
                </span>{" "}
                You are solely responsible for the content you create and its
                consequences. Users are responsible for the content they create.
                We reserve the right to remove content that violates our
                guidelines
              </p>
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">TERMINATION:</strong>{" "}
              <p>
                <span className="font-poppins font-medium">
                  a) By the User:
                </span>{" "}
                You can terminate your use of the Services at any time by
                deleting your account or discontinuing the use of the Services.
              </p>{" "}
              <p>
                <span className="font-poppins font-medium">b) By Us:</span> We
                reserve the right to terminate your use of the Services for
                cause, including but not limited to violations of these Terms.
              </p>
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">
                Game Currency and Virtual:
              </strong>{" "}
              Game currency and virtual items can be purchased in-game and are
              usable only within our services.
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">Right of Withdrawal:</strong> EU
              users have the right to withdraw from a purchase within 14 days
              unless the service has already commenced.
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">Online Behavior:</strong> Users
              must adhere to our code of conduct, including avoiding harassment,
              fraud, and other inappropriate behaviors.
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">
                LINKS TO THIRD-PARTY SITES:
              </strong>{" "}
              Our Services may contain links to third-party websites. These
              links are provided for convenience, and we do not take
              responsibility for the content or practices of these third-party
              sites.
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">INDEMNIFICATION:</strong> You
              agree to indemnify SaGuNi Tech L.L.C - FZ and its partners,
              employees, and agents from all claims, damages, losses, and costs
              arising from your use of the Services or your violation of these
              Terms.
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">DISPUTE RESOLUTION:</strong>
              Arbitration is preferred for the resolution of disputes between
              you and SaGuNi Tech L.L.C - FZ. Court proceedings are only
              provided as a last resort.
            </p>
          </li>
          <li className="sm:ps-3 pt-3">
            <p>
              <strong className="text-[18px]">MISCELLANEOUS:</strong>
              <p>
                <span className="font-medium">a) Entire Agreement:</span> These
                Terms constitute the entire agreement between you and SaGuNi
                Tech L.L.C - FZ and supersede all previous agreements and
                understandings.
              </p>
              <p className="font-medium">
                b) Amendments: Changes to these Terms are only effective when
                made in writing by SaGuNi Tech L.L.C - FZ.
              </p>
            </p>
          </li>
        </ul>
        <p className="text-white pt-5 font-poppins">
          Contact Information For any questions, inquiries, or feedback
          regarding our Terms of Service or other matters, please contact us
          through the following means: Website: www.devomon.io Email:
          contact@devomon.io Company Address: Saguni Tech LLC Business Center 1,
          Nad AI Sheba, Dubai, U.A.E Contact Person: Martin Schulze, Game
          Director
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditionsTexts;
