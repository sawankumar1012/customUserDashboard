import React from "react";
import { Button, Img, Heading, Text } from "..";

export const FeedBackCard=({
  name = "Kurt Bates",
  timestamp = "Apr 7, 2024 1:36 pm",
  ratingCount = "5",
  earningstext = "ChatGPT by OpenAI is a versatile platform for natural language interactions, featuring adaptive responses and a user-friendly interface.",
  analyticstext = "Analytics:",
  qualityfeedback = "Good quality feedback",
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${props.className} flex pb-4  md:flex-col justify-evenly items-start pt-[23px] gap-6 sm:py-5 border-blue-50 border border-solid bg-white-A700 rounded-[16px]`}
    >
      <div className="flex w-[47%] flex-col gap-4 md:w-full">
        <div className="flex">
          <div className="flex items-center gap-2">
            <Img
              src="img_image.png"
              width={40}
              height={40}
              alt="profileimage"
              className="h-[40px] w-[40px] rounded object-cover"
            />
            <div className="flex flex-col items-start gap-[3px] self-start">
              <Text size="md" as="p" className="!font-medium !text-black-900">
                {name}
              </Text>
              <Text as="p">{timestamp}</Text>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2 sm:flex-col">
          <Button
            color="teal_700"
            size="md"
            className="min-w-[40px] rounded border border-solid border-teal-700 font-medium"
          >
            {ratingCount}
          </Button>
          <Text size="md" as="p" className="w-[92%] leading-[140%] !text-black-900 sm:w-full">
            {earningstext}
          </Text>
        </div>
      </div>
      <div className="flex w-[47%] justify-between gap-5 rounded-lg border border-solid border-blue-50 bg-blue-50 p-4 shadow-xs md:w-full">
        <div className="flex items-center justify-center gap-2">
          <Img
            src="img_button_container.svg"
            width={32}
            height={32}
            alt="analyticsicon"
            className="h-[32px] w-[32px]"
          />
          <Text size="md" as="p" className="self-end !text-black-900">
            {analyticstext}
          </Text>
          <div className="flex">
            <Heading size="s" as="h6" className="!text-teal-700 pb-0 -mb-2">
              {qualityfeedback}
            </Heading>
          </div>
        </div>
        <Button color="indigo_A200" size="xs" shape="circle" className="w-[32px] !rounded-[16px]">
          <Img src="img_arrow_down_white_a700.svg" width={32} height={32} />
        </Button>
      </div>
    </div>
  );
}
