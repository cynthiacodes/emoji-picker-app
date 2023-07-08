import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [currentEmoji, queueNewEmoji] = useState<string>("");
  const [storedEmojis, queueNewStoreEmoji] = useState<string[]>([]);

  const handleEggEmojiClick = () => {
    queueNewEmoji("🍳");
    queueNewStoreEmoji((prevStoredEmojis) => [
      ...prevStoredEmojis,
      currentEmoji,
    ]);
  };
  const handleClockEmojiClick = () => {
    queueNewEmoji("⏰");
    queueNewStoreEmoji((prevStoredEmojis) => [
      ...prevStoredEmojis,
      currentEmoji,
    ]);
  };
  const handlePlateEmojiClick = () => {
    queueNewEmoji("🍽️");
    queueNewStoreEmoji((prevStoredEmojis) => [
      ...prevStoredEmojis,
      currentEmoji,
    ]);
  };
  const handleYummyEmojiClick = () => {
    queueNewEmoji("😋");
    queueNewStoreEmoji((prevStoredEmojis) => [
      ...prevStoredEmojis,
      currentEmoji,
    ]);
  };
  const handleBedEmojiClick = () => {
    queueNewEmoji("🛌");
    queueNewStoreEmoji((prevStoredEmojis) => [
      ...prevStoredEmojis,
      currentEmoji,
    ]);
  };
  const listOfEmojis = storedEmojis.map((emojiElement, index) => (
    <li key={index}>{emojiElement}</li>
  ));

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Previous emoji choices:</p>
      <ul>{listOfEmojis}</ul>
      <p>Current emoji: {currentEmoji}</p>
      <hr />
      <button onClick={handleEggEmojiClick}>🍳</button>
      <button onClick={handleClockEmojiClick}>⏰</button>
      <button onClick={handlePlateEmojiClick}>🍽️</button>
      <button onClick={handleYummyEmojiClick}>😋</button>
      <button onClick={handleBedEmojiClick}>🛌</button>
    </>
  );
}
