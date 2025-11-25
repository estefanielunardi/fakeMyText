import { useState, useRef, useImperativeHandle, forwardRef } from "react";
import type { Message } from "../types/Message";
import type { Sender } from "../types/Sender";
import { MessageBubble } from "./MessageBubble";
import { ChatForm } from "./ChatForm";
import * as htmlToImage from "html-to-image";

export type ChatRef = {
    exportAsImage: () => Promise<void>;
};

export const Chat = forwardRef<ChatRef>((_, ref) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const chatRef = useRef<HTMLDivElement>(null);

    const handleAddMessage = (sender: Sender, text: string) => {
        const newMessage: Message = {
            id: crypto.randomUUID(),
            sender,
            content: text,
            timestamp: new Date().toISOString(),
        };
        setMessages(prev => [...prev, newMessage]);
    };

    // expose the export function to App.tsx
    useImperativeHandle(ref, () => ({
        async exportAsImage() {
            if (!chatRef.current) return;

            const dataUrl = await htmlToImage.toPng(chatRef.current, {
                quality: 1,
            });

            // create download link
            const link = document.createElement("a");
            link.download = "chat.png";
            link.href = dataUrl;
            link.click();
        }
    }));

    return (
        <div ref={chatRef} className="chat-container">
            <div className="messages-list">
                {messages.map(msg => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
            </div>

            <ChatForm onAdd={handleAddMessage} />
        </div>
    );
});

Chat.displayName = "Chat";
