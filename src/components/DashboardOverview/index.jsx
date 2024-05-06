import React, { useState } from "react";
import { Button, Img, Text, SelectBox } from "../../components";
import { FeedBackChart } from "./FeedBackChart/FeedBackChart";
import {
  topCardMenuItems,
  userFeedBackData,
  filterDropDownOptions,
  filterFrequencyDropDownOptions,

} from "@/utils/helpers";
import { FeedBackCard } from "../FeedBackCard/index";
import DateRangePicker from 'rsuite/DateRangePicker';
import 'rsuite/DateRangePicker/styles/index.css';
import {AnalyticsIcon} from "../icons/AnalyticsIcon";


export const DashboardOverview = () => {
  const [activeTabId, setActiveTabId] = useState(3);
  const [dataSet, setDataSet] = useState([
    10, 5, 20, 15, 30, 40, 30, 40, 70, 65, 60, 19, 11, 12,
  ]);
  const [dataLabels, setDataLabels] = useState([
    "1",
    "1.5",
    "2",
    "2.5",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ]);
  return (
    <>
      <div className="flex border-b border-solid border-blue-50 bg-white-A700 px-8 pt-[31px] sm:px-5 sm:pt-5">
        {/* dashboard overview section */}
        <div className="flex w-full flex-col gap-6 md:w-full">
          <div className="flex flex-col items-start gap-[15px]">
            <Text size="2xl" as="p" className="!text-black-900">
              Christa’s Portal
            </Text>
            <Text size="lg" as="p" className="!text-gray-500_01">
              Good to see you again.{" "}
            </Text>
          </div>
          
          <div className="flex gap-8 md:flex-col">
            {topCardMenuItems.map((el) => (
              <Button
                key={el.id}
                variant='outline'
                size="sm"
                shape="square"
                count={el.count ? el.count : null}
                active= {activeTabId === el.id}
                onClick={() => setActiveTabId(el.id)}
                leftIcon={
                <el.icon active={activeTabId === el.id}/>
                }
              >
                {el.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="ml-4 mt-10">
        <Text size="xl" as="p" className="!text-black-900">
          Feedback Quality
        </Text>
      </div>
      <div className="mt-2 mx-6">
        {dataSet && dataSet.length > 0 && dataLabels && dataLabels.length > 0 && (
          <FeedBackChart dataSet={dataSet} dataLabels={dataLabels} />
        )}

        <div className="mt-8  flex w-full  flex-col gap-4 md:w-full">
       
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[23px]">
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-5 md:flex-col">
                
                  <div className="flex w-[40%] items-center justify-center gap-4 md:w-full sm:flex-col">
                
                    <Button
                      shape="round"
                      leftIcon={
                        <Img
                          src="img_calendar_black_900.svg"
                          width={20}
                          height={20}
                          alt="calendar"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="gap-2 border border-solid border-blue-50 px-[9px] sm:self-stretch"
                    >
                      May 23 - May 26
                    </Button>
                    <Text size="md" as="p" className="!text-black-900_7f">
                      Filters
                    </Text>
                    <SelectBox
                      shape="round"
                      indicator={
                        <Img
                          src="img_arrow_down.svg"
                          width={20}
                          height={20}
                          alt="arrow_down"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      name="Quality Dropdown"
                      placeholder={`Low, Good, Excellent`}
                      options={filterDropDownOptions}
                      className="flex-grow gap-px border border-solid  sm:pr-5"
                    />
                  </div>
                  <div className="flex  justify-center gap-4 md:w-full">
                    <SelectBox
                      shape="rounded-lg"
                      indicator={
                        <Img
                          src="img_arrowdown_black_900.svg"
                          width={32}
                          height={40}
                          alt="arrow_down"
                          className="h-[40px] w-[32px]"
                        />
                      }
                      name="Frequency Dropdown"
                      placeholder={`Daily`}
                      options={filterFrequencyDropDownOptions}
                      className="w-full sm:pr-5"
                    />
                    <Button
                      color="indigo_A200"
                      shape="round"
                      className="min-w-[215px] px-[11px] font-medium"
                    >
                      Show Feedback Patterns
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* user feedback list section */}
            <div className="flex flex-col gap-px">
              {userFeedBackData.map((el) => {
                return (
                  <FeedBackCard
                    key={el.id}
                    name={el.name}
                    timestamp={el.timestamp}
                    ratingCount={el.rating}
                    earningstext={el.feedBack}
                    analyticstext={el.analyticstext}
                    qualityfeedback={el.analytics}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
