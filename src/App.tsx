import { useState } from 'react'
import Screen from './components/ui/Screen'
import ButtonBox from './components/layout/ButtonBox'
import * as math from 'mathjs'

const App = () => {
  const [display, setDisplay] = useState('0')

  const handleButtonClick = (value: string) => {
    switch (value) {
      case '=': {
        try {
          const expr = display.replace(/×/g, '*').replace(/÷/g, '/')
          const result = math.evaluate(expr)
          if (result === Infinity || result === -Infinity || Number.isNaN(result)) {
            setDisplay('Error')
          } else {
            setDisplay(String(result))
          }
        } catch {
          setDisplay('Error')
        }
        break
      }
      case 'AC':
        setDisplay('0')
        break
      case '+-':
        setDisplay(prev => (prev === '0' ? '0' : prev.startsWith('-') ? prev.slice(1) : '-' + prev))
        break
      default:
        setDisplay(prev => (prev === '0' || prev === 'Error' ? value : prev + value))
        break
    }
  }

  return (
    <div className="wrapper">
      <Screen value={display} />
      <ButtonBox onButtonClick={handleButtonClick} />
    </div>
  )
}

export default App
