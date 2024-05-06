import React, { forwardRef } from 'react'
const sizes = {
  xs: "h-[40px] pl-3 pr-8 text-base",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-black-900",
  },
};
const InputBox = forwardRef(({className,children,size='xs',color='white_A700',variant='fill',...restProps},ref) => {
  return (
    <>
    <input className={`${className} ${sizes[size]} ${variants[variant]?.[color]}  w-full `} ref={ref} {...restProps}>{children}</input>
    </>
  )
})

export {InputBox}