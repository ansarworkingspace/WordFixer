

'use client';

import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaCopy, FaCheck } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Tool = () => {
  const [paragraph, setParagraph] = useState<string>('');
  const [messages, setMessages] = useState<
    { text: string; type: 'sent' | 'received'; isApiResponse?: boolean; copied?: boolean }[]
  >([{ text: 'Hi! Which tone do you need?', type: 'received' }]);
  const [selectedTone, setSelectedTone] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleParagraphChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    if (value.length <= 400) {
      setParagraph(value);
    }
  };

  const handleSendMessage = async () => {
    if (!selectedTone) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: 'Could you select any of these options?',
          type: 'received',
        },
      ]);
      return;
    }

    if (paragraph.trim()) {
      setMessages([...messages, { text: paragraph, type: 'sent' }]);
      setParagraph('');

      try {
        const response = await axios.post('/api/gemini', {
          paragraph,
          tone: selectedTone,
        });

        if (response.status === 200) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: response.data.correctedText, type: 'received', isApiResponse: true },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: response.data.error, type: 'received' },
          ]);
        }
      } catch (error) {
        console.error('Error:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Error: Unable to reach the server.', type: 'received' },
        ]);
      }
    }
  };

  const handleToneSelection = (tone: string) => {
    setSelectedTone(tone);
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: `You selected: ${tone}. Now, please write your sentence.`,
        type: 'received',
      },
    ]);
  };

  const handleCopy = (index: number) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg, i) =>
        i === index ? { ...msg, copied: true } : msg
      )
    );

    setTimeout(() => {
      setMessages((prevMessages) =>
        prevMessages.map((msg, i) =>
          i === index ? { ...msg, copied: false } : msg
        )
      );
    }, 2000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-3xl p-4 shadow">
      <div className="flex flex-col w-full mb-4 overflow-y-auto h-80 p-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded max-w-[80%] break-words ${
              msg.type === 'sent'
                ? 'bg-purple-500 text-white self-end'
                : 'bg-purple-300 text-black self-start'
            }`}
          >
            {msg.text}
            {msg.isApiResponse && (
              <CopyToClipboard text={msg.text} onCopy={() => handleCopy(index)}>
                <button className="ml-2 p-1 text-gray-600 hover:text-black">
                  {msg.copied ? <FaCheck /> : <FaCopy />}
                </button>
              </CopyToClipboard>
            )}
          </div>
        ))}
        {selectedTone === null && (
          <div className="flex mt-2 self-start font-bold text-sm items-center gap-2">
            <button
              onClick={() => handleToneSelection('Professional')}
              className="p-2 bg-purple-500 text-gray-200 rounded"
            >
              Professional
            </button>
            <button
              onClick={() => handleToneSelection('Casual')}
              className="p-2 bg-purple-500 text-gray-200 rounded"
            >
              Casual
            </button>
            <button
              onClick={() => handleToneSelection('None')}
              className="p-2 bg-purple-500 text-gray-200 rounded"
            >
              None of the above
            </button>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center w-full">
        <textarea
          value={paragraph}
          onChange={handleParagraphChange}
          maxLength={400}
          placeholder="Type your message..."
          className="flex-1 text-black p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 resize-none"
          style={{ height: 'auto', maxHeight: '150px', overflowY: 'auto' }}
        />

        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 text-white bg-purple-500 rounded hover:bg-purple-600 flex items-center justify-center"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Tool;


