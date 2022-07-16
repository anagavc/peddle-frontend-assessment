import NavBar from "../components/Navigation/NavBar";
import dots from "../images/dots.png";
import Footer from "../components/Layout/Footer";
import { useState } from "react";
import ContactPopOver from "./Contact";
import { Paragraph, Heading } from "../components/UI/FontStyles";
const Terms = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="bg-bgImage bg-cover flex px-6 lg:px-24 flex-col py-12 w-full space-y-16 lg:space-y-12 h-full">
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
        <div className="hidden lg:block h-24 w-24 rounded-full bg-gradient-to-t from-[#19073B] to-[#7F1E7B]  py-12 absolute -top-10 left-80 z-10 "></div>
        <h3 className="text-4xl font-heading text-white z-20">
          Terms of Service
        </h3>
        <img src={dots} alt="dots" />
      </div>
      <div className="flex space-x-4 items-center w-full  relative">
        <div className="w-2 py-8 bg-white"></div>
        <Paragraph text="This Agreement is effective as of the date Customer clicks “Accepted and Agreed To” or a similar button in the process of opening an online account with Metricks Inc (the “Effective Date”). Customer’s use of and Metricks provision of the Cloud Services and Metricks System (each as defined below) are governed by this Agreement." />
      </div>
      <Paragraph text='These Terms of Service constitute an agreement (this “Agreement”) for the provision of Cloud Services by Metricks Inc. and any person or entity opening an online account with Metricks Inc (“Customer”) as specified in the information provided by Customer to Metricks in the online registration form. These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with Metricks website (the "Service") operated by Metricks Inc ("us", "we", or "our"). This Agreement is effective as of the date Customer clicks “Accepted and Agreed To” or a similar button in the process of opening an online account with Metricks Inc (the “Effective Date”). Customer’s use of and Metricks provision of the Cloud Services and Metricks System (each as defined below) are governed by this Agreement. ' />
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Heading text="1." />
          <Heading text="Website Terms and Conditions of Use" />
        </div>
        <Paragraph text="Please read these Terms of Service carefully before using the Service as they contain important information regarding the legal rights, remedies and obligations. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service." />
        <Paragraph text="By accessing this Website, accessible from http://Metricks.io, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trademark law. You agree that Metricks reserves the right to update and change these Terms from time to time without notice." />
        <Paragraph text="Any new updates, features or options that will be added to the Service, including the release of new tools and resources, shall be subject to these Terms. Please note that these Terms may be amended from time to time. In continuing to use the Service you confirm that you accept the then-current terms and conditions in full at the time you use the Service." />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Heading text="2." />
          <Heading text="Definitions" />
        </div>
        <Paragraph text="Metricks is a company that enables advertisers (“Advertisers”) to market their products online with the help of publishers (“Affiliates”). Metricks contracts only with Advertisers and has no responsibility in the relationship between Advertisers and Affiliates. Metricks offers tools to improve, register and facilitate online marketing through Affiliates (the “Service”). The payment of Affiliates shall always be the sole responsibility of the Advertisers and Metricks shall therefore never be held liable for any damages resulting from any failure of the Advertiser to pay an Affiliate in a complete and timely manner." />
        <Paragraph text="By accepting these Terms, any Advertiser using our Service warrants that he will pay the relevant Affiliate in a complete and timely manner." />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Heading text="3." />
          <Heading text="Registration" />
        </div>
        <Paragraph text="To make use of the Service, it is necessary to create an account (“Account”). The Service is intended solely for persons who are 18 or older. Any access to or use of the Service by anyone under 18 is expressly prohibited. By accessing or using the Service you represent and warrant that you are 18 or older." />
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

export default Terms;
