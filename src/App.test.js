import { render, screen } from '@testing-library/react'
import App from './App'

test('il componente Welcome viene montato correttamente', () => {
  // 1) monto il componente nel Virtual Dom
  render(<App />)
  // 2) ricerco l'elemento (in questo caso il messaggio di benvenuto)
  const welcome = screen.getByText(/Benvenuti in EpiBooks!/i)
  // 3) non intendiamo al momento interagirci, skip!
  // 4) verifica ipotesi/tesi
  expect(welcome).toBeInTheDocument()
})

test('verifico quante card di libri vengono generate', () => {
  // 1) monto il componente nel Virtual Dom
  render(<App />)
  // 2) ricerco gli elementi (in questo caso le card dei libri)
  const cards = screen.getAllByTestId('book')
  // 3) non intendiamo al momento interagirci, skip!
  // 4) verifica ipotesi/tesi
  expect(cards).toHaveLength(150)
})
