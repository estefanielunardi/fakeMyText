import * as React from "react";
import { useState } from "react";
import type { Sender } from '../types/Sender';

type Props = {
    onAdd: (sender: Sender, text: string) => void;
}


export const ChatForm : React.FC<Props> = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [sender, setSender] = useState<Sender>('user2');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) return;

        onAdd(sender, trimmed);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="chat-form">
            <select value={sender} onChange={e => setSender(e.target.value as Sender)}>
                <option value="user2">Usuario 2 (izquierda)</option>
                <option value="user1">Usuario 1 (derecha)</option>
            </select>
            <input
                aria-label="Mensaje"
                placeholder="Escribe un mensaje..."
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button type="submit">Agregar</button>
        </form>
    );
}