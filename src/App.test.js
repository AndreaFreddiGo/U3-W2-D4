import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import CommentArea from './components/CommentArea'

test('il componente Welcome viene montato correttamente', () => {
  // 1) monto il componente nel Virtual Dom
  render(<App />)
  // 2) ricerco l'elemento (in questo caso il messaggio di benvenuto)
  const welcome = screen.getByText(/Benvenuti in EpiBooks!/i)
  // 3) non intendiamo al momento interagirci, skip!
  // 4) verifica ipotesi/tesi
  expect(welcome).toBeInTheDocument()
})

test('il componente CommentArea viene montato correttamente', () => {
  // 1) monto il componente nel Virtual Dom
  render(<CommentArea />)
  // 2) ricerco l'elemento (in questo caso il bottone di invio)
  const button = screen.getByText(/invia/i)
  // 3) non intendiamo al momento interagirci, skip!
  // 4) verifica ipotesi/tesi
  expect(button).toBeInTheDocument()
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

test('verifico che al click del libro si contorni di rosso', () => {
  // 1) monto il componente nel Virtual Dom
  render(<App />)
  // 2) ricerco gli elementi (in questo caso le card dei libri)
  const cards = screen.getAllByTestId('book')
  // 3) eseguo click su una generica card
  fireEvent.click(cards[0])
  // 4) verifica ipotesi/tesi
  expect(cards[0]).toHaveStyle('border: 3px solid red')
})

test('verifico che al click di un altro libro, quello precedente non abbia più contorno rosso', () => {
  // 1) monto il componente nel Virtual Dom
  render(<App />)
  // 2) ricerco gli elementi (in questo caso le card dei libri)
  const cards = screen.getAllByTestId('book')
  // 3) eseguo click su una generica card e poi su quella successiva
  fireEvent.click(cards[0])
  fireEvent.click(cards[1])
  // 4) verifica ipotesi/tesi
  expect(cards[0]).not.toHaveStyle('border: 3px solid red')
})

test("al caricamento della pagina iniziale non c'è nessun commento", () => {
  // 1) monto il componente nel Virtual Dom
  render(<CommentArea />)
  // 2) ricerco l'elemento (in questo caso il bottone di eliminazione del commento)
  const button = screen.queryByText(/elimina/i)
  // 3) non intendiamo al momento interagirci, skip!
  // 4) verifica ipotesi/tesi
  expect(button).not.toBeInTheDocument()
})
