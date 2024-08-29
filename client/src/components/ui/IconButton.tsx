
type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function IconButton( {className, ...props}: IconButtonProps) {
  return (
    <button {...props} className={`p-2 w-fit h-fit rounded-full flex justify-center items-center aspect-square transition-all ${className}`}>
      {props.children}
    </button>
  )
}
