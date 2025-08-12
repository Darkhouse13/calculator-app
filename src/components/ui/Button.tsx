interface ButtonProps {
  className?: string
  value: string
  onClick: (value: string) => void
}

const Button = ({ className = '', value, onClick }: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={() => onClick(value)}>
      {value}
    </button>
  )
}

export default Button

