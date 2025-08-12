import Button from './Button'

interface ButtonBoxProps {
  onButtonClick: (value: string) => void
}

const btnValues = [
  'AC', '+-', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='
]

const ButtonBox = ({ onButtonClick }: ButtonBoxProps) => {
  return (
    <div className="buttonBox">
      {btnValues.map((btn, i) => (
        <Button
          key={i}
          value={btn}
          className={!/[0-9]|\./.test(btn) ? 'operator' : ''}
          onClick={onButtonClick}
        />
      ))}
    </div>
  )
}

export default ButtonBox

