import {useState} from "react";
import type {Message} from "../types/Message.ts";
import type {Sender} from "../types/Sender.ts";
import {MessageBubble} from "./MessageBubble.tsx";
import {ChatForm} from "./ChatForm.tsx";


export const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const handleAddMessage = (sender: Sender, text: string) => {
        const newMessage: Message = {
            id: crypto.randomUUID(),
            sender,
            content: text,
            timestamp: new Date().toISOString(),
        };

        setMessages(prev => [...prev, newMessage]);
    };

    return (
        <div className="chat-container">
            <div className="messages-list">
                {messages.map(msg => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
            </div>

            <ChatForm onAdd={handleAddMessage} />
        </div>
    );
};