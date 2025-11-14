import {ChatForm} from "./components/ChatForm.tsx";



function App() {

    function addMessage() {

    }

    return (
    <>
        <div className="app-root">
            <aside className="left-panel">
                <ChatForm onAdd={addMessage} />
                <div className="controls">
                    <button>
                        Generar imagen
                    </button>
                    <button>
                        Limpiar
                    </button>
                </div>
            </aside>
        </div>
      <h1>FakeMyTest</h1>
    </>
  )
}

export default App
