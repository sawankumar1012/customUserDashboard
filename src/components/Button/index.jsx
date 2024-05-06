import React from "react";
import PropTypes from "prop-types";
import { Heading } from "../Heading/index";
const shapes = {
  round: "rounded-lg",
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
};

const sizes = {
  md: "h-[40px] px-[13px] text-xl",
  xs: "h-[32px] px-1.5",
  sm: "h-[40px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "white_A700",
  active=false,
  count=null,
  ...restProps
}) => {
  const variants = {
    fill: {
      white_A700: "bg-white-A700 text-black-900",
      teal_700: "bg-teal-700 text-white-A700",
      indigo_A200: "bg-indigo-A200 text-white-A700",
    },
    outline:{
      white_A700: `bg-white-A700 text-black-900 ${active&&('border-b-2 border-indigo-A200 text-indigo-A200')}`,
    }
  };
  return (
    <button
      className={`${className} p-1 relative flex flex-row items-center justify-between gap-2 text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      
      {children}
    
     
     {count && 
      <Heading
        as="h2"
        className={`flex items-center justify-center rounded-lg ${active?'bg-indigo-A200 text-white-A700':'bg-gray-100 border-gray-500 border-[1px] text-black-900'} bg-indigo-A200 p-0.5 uppercase tracking-[0.40px] ${active?'bg-indigo-A200':'bg-gray-300 text-black-900'}`}
      >
        {count}
      </Heading>
      }
    
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  active: PropTypes.bool,
  count: PropTypes.number,
  shape: PropTypes.oneOf(["round", "circle", "square"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700", "teal_700", "indigo_A200"]),
};

export { Button };
