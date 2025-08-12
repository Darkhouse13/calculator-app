import { render, screen, fireEvent } from '@testing-library/react'
import App from '../../App'
import { describe, it, expect } from 'vitest'

describe('Calculator App', () => {
  it('renders the calculator UI correctly', () => {
    render(<App />)
    expect(screen.getByText('AC')).toBeInTheDocument()
    expect(screen.getByText('=')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '7' })).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('displays numbers when clicked', () => {
    render(<App />)
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('3'))
    expect(screen.getByText('123')).toBeInTheDocument()
  })

  it('performs addition correctly', () => {
    render(<App />)
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByText('8')).toBeInTheDocument()
  })

  it('respects the order of operations (PEMDAS)', () => {
    render(<App />)
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('*'))
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByText('14')).toBeInTheDocument()
  })

  it('handles division by zero with an error message', () => {
    render(<App />)
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('/'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('clears the display when AC is clicked', () => {
    render(<App />)
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('AC'))
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('toggles the sign of the number', () => {
    render(<App />)
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('+-'))
    expect(screen.getByText('-9')).toBeInTheDocument()
    fireEvent.click(screen.getByText('+-'))
    expect(screen.getByText('9')).toBeInTheDocument()
  })
})
