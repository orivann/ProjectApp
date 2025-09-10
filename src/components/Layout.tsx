import { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ChatBot from "./ChatBot";
import ChatBotSettings from "./ChatBotSettings";
import AdminPanel from "./AdminPanel";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [chatBotSettings, setChatBotSettings] = useState<{
    apiKey: string;
    aiService: 'openai' | 'claude' | 'perplexity';
  } | null>(null);

  const handleSettingsChange = (settings: { apiKey: string; aiService: 'openai' | 'claude' | 'perplexity' }) => {
    setChatBotSettings(settings);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      
      {/* AI Chatbot */}
      <ChatBot 
        apiKey={chatBotSettings?.apiKey}
        aiService={chatBotSettings?.aiService || 'openai'}
      />
      
      {/* Chatbot Settings */}
      <ChatBotSettings onSettingsChange={handleSettingsChange} />
      
      {/* Admin Panel */}
      <AdminPanel />
    </div>
  );
};

export default Layout;