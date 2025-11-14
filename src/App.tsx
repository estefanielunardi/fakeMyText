import {ChatForm} from "./components/ChatForm.tsx";



function App() {

    function addMessage() {

    }

    return (
    <>
      <div>
          <ChatForm onAdd={addMessage} />
      </div>
      <h1>FakeMyTest</h1>
    </>
  )
}

export default App
