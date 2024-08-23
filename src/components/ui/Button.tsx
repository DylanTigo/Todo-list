import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  small?: boolean
} 

export default function Button({className, small, ...props}: ButtonProps) {
  return (
    <button {...props} className={`bg-gray-900 text-white ${small? "w-full text-xs px-3 py-1.5" : "px-5 py-2.5" } rounded-full flex justify-center items-center gap-2 ${className}`}> 
      {props.children}
    </button>
  )
}
