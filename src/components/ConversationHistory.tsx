import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/HybridAuthContext';
import { getConversations } from '../lib/database';

interface Conversation {
  id: string;
  title: string;
  createdAt: Date;
}

interface ConversationHistoryProps {
  chatType: 'triple' | 'study';
  onSelectConversation: (id: string) => void;
  currentConversationId: string;
}

const ConversationHistory: React.FC<ConversationHistoryProps> = ({
  chatType,
  onSelectConversation,
  currentConversationId
}) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const loadConversations = async () => {
      if (!currentUser) return;
      try {
        const history = await getConversations(currentUser.id, chatType);
        setConversations(history);
      } catch (error) {
        console.error('Error loading conversations:', error);
      }
    };

    loadConversations();
  }, [currentUser, chatType]);

  return (
    <div className="space-y-2">
      {conversations.map((conversation) => (
        <button
          key={conversation.id}
          onClick={() => onSelectConversation(conversation.id)}
          className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
            conversation.id === currentConversationId
              ? 'bg-gray-100 text-gray-900'
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          <div className="font-medium truncate">{conversation.title}</div>
          <div className="text-xs text-gray-500">
            {conversation.createdAt.toLocaleString()}
          </div>
        </button>
      ))}
      {conversations.length === 0 && (
        <div className="text-center text-gray-500 py-4">No conversations yet</div>
      )}
    </div>
  );
};

export default ConversationHistory;
