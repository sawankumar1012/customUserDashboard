import React from "react";
import { Img, Heading, Text } from "./..";
import Link from "next/link";
import {InputBox} from "../InputBox";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex  p-[15px] border-purple-50 border-b border-solid bg-white-A700 shadow-sm`}
    >
      <div className="flex  w-full px-8 items-center justify-between gap-5 md:flex-col">
        <div className="flex w-[68%] rounded-lg pr-8 opacity-0.5 md:w-full sm:pr-5">
          <div className="w-full py-2 pl-2">
            <div className="flex  items-center justify-between gap-2">
              <Link href="#">
                <Img src="img_rewind.svg" width={24} height={24} alt="rewind icon" className="h-[24px] w-[24px]" />
              </Link>
              <div className="flex w-full">
                <InputBox placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[23%] items-center justify-between gap-5 md:w-full">
          <div className="flex items-center gap-2 rounded-lg">
            <Link href="#">
              <Img src="img_maximize.svg" width={24} height={24} alt="maximize icon" className="h-[24px] w-[24px]" />
            </Link>
            <Text size="md" as="p" className="!text-black-900">
              Feedback?
            </Text>
          </div>
          <div className="relative h-[25px] w-[11%]">
            <Link href="#">
              <Img
                src="img_vertical_container_black_900.svg"
                width={24}
                height={24}
                alt="mute icon"
                className="absolute bottom-[-0.76px] left-[0.00px] m-auto h-[24px] w-[24px]"
              />
            </Link>
            <Heading
              as="p"
              className="absolute right-[0.00px] top-[0.00px] m-auto flex h-[16px] w-[15px] items-center justify-center rounded-[7px] bg-indigo-A200 uppercase tracking-[0.40px]"
            >
              2
            </Heading>
          </div>
          <div className="flex w-[24%] items-center justify-center gap-2">
            <Link href="#">
              <Img
                src="img_vertical_container_32x32.png"
                width={32}
                height={32}
                alt="profile image"
                className="h-[32px] w-[32px] rounded-[50%]"
              />
            </Link>
            <Img src="img_arrow_down.svg" width={20} height={20} alt="dropdown icon" className="h-[20px] w-[20px]" />
          </div>
        </div>
      </div>
    </header>
  );
}
