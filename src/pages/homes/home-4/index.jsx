import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Blogs from "@/components/homes/home-4/Blogs";
import Brands from "@/components/homes/home-4/Brands";
import Cta from "@/components/homes/home-4/Cta";
import Cta2 from "@/components/homes/home-4/Cta2";
import Facts from "@/components/homes/home-4/Facts";
import Faq from "@/components/homes/home-4/Faq";
import Features from "@/components/homes/home-4/Features";
import Hero from "@/components/homes/home-4/Hero";
import Pricing from "@/components/homes/home-4/Pricing";
import Team from "@/components/homes/home-4/Team";
import Testimonials from "@/components/homes/home-4/Testimonials";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 4 || 살아 있는 소프트웨어를 만듭니다.",
  description:
    "살아 있는 소프트웨어를 만듭니다.",
};
export default function HomePage4() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header3 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Brands />
          <Facts />
          <Features />
          <Cta />
          <Pricing />
          <Testimonials />
          <Faq />
          <Team />
          <Blogs />
          <Cta2 />
        </div>
        <Footer3 />
      </div>
    </>
  );
}
