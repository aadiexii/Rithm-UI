import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import Alertdemo from "./alertdemo";
import Usage from "../components/usage";
import Alert02 from "./usage/alerttwo";
import Alert03 from "./usage/alertthree";
import Alert04 from "./usage/alertfour";
import { Metadata } from "next";
import { baseMetadata } from "@/app/(docs)/layout-parts/base-metadata";
import { SEOWrapper } from "@/app/(docs)/docs/components/seo-wrapper";

export const metadata: Metadata = baseMetadata({
  title: "Animated Alert",
  description:
    "An animated alert that displays notifications, warnings, and success messages. A free React and Next.js component built with Framer Motion and Tailwind CSS.",
  keywords: [
    "animated alert",
    "alert component",
    "React alert",
    "Next.js alert",
    "notification component",
    "toast alert",
    "message alert",
    "Framer Motion alert",
  ],
  canonicalUrl: "https://rithmui.com/docs/alert",
});

const page = () => {
  return (
    <SEOWrapper
      componentName="Animated Alert"
      description="An animated alert that displays notifications, warnings, and success messages."
      url="https://rithmui.com/docs/alert"
      keywords={[
        "animated alert",
        "alert component",
        "React alert",
        "Next.js alert",
        "notification component",
        "toast alert",
        "message alert",
        "Framer Motion alert",
      ]}
    >
      <div>
        <PageTemplate
          title="Animated Alert"
          description="An animated alert that displays notifications, warnings, and success messages."
          className="mt-5"
        >
        <PreviewCodeCard
          path="app/(docs)/docs/alert/alertdemo.tsx"
          cli="@rithmui/alert-1"
        
        installScript="npm i framer-motion lucide-react"
        installCodePath="lib/utils.ts"
      >
          <Alertdemo />
        </PreviewCodeCard>
      {/*
      */}

        <PageSubTitle>Usage</PageSubTitle>

        <Usage
          path="app/(docs)/docs/alert/usage/alertthree.tsx"
          cli="@rithmui/alert-2"
        >
          <Alert02 />
        </Usage>
        <Usage
          path="app/(docs)/docs/alert/usage/alertthree.tsx"
          cli="@rithmui/alert-3"
        >
          <Alert03 />
        </Usage>
        <Usage
          path="app/(docs)/docs/alert/usage/alertfour.tsx"
          cli="@rithmui/alert-4"
        >
          <Alert04 />
        </Usage>
     
      </PageTemplate>
      </div>
    </SEOWrapper>
  );
};

export default page;
