// Simple in-memory database for demo purposes
// In a real app, this would be replaced with actual database calls

interface Message {
  id: string;
  conversationId: string;
  userId: string;
  sender: string;
  content: string;
  createdAt: Date;
}

interface Conversation {
  id: string;
  userId: string;
  title: string;
  type: 'triple' | 'study';
  createdAt: Date;
}

const conversations: Conversation[] = [];
const messages: Message[] = [];

export const createConversation = async (
  userId: string,
  title: string,
  type: 'triple' | 'study'
): Promise<Conversation> => {
  const conversation: Conversation = {
    id: `conv-${Date.now()}`,
    userId,
    title,
    type,
    createdAt: new Date(),
  };
  conversations.push(conversation);
  return conversation;
};

export const getConversations = async (
  userId: string,
  type: 'triple' | 'study'
): Promise<Conversation[]> => {
  return conversations
    .filter((conv) => conv.userId === userId && conv.type === type)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

export const getConversationMessages = async (
  conversationId: string,
  limit: number = 50
): Promise<Message[]> => {
  return messages
    .filter((msg) => msg.conversationId === conversationId)
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
    .slice(-limit);
};

export const saveChatMessage = async (
  conversationId: string,
  userId: string,
  sender: string,
  content: string
): Promise<Message> => {
  const message: Message = {
    id: `msg-${Date.now()}`,
    conversationId,
    userId,
    sender,
    content,
    createdAt: new Date(),
  };
  messages.push(message);
  return message;
};
