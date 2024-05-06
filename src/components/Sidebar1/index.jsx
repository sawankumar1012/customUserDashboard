import React from "react";
import { Img, Text } from "./..";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { sideCardMenuItems } from "@/utils/helpers";
import Link from "next/link";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  
  function collapseSidebar() {
     setCollapsed(!collapsed)
  }
  return (
    <Sidebar
      {...props}
      width="298px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 40 } }}
      className={`${props.className} flex flex-col h-screen pt-6 gap-10 top-0 px-6 md:p-5 sm:pt-5 sm:px-5 border-blue-100 border-r border-solid bg-blue-50 !sticky overflow-auto md:hidden`}
    >
      <Img
        src="img_logo.svg"
        width={192}
        height={56}
        alt="logo"
        className="h-[56px] w-[77%]"
      />
      <Menu
        menuItemStyles={{
          button: {
            padding: "10px",
            gap: "12px",
            alignSelf: "start",
            color: "#175389",
            fontWeight: 400,
            fontSize: "16px",
            borderRadius: "8px",
            [`&:hover, &.ps-active`]: {
              fontWeight: "500 !important",
              backgroundColor: "#ffffff !important",
            },
          },
        }}
        className="flex w-full flex-col items-center self-stretch"
      >
        <div className="self-stretch">
          {sideCardMenuItems &&
            sideCardMenuItems.root?.map((el) => (
              <MenuItem
              component={<Link href="#"/>}
              key={el.id}
                icon={
                  <Img
                    src={el.icon}
                    width={24}
                    height={24}
                    alt={`${el.name} icon`}
                    className="h-[24px] w-[24px]"
                  />
                }
              >
                {el.name}
              </MenuItem>
            ))}
        </div>
        <div className="mt-6 flex self-start pb-1 opacity-0.7">
          <Text as="p" className="uppercase tracking-[0.48px] !text-blue-900">
            main menu
          </Text>
        </div>
      
        <div className="flex flex-col gap-[0.46px] self-stretch">
        {sideCardMenuItems &&
            sideCardMenuItems.mainMenu?.map((el) => (
              <MenuItem
              key={el.id}
              component={<Link href="#"/>}
                icon={
                  <Img
                    src={el.icon}
                    width={24}
                    height={24}
                    alt={`${el.name} icon`}
                    className="h-[24px] w-[24px]"
                  />
                }
              >
                {el.name}
              </MenuItem>
            ))}
          
        </div>
        <div className="mt-[5vh]  pb-1 opacity-0.7">
          <Text as="p" className="uppercase tracking-[0.48px] !text-blue-900">
            General
          </Text>
        </div>
        <div className="flex self-stretch">
        {sideCardMenuItems &&
            sideCardMenuItems.general?.map((el) => (
              <MenuItem
              key={el.id}
              component={<Link href="#"/>}
                icon={
                  <Img
                    src={el.icon}
                    width={24}
                    height={24}
                    alt={`${el.name} icon`}
                    className="h-[24px] w-[24px]"
                  />
                }
              >
                {el.name}
              </MenuItem>
            ))}
        </div>
        <div className="mt-[30vh] flex self-stretch items-end">
          <MenuItem
            icon={
              <Img
                src="img_clock.svg"
                width={24}
                height={24}
                alt="clock icon"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Log Out
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}
