import NavBar from "../components/Navigation/NavBar";
import dots from "../images/dots.png";
import Footer from "../components/Layout/Footer";
import { useState } from "react";
import ContactPopOver from "./Contact";
import { Paragraph, Heading } from "../components/UI/FontStyles";
const Privacy = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="bg-bgImage bg-cover flex px-6 lg:px-24 flex-col py-12 w-full space-y-16 lg:space-y-12 h-full ">
      <navbar className="flex justify-between">
        <NavBar
          bgColor="#1f0041"
          showContact={showContact}
          setShowContact={setShowContact}
        />
      </navbar>
      {showContact && (
        <ContactPopOver
          showContact={showContact}
          setShowContact={setShowContact}
        />
      )}
      <div className="flex justify-between items-center w-full  relative mt-24">
        <div className="hidden lg:block h-40 w-40 rounded-full bg-gradient-to-t from-[#19073B] to-[#7F1E7B]  py-12 absolute top-52 right-0  "></div>
        <h3 className="text-4xl font-heading text-white z-20">
          Privacy Policy
        </h3>
        <img src={dots} alt="dots" />
      </div>

      <Paragraph text="1. At Metricks, accessible from http://metricks.io, one of our main priorities is the privacy of our users. This Privacy Policy document contains types of information that is collected and recorded by Metricks.io and how we use it." />
      <Paragraph text="2. This Privacy Policy applies only to our online activities and is valid for visitors to our software with regards to the information that they shared and/or collected in Metricks.io. This policy is not applicable to any information collected offline or via channels other than this software." />
      <Paragraph text="3. We only disclose your personal data to third parties that assist us with providing you with our services and, if you authorize us explicitly, to our affiliated companies for the purpose of customer relationship management, analytics and marketing." />

      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Heading text="1." />
          <Heading text="Consent" />
        </div>
        <Paragraph text="By using our software, you hereby consent to our Privacy Policy and agree to its terms." />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Heading text="2." />
          <Heading text="Information we collect" />
        </div>
        <Paragraph text="1. The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information." />
        <Paragraph text="2. Unless specified otherwise, all Data requested by Metricks is mandatory and failure to provide this Data may make it impossible for Metricks to provide its services. In cases where Metricks specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.." />
        <Paragraph text="3. Users are responsible for any third-party Personal Data obtained, published or shared through this software and confirm that they have the third party's consent to provide the Data to the Owner." />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Heading text="3." />
          <Heading text=" Log data" />
        </div>
        <Paragraph text="Metricks.io follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information." />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Heading text="4." />
          <Heading text="Accounts" />
        </div>
        <Paragraph text="1. When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. To create your Account you will have to provide your full name with a current email address and credit card details (only Advertisers)." />
        <Paragraph text="2. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service." />
        <Paragraph text="3. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account." />
        <Paragraph text="4. You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene." />
        <Paragraph text="5. Your Account is strictly personal and may not be used by anyone else. You may not impersonate any other person in any registration whether or not that other person is a user of the Service." />
        <Paragraph text="6. If you manage more than one business entity, you must create a new Account for each different business entity. If you fail to do so, we reserve the right at our discretion to block, cancel or remove an Account of any person who in our opinion possesses more than one Account at any time." />
        <Paragraph text="7. We reserve the right to terminate your registration immediately without notice if in our opinion you have breached these Terms." />
        <Paragraph text="8. You may not use the Service for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws)." />
      </div>

      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Heading text="5." />
          <Heading text="Fees" />
        </div>
        <Paragraph text="1. A valid payment method, including a credit card or PayPal, is required for paying accounts. If neither of these is present on the account, the account may be closed." />
        <Paragraph text="2. Metricks, in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle. You hereby agree to keep such valid credit card and/or bank account in effect with sufficient credit limit to enable Metricks to charge the Subscription Fees every month, quarter or another period of each Term, as applicable, and not to challenge such charges or to request reversal of such charges." />
      </div>

      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Heading text="6." />
          <Heading text="Taxes" />
        </div>
        <Paragraph text="All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you shall be responsible for payment of all such taxes, levies, or duties. Metricks has no responsibility or legal power to ensure the payment of the Advertiser and accepts no responsibility or liability if the Affiliate fails to arrange or collect payment from the Advertiser. Metricks may add any such taxes to the applicable Fees." />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Heading text="7." />
          <Heading text="Refunds" />
        </div>
        <Paragraph text="The Service is billed in advance on a monthly or yearly basis and is non-refundable. There will be no refunds or credits for partial months of service, upgrade/downgrade refunds, or refunds for months unused with an open account." />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Heading text="8." />
          <Heading text="Fee changes" />
        </div>
        <Paragraph text="1. Metricks, in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle. Metricks will provide you with reasonable prior notice of any change in Subscription fees to allow you to terminate your Subscription before such change becomes effective. Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount." />
        <Paragraph text="2. Metricks shall not be liable to you or any third party for any modification, price change, suspension or discontinuance of the Service." />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Heading text="9." />
          <Heading text="Subscription and Tracking" />
        </div>
        <Paragraph text="1. If you choose to upgrade or downgrade your Service, your credit card will automatically be charged the new rate on your next billing cycle. on your next billing cycle." />
        <Paragraph text="2. Downgrading your Service may cause the loss of content, features, or capacity of your Account. Metricks does not accept any liability for such loss." />
        <Paragraph text="3. Downgrading your Service to a non-white label level will cause all Affiliates who registered while the white label Service was activated, to be deactivated" />
        <Paragraph text="4. Every Service level has its number of tracking events (“Tracking Events”). Whenever the number of Tracking Events, as agreed upon and limited in the relevant Service level, is exceeded during the Subscription Period, we will calculate the price for the surplus Tracking Events following the overage fees listed on the pricing page as part of the service level. In such a case, the extra costs of the surplus Tracking Events will be added to the relevant monthly fee." />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Heading text="10." />
          <Heading text="Cancellation and Termination" />
        </div>
        <Paragraph text="1. We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service." />
        <Paragraph text="2. If we exercise our discretion under these Terms to do so, any or all of the following can occur with or without prior notice or explanation to you: (a) your Account will be deactivated or suspended, your password will be disabled, and you will not be able to access the Service, or receive assistance from our customer service." />
        <Paragraph text="3. You may cancel your Account at any time from the Subscription & Billing page. You are solely responsible for properly cancelling your account. Please note that if your Account is cancelled, we do not have an obligation to delete or return to you any content." />
        <Paragraph text="4. All of your content (text and files) may be immediately deleted from the Service upon cancellation. This information cannot be recovered once your account is cancelled." />
        <Paragraph text="5. If you cancel the Service before the end of your current Service Period, your cancellation will take effect immediately and you will not be charged again." />
        <Paragraph text="6. Metricks, in its sole discretion, has the right to suspend or terminate your account and refuse any current or future use of the Service, or any other service from Metricks, for any reason at any time. Such termination of the Service will result in the deactivation or deletion of your Account or your access to your Account, and the forfeiture and relinquishment of all content in your Account. Metricks reserves the right to refuse service to anyone for any reason at any time." />
      </div>
      <div className="flex flex-col space-y-6">
        <Heading text="Contact Us" />

        <Paragraph text="If you have any questions about these Terms, please contact us over live chat or email support@metricks.io" />
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
