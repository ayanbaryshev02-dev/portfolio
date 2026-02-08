import { useState, useEffect } from 'react';
import { bubbleMessage } from '../data/speechBubbleMessages';
import { getGreeting } from '../utils/getGreeting';

export const useSpeechBubble = (activeSection) => {
  const [currentMessage, setCurrentMessage] = useState(getGreeting());

  useEffect(() => {
    if (activeSection === 'about') {
      setCurrentMessage(getGreeting());
    } else {
      const newMessage = bubbleMessage[0][activeSection];

      if (newMessage && newMessage !== currentMessage) {
        setCurrentMessage(newMessage);
      }
    }
  }, [activeSection, currentMessage]);

  return currentMessage;
};
