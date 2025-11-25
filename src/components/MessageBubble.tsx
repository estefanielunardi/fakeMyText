import * as React from "react";
import type { Message } from '../types/Message';

const DoubleCheckSVG = () => {
    const color = "#4FC3F7";

    return (
        <svg
            className="read-receipt-icon"
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Primer check */}
            <path
                d="M1 5L4 8L9 3"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Segundo check (ligeramente desplazado) */}
            <path
                d="M5 5L8 8L13 3"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};


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
                    {isUser1 && (
                        <span className="read-receipt-container">
                            <DoubleCheckSVG />
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};