import React from 'react'

export default function button2({title, href, style}) {
  return (
    <a href={href} className={"text-center max-sm:w-full smooth md:text-[18px] border-[2px] text-primary font-bold  px-6 py-2 rounded-3xl hover:bg-primary hover:text-white " + style}>{title}</a>
  )
}
