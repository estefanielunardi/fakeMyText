import { useRef } from "react";
import { Chat, type ChatRef } from "./components/Chat";

export default function App() {
    const chatRef = useRef<ChatRef>(null);

    const handleGenerateImage = async () => {
        await chatRef.current?.exportAsImage();
    };

    return (
        <>
            <div className="header">FakeMyTest</div>

            <div className="controls-wrapper">
                <button onClick={handleGenerateImage}>
                    Generar imagen
                </button>

                <button onClick={() => window.location.reload()}>
                    Limpiar
                </button>
            </div>

            <div className="app-root">
                <Chat ref={chatRef} />
            </div>
        </>
    );
}

