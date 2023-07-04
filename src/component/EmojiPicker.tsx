import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [currentEmojiFromCurrentRender, queueRerenderWithNewEmoji] =
    useState("💃🏽");
  const [previousEmojiFromCurrentRender, queueRerenderWithNewpreviousEmoji] =
    useState("🤣");

    const handleEggEmojiClick = () => {
        queueRerenderWithNewEmoji("🍳");
        queueRerenderWithNewpreviousEmoji(currentEmojiFromCurrentRender);
      };



  return (
    <>
      <h1>Emoji picker</h1>
      <p>Previous emoji: {previousEmojiFromCurrentRender}</p>
      <p>Current emoji: {currentEmojiFromCurrentRender}</p>
      <hr />
      <button onClick={handleEggEmojiClick}>🍳</button>
    </>
  );
}
