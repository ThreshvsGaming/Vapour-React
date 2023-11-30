import React from "react";
import textBubbleStyles from "./Textbubble.module.css";

export default function TextBubble({message}) {
    return (
        <div
            className={`${textBubbleStyles.bubble} ${message.sender === "" ? textBubbleStyles.sent : textBubbleStyles.received}`}>
            <p>
                {message.text}
            </p>
        </div>);
}