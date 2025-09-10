// A – Contador com dois botões: um de incrementar 1 e outro de decrementar 1.
// Exiba o resultado atualizado.
function App() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(0);


  return (
    <>
    <h4>Count: {count}</h4>
    <button onClick={() => {
      setCount(count + 1)
    }}>+</button>
    <button onClick={() => {
      setCount(count - 1)
    }}>-</button>

    </>
  )
}

export default App
