import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [currentEmojiFromCurrentRender, queueRerenderWithNewEmoji] =
    useState<string>("");
  const [storedEmojisFromCurrentRender, queueRerenderWithNewStoreEmoji] =
    useState<string[]>([]);

  const handleEggEmojiClick = () => {
    queueRerenderWithNewEmoji("🍳");
    queueRerenderWithNewStoreEmoji(prevStoredEmojis => [...prevStoredEmojis,currentEmojiFromCurrentRender]);
  };
  const handleClockEmojiClick = () => {
    queueRerenderWithNewEmoji("⏰");
    queueRerenderWithNewStoreEmoji(prevStoredEmojis => [...prevStoredEmojis,currentEmojiFromCurrentRender]);
  };
  const handlePlateEmojiClick = () => {
    queueRerenderWithNewEmoji("🍽️");
    queueRerenderWithNewStoreEmoji(prevStoredEmojis => [...prevStoredEmojis,currentEmojiFromCurrentRender]);
  };
  const handleYummyEmojiClick = () => {
    queueRerenderWithNewEmoji("😋");
    queueRerenderWithNewStoreEmoji(prevStoredEmojis => [...prevStoredEmojis,currentEmojiFromCurrentRender]);
  };
  const handleBedEmojiClick = () => {
    queueRerenderWithNewEmoji("🛌");
    queueRerenderWithNewStoreEmoji(prevStoredEmojis => [...prevStoredEmojis,currentEmojiFromCurrentRender]);
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Previous emoji choices: {storedEmojisFromCurrentRender}</p>
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
