import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send, X, Bot, User, Loader2 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatBotProps {
  apiKey?: string;
  aiService?: 'openai' | 'claude' | 'perplexity';
}

const ChatBot = ({ apiKey, aiService = 'openai' }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm the AquaPump AI assistant. I can help you with:\n\n• Product recommendations\n• Technical specifications\n• Quote requests\n• Installation questions\n• Maintenance advice\n\nWhat can I help you with today?",
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tempApiKey, setTempApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(!apiKey);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const getSystemPrompt = () => `You are an AI assistant for AquaPump Industries, a leading provider of industrial pumping solutions with over 25 years of experience.

COMPANY CONTEXT:
- We specialize in centrifugal pumps, submersible pumps, and custom solutions
- We serve manufacturing, oil & gas, water treatment, mining, agriculture, and construction industries
- We offer installation, maintenance, repair, and 24/7 emergency services
- Based in Dallas, TX with offices in Houston and Oklahoma City

YOUR ROLE:
- Help customers select the right pump for their applications
- Provide technical specifications and performance data
- Assist with quote requests and service scheduling
- Offer maintenance and troubleshooting advice
- Be professional, knowledgeable, and solution-focused

AVAILABLE PRODUCTS:
1. Centrifugal Pumps (AquaCent series): 150-1000 GPM, $2,450-$8,950
2. Submersible Pumps (AquaSub series): 200-800 GPM, $3,250-$9,850
3. Custom Solutions: Engineered for specific requirements

SERVICES:
- Installation & Setup: $850+, 2-5 business days
- Maintenance Plans: $299-$999/month
- 24/7 Emergency Service: 2-4 hour response
- Custom Engineering: 2-8 weeks

Always ask relevant questions to understand customer needs and recommend appropriate solutions. Encourage users to contact our team for detailed quotes and technical consultations.`;

  const callAI = async (userMessage: string): Promise<string> => {
    const currentApiKey = apiKey || tempApiKey;
    
    if (!currentApiKey) {
      throw new Error('API key is required');
    }

    const messages = [
      { role: 'system', content: getSystemPrompt() },
      { role: 'user', content: userMessage }
    ];

    switch (aiService) {
      case 'openai':
        const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${currentApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-5-2025-08-07',
            messages,
            temperature: 0.7,
            max_tokens: 500,
          }),
        });

        if (!openaiResponse.ok) {
          throw new Error(`OpenAI API error: ${openaiResponse.statusText}`);
        }

        const openaiData = await openaiResponse.json();
        return openaiData.choices[0].message.content;

      case 'claude':
        const claudeResponse = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${currentApiKey}`,
            'Content-Type': 'application/json',
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            messages: [{ role: 'user', content: userMessage }],
            system: getSystemPrompt(),
            max_tokens: 500,
          }),
        });

        if (!claudeResponse.ok) {
          throw new Error(`Claude API error: ${claudeResponse.statusText}`);
        }

        const claudeData = await claudeResponse.json();
        return claudeData.content[0].text;

      case 'perplexity':
        const perplexityResponse = await fetch('https://api.perplexity.ai/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${currentApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'llama-3.1-sonar-large-128k-online',
            messages,
            temperature: 0.7,
            max_tokens: 500,
          }),
        });

        if (!perplexityResponse.ok) {
          throw new Error(`Perplexity API error: ${perplexityResponse.statusText}`);
        }

        const perplexityData = await perplexityResponse.json();
        return perplexityData.choices[0].message.content;

      default:
        throw new Error('Unsupported AI service');
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await callAI(userMessage.content);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('AI API Error:', error);
      toast({
        title: "Error",
        description: "Failed to get AI response. Please check your API key and try again.",
        variant: "destructive",
      });
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I'm having trouble connecting right now. Please try again or contact our team directly at +1 (555) 123-4567 for immediate assistance.",
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const saveApiKey = () => {
    if (tempApiKey.trim()) {
      setShowApiKeyInput(false);
      toast({
        title: "API Key Saved",
        description: "You can now start chatting with the AI assistant.",
      });
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-industrial z-50"
        variant="industrial"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col border-0">
          <CardHeader className="bg-gradient-industrial text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-white text-industrial-blue">
                    <Bot className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">AquaPump AI Assistant</CardTitle>
                  <p className="text-blue-100 text-sm">Industrial Pump Expert</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* API Key Input */}
            {showApiKeyInput && (
              <div className="p-4 bg-industrial-blue-light border-b">
                <p className="text-sm text-industrial-grey mb-2">
                  Enter your {aiService.toUpperCase()} API key to start chatting:
                </p>
                <div className="flex space-x-2">
                  <Input
                    type="password"
                    placeholder={`${aiService.toUpperCase()} API Key`}
                    value={tempApiKey}
                    onChange={(e) => setTempApiKey(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={saveApiKey} size="sm" variant="industrial">
                    Save
                  </Button>
                </div>
              </div>
            )}

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <Avatar className="w-8 h-8 mx-2">
                        <AvatarFallback className={message.role === 'user' ? "bg-industrial-blue text-white" : "bg-industrial-blue-light text-industrial-blue"}>
                          {message.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`rounded-lg p-3 ${
                          message.role === 'user'
                            ? 'bg-industrial-blue text-white'
                            : 'bg-industrial-blue-light text-industrial-dark'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex">
                      <Avatar className="w-8 h-8 mx-2">
                        <AvatarFallback className="bg-industrial-blue-light text-industrial-blue">
                          <Bot className="w-4 h-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-industrial-blue-light rounded-lg p-3">
                        <Loader2 className="w-4 h-4 animate-spin text-industrial-blue" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            {!showApiKeyInput && (
              <div className="p-4 border-t border-border">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask about pumps, specs, or get a quote..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    variant="industrial"
                    size="icon"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-industrial-grey mt-2">
                  Powered by {aiService.toUpperCase()} • For urgent issues call +1 (555) 123-4567
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;