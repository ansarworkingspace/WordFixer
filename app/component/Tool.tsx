"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa"; // Importing an icon for the send button

const Tool = () => {
  const [paragraph, setParagraph] = useState<string>("");
  const [messages, setMessages] = useState<
    { text: string; type: "sent" | "received" }[]
  >([{ text: "Hi! Which tone do you need?", type: "received" }]);
  const [selectedTone, setSelectedTone] = useState<string | null>(null); // State for tone selection
  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for scrolling to the bottom

  const handleParagraphChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    if (value.length <= 400) {
      setParagraph(value);
    }
  };

  const handleSendMessage = () => {
    if (paragraph.trim() && selectedTone) {
      // If a tone is selected and the user sends a sentence
      setMessages([...messages, { text: paragraph, type: "sent" }]);
      setParagraph(""); // Clear the input after sending
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: `You selected: ${selectedTone}. Here is your message.`,
          type: "received",
        },
        {
          text: "We will correct your grammar in the future.",
          type: "received",
        },
      ]);
    } else if (!selectedTone) {
      // Prompt to select a tone if none is selected
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Please select a tone first.", type: "received" },
      ]);
    }
  };

  const handleToneSelection = (tone: string) => {
    setSelectedTone(tone);
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: `You selected: ${tone}. Now, please write your sentence.`,
        type: "received",
      },
    ]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-3xl p-4 shadow">
      <div className="flex flex-col w-full mb-4 overflow-y-auto h-80 p-2">
        {messages.map((msg, index) => (
         <div
         key={index}
         className={`mb-2 p-2 rounded max-w-[80%] break-words ${
           msg.type === "sent"
             ? "bg-purple-500 text-white self-end"
             : "bg-purple-300 text-black self-start"
         }`}
       >
         {msg.text}
       </div>
       
        ))}
        {/* Tone selection buttons as part of the initial message */}
        {selectedTone === null && (
          <div className="flex  mt-2 self-start font-bold text-sm items-center gap-2">
            <button
              onClick={() => handleToneSelection("Professional")}
              className="p-2 bg-purple-500 text-gray-200 rounded"
            >
              Professional
            </button>
            <button
              onClick={() => handleToneSelection("Casual")}
              className="p-2 bg-purple-500 text-gray-200 rounded"
            >
              Casual
            </button>
            <button
              onClick={() => handleToneSelection("None")}
              className="p-2 bg-purple-500 text-gray-200 rounded"
            >
              None of the above
            </button>
          </div>
        )}
        <div ref={messagesEndRef} /> {/* Empty div for scrolling */}
      </div>

      {/* Text area and send button */}
      <div className="flex items-center w-full">
        <textarea
          value={paragraph}
          onChange={handleParagraphChange}
          maxLength={400}
          placeholder="Type your message..."
          className="flex-1 text-black p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 resize-none"
          style={{ height: "auto", maxHeight: "150px", overflowY: "auto" }}
        />

        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 text-white bg-blue-500 rounded hover:bg-blue-600 flex items-center justify-center"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Tool;


