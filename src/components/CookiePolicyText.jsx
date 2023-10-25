
const CookiePolicyText = () => {
  return (
    <>
      <section className="px-3 relative pb-10 sm:pb-20 lg:pb-24 pt-24 sm:pt-32 bg-black overflow-x-hidden">
        <div className="mx-auto xl:w-[952px] ">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-5xl text-white font-bold mb-8">
            Cookie Policy
          </h2>
          <div className="mb-8">
            <h3 className="text-white text-xl sm:text-2xl md:text-[28px] lg:text-3xl xl:text-[32px]  font-semibold pb-5">
              Introduction:
            </h3>
            <p className="text-white font-normal mb-4">
              This cookie policy outlines the types of cookies we use on our
              Devomon Game Website, why we use them, and how you can control
              them. By using our website, you consent to the use of cookies in
              accordance with this policy.
            </p>
            <p className="text-white font-semibold">What are cookies?</p>
            <p className="text-white font-normal ">
              Cookies are small text files that are stored on your device when
              you visit a website. They are widely used in order to make
              websites work, or work more efficiently, as well as to provide
              information to the owners of the website.
            </p>
          </div>
          <div className="mb-8">
            {" "}
            <h3 className="text-white text-xl sm:text-2xl md:text-[28px] lg:text-3xl xl:text-[32px]  font-semibold pb-5">
              Types of cookies we use:
            </h3>
            <ul className="text-white font-normal ">
              <li className="mb-2">
                Essential cookies: These cookies are essential for the proper
                functioning of the website and cannot be disabled. They allow
                you to navigate the website and use its features, such as
                accessing secure areas of the website.
              </li>
              <li className="mb-2">
                Performance cookies: These cookies collect information about how
                you use our website, such as which pages you visit and if you
                experience any errors. This information helps us to improve the
                performance of our website.
              </li>
              <li className="mb-2">
                Functionality cookies: These cookies store information that
                allows us to remember your preferences and settings, such as
                your language preference. Advertising cookies: These cookies are
                used to deliver advertisements that are relevant to your
                interests. They may also be used to limit the number of times
                you see an advertisement and to help measure the effectiveness
                of an advertising campaign.
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-white text-xl sm:text-2xl md:text-[28px] lg:text-3xl xl:text-[32px]  font-semibold pb-5">
              How to control cookies:
            </h3>
            <ul className="text-white font-normal">
              <li className="mb-2">
                You can control and manage cookies in several ways. You can
                adjust your web browser settings to reject some or all cookies,
                or to alert you when a website is attempting to place a cookie
                on your device. However, please be aware that disabling cookies
                may limit your ability to use certain features of our website.
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-white text-xl sm:text-2xl md:text-[28px] lg:text-3xl xl:text-[32px]  font-semibold pb-5">
              Contact us:
            </h3>
            <ul className="text-white font-normal">
              <li className="mb-2">
                If you have any questions or concerns about our use of cookies,
                please contact us at <a href="http://"></a>
                <a
                  href="mailto:contact@devomon.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contact@devomon.io
                </a>
                .
              </li>
              <li className="mb-2">
                This Cookie Policy was last updated on 13 February 2023. We
                reserve the right to make changes to this policy at any time.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicyText;
