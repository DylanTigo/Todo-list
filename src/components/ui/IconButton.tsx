
type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function IconButton( {className, ...props}: IconButtonProps) {
  return (
    <button {...props} className={`p-2 rounded-full flex justify-center items-center aspect-square ${className}`}>
      {props.children}
    </button>
  )
}
