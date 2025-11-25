import { useRef } from "react";
import { Chat, type ChatRef } from "./components/Chat";

export default function App() {
    const chatRef = useRef<ChatRef>(null);

    const handleGenerateImage = async () => {
        await chatRef.current?.exportAsImage();
    };

    return (
        <div className="app-root">
            <h1>FakeMyTest</h1>

            <div style={{ display: "flex", gap: "20px" }}>
                <Chat ref={chatRef} />

                <aside className="controls">
                    <button onClick={handleGenerateImage}>
                        Generar imagen
                    </button>

                    <button onClick={() => window.location.reload()}>
                        Limpiar
                    </button>
                </aside>
            </div>
        </div>
    );
}
