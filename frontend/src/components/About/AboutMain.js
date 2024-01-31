import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import AboutCounterSection from "./AboutCounterSection";
import AboutFeatureSection from "./AboutFeatureSection";
import AboutFeatureVideo from "./AboutFeatureVideo";
import AboutStudentChoose from "./AboutStudentChoose";
import AffiliateSection from "./AffiliateSection";
import BecomeInstructorSection from "./BecomeInstructorSection";
import KnowUsBetter from "./KnowUsBetter";

const AboutMain = () => {
  return (
    <main>
      <Breadcrumb
        breadcrumbTitle="Về Chúng Tôi"
        breadcrumbSubTitle="Về Chúng Tôi"
      />
      <AboutFeatureSection />
      <AboutFeatureVideo />
      <div className="pb-100"></div>
      <KnowUsBetter />
    </main>
  );
};

export default AboutMain;
