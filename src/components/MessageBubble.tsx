import * as React from "react";
import type { Message } from '../types/Message';


type Props = {
    message: Message;
};

export const MessageBubble : React.FC<Props> = ({ message }) => {
    const isUser1 = message.sender === 'user1';
    return (
        <div className={`message-row ${isUser1 ? 'right' : 'left'}`}>
            <div className={`bubble ${isUser1 ? 'bubble-user1' : 'bubble-user2'}`}>
                <div className="bubble-text">{message.content}</div>
                <div className="bubble-meta">
                    <small>{new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
                </div>
            </div>
        </div>
    );
};