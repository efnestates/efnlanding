import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className=" text-heading2-bold font-bold">Privacy Policy</h1>
            <p className="py-6 text-small-regular">
              EFN Estates is firmly committed to the security and protection of
              personal information of our Users. This Privacy Policy describes
              how EFN Estates will collect, use, share and process personal
              information. Capitalized terms not defined in this Privacy Policy
              are defined in the EFN Estates Terms of Service.
            </p>
          </div>
        </div>
      </div>
      <p className=" text-body1-bold">1. PERSONAL INFORMATION COLLECTED</p>
      <div className="pl-4">
        <ol class="list-[upper-latin] list-inside ">
          <li className=" text-base-regular font-bold mt-2">User Profile</li>
          <p className="text-small-regular">
            When You create a user profile in the Services and confirm being the
            holder of a certain number, EFN Estates will collect the information
            provided by You. In order to create a user profile, You must
            register Your first name, last name and phone number. Additional
            information that may be provided at Your option include, but is not
            limited to, photo, gender, street address and zip code, country of
            residence, email address, professional website, Facebook page,
            Twitter address and a short status message. EFN Estates may
            supplement the information provided by You with information from
            third parties and add it to the information provided by You e.g.
            demographic information and additional contact information that is
            publicly available.
          </p>
          <li className=" text-base-regular font-bold mt-3">
            Installation And Use
          </li>
          <p className="text-small-regular">
            When You install and use the Services, EFN Estates will collect
            personal information from You and any devices You may use in Your
            interaction with our Services. This information may include e.g.:
            geo-location; Your IP address; device ID or unique identifier;
            device manufacturer and type; device and hardware settings; SIM card
            usage; applications installed on your device; ID for advertising; ad
            data, operating system; web browser; operator; IMSI; connection
            information; screen resolution; usage statistics; default
            communication applications; access to device address book; device
            log and event information; logs, keywords and meta data of incoming
            and outgoing calls and messages; version of the Services You use and
            other information based on Your interaction with our Services such
            as how the Services are being accessed (via another service, web
            site or a search engine); Your paired devices (such as smart watch);
            the pages You visit and features you use on the Services; the
            services and websites You engage with from the Services; content
            viewed by You, content You have commented on or sent to us and
            information about the ads You see and/or engage with; the search
            terms You use; order information and other usage activity and data
            logged by EFN Estates’s servers from time to time. EFN Estates may
            collect some of this information automatically through use of
            cookies and You can learn more about our use of cookies in our
            Cookie Policy.
          </p>
          <p className=" text-small-regular mt-2">
            Some information, including, but not limited to, usage information
            and other information that may arise from Your interaction with the
            Services, cannot be used to identify You, whether in combination
            with other information or otherwise and will not constitute personal
            information for the purposes of this Policy.
          </p>

          <li className=" text-base-regular font-bold mt-3">
            Third Party Services
          </li>
          <p className="text-small-regular">
            You may provide us with Your user identifier information regarding,
            or to enable Your usage of, certain third party services (together
            with a mapped photo where applicable) e.g. social networking
            services and payment services, in order for the Services to
            interoperate with such third party services. You may use such third
            party services to create Your user profile or log in to our
            Services, share information with such third party services, or to
            connect Your user profile with the respective third party services.
            Such third party services may automatically provide us with access
            to certain personal information retained by them about You (e.g.,
            your payment handle, unique identification information, content
            viewed by You, content liked by You and information about the
            advertisements You have been shown or may have clicked on) and You
            agree that we may collect, use and retain the information provided
            by these third party services in accordance with this Privacy
            Policy. You may be able to control the personal information You
            allow us to have access to through the privacy settings on the
            respective third party service. We will never store any passwords
            created for any third party services.
          </p>

          <li className=" text-base-regular font-bold mt-3">
            Contact Information
          </li>
          <p className="text-small-regular">
            Where the EFN Estates mobile applications (“EFN Estates Apps”) are
            obtained from other sources than Apple App Store or Google Play, You
            may share the names, numbers, Google ID’s and email addresses
            contained in Your address book (“Contact Information”) with EFN
            Estates by enabling the EFN Estates Enhanced Search Functionality.
            Where the EFN Estates Apps are obtained from Apple App Store or
            Google Play, we do not share any user Contact Information. In
            addition to Contact Information, if You choose to activate use of a
            third party service, such as social networks services, within the
            Services, EFN Estates may collect, store and use the list of
            identifiers associated with said services linked to the Contact
            Information in order to enhance the results shared with other Users.
          </p>

          <p className=" text-small-regular mt-2">
            Please note that no other contact information other than the phone
            numbers and thereto attached names, Google ID’s and email addresses
            will be collected and used from Your address book. Other numbers or
            information that may be contained in Your address book will be
            filtered away by our safety algorithms and will therefore not be
            collected by EFN Estates. Please also note that You can always
            choose not to share Contact Information with EFN Estates and if You
            have shared such information and change Your mind at a later stage,
            You can delist Your number or opt-out to render Your entire Contact
            Information unavailable for search in the EFN Estates database.
          </p>

          <li className=" text-base-regular font-bold mt-3">
            Other Information You May Provide
          </li>
          <p className="text-small-regular">
            You may provide us with various information in connection with Your
            interaction with our Services. For example, You may through tagging
            functionality associate a phone number, that is not registered in
            the EFN Estates database or belongs to a User, with a business or
            name and You may report a phone number as spam or some other
            attribute to be included in spam blocking directories. EFN Estates
            may also from time to time offer You the opportunity to provide
            information on Your experience from using the Services or to
            participate in contests, surveys or other promotions. EFN Estates
            will collect the information You provide in connection therewith, as
            well as any other information You provide through the Services or
            when You communicate or interact with us.
          </p>
        </ol>
      </div>
    </div>
  );
};

export default page;
