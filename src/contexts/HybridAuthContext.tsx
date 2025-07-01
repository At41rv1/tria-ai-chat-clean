import React, { createContext, useContext, useState, useCallback } from 'react';

interface User {
  id: string;
  email?: string;
  name?: string;
}

interface AuthContextType {
  currentUser: User | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const HybridAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const signIn = useCallback(async () => {
    // For demo purposes, create a mock user
    setCurrentUser({
      id: 'user-' + Date.now(),
      email: 'demo@example.com',
      name: 'Demo User'
    });
  }, []);

  const signOut = useCallback(async () => {
    setCurrentUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a HybridAuthProvider');
  }
  return context;
};
