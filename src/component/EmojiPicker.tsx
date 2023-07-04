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
  const handleClockEmojiClick = () => {
    queueRerenderWithNewEmoji("⏰");
    queueRerenderWithNewpreviousEmoji(currentEmojiFromCurrentRender);
  };
  const handlePlateEmojiClick = () => {
    queueRerenderWithNewEmoji("🍽️");
    queueRerenderWithNewpreviousEmoji(currentEmojiFromCurrentRender);
  };
  const handleYummyEmojiClick = () => {
    queueRerenderWithNewEmoji("😋");
    queueRerenderWithNewpreviousEmoji(currentEmojiFromCurrentRender);
  };
  const handleBedEmojiClick = () => {
    queueRerenderWithNewEmoji("🛌");
    queueRerenderWithNewpreviousEmoji(currentEmojiFromCurrentRender);
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Previous emoji: {previousEmojiFromCurrentRender}</p>
      <p>Current emoji: {currentEmojiFromCurrentRender}</p>
      <hr />
      <button onClick={handleEggEmojiClick}>🍳</button>
      <button onClick={handleClockEmojiClick}>⏰</button>
      <button onClick={handlePlateEmojiClick}>🍽️</button>
      <button onClick={handleYummyEmojiClick}>😋</button>
      <button onClick={handleBedEmojiClick}>🛌</button>
    </>
  );
}
