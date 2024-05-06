"use client";
import React from "react";
import { Button, SelectBox, Img, Text, Heading } from "../components";
import  {FeedBackCard}from "../components/FeedBackCard";
import Header from "../components/Header";
import Sidebar1 from "../components/Sidebar1";
import { DashboardOverview } from "@/components/DashboardOverview";
import { filterDropDownOptions, filterFrequencyDropDownOptions, userFeedBackData } from "@/utils/helpers";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CoachportaloptionThreePage() {
  return (
    <>
      {/* main layout section */}
      <div className="w-full bg-gray-50">
        {/* sidebar navigation section */}
        <div className="flex items-start md:flex-col">
          {/* logo section */}
          <Sidebar1 />
          <div className="flex flex-1 flex-col md:self-stretch md:p-5">
            {/* header section */}
            <Header />

            {/* welcome section */}
           <DashboardOverview/>
            
          </div>
        </div>
      </div>
    </>
  );
}
