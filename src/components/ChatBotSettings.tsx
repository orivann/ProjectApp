import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Settings, Key, Bot, Info } from "lucide-react";

interface ChatBotSettingsProps {
  onSettingsChange: (settings: { apiKey: string; aiService: 'openai' | 'claude' | 'perplexity' }) => void;
}

const ChatBotSettings = ({ onSettingsChange }: ChatBotSettingsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [aiService, setAiService] = useState<'openai' | 'claude' | 'perplexity'>('openai');
  const { toast } = useToast();

  const handleSave = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid API key.",
        variant: "destructive",
      });
      return;
    }

    onSettingsChange({ apiKey: apiKey.trim(), aiService });
    setIsOpen(false);
    toast({
      title: "Settings Saved",
      description: `Chatbot configured with ${aiService.toUpperCase()}`,
    });
  };

  const aiServiceInfo = {
    openai: {
      name: "OpenAI GPT-5",
      description: "Most capable for complex technical queries",
      pricing: "$0.03 per 1K tokens",
      url: "https://platform.openai.com/api-keys"
    },
    claude: {
      name: "Claude 4 Sonnet",
      description: "Excellent reasoning for pump recommendations",
      pricing: "$0.15 per 1K tokens",
      url: "https://console.anthropic.com/"
    },
    perplexity: {
      name: "Perplexity",
      description: "Great for real-time industry information",
      pricing: "$0.20 per 1K tokens",
      url: "https://www.perplexity.ai/settings/api"
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="fixed bottom-6 left-6 z-50">
          <Settings className="w-4 h-4 mr-2" />
          AI Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Bot className="w-5 h-5 mr-2 text-industrial-blue" />
            AI Chatbot Configuration
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* AI Service Selection */}
          <div>
            <Label htmlFor="ai-service">AI Service</Label>
            <Select value={aiService} onValueChange={(value: 'openai' | 'claude' | 'perplexity') => setAiService(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select AI service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="openai">OpenAI GPT-5</SelectItem>
                <SelectItem value="claude">Claude 4 Sonnet</SelectItem>
                <SelectItem value="perplexity">Perplexity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Service Info */}
          <Card className="bg-industrial-blue-light border-0">
            <CardContent className="p-4">
              <div className="flex items-start space-x-2">
                <Info className="w-4 h-4 text-industrial-blue mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-medium text-industrial-dark">
                    {aiServiceInfo[aiService].name}
                  </h4>
                  <p className="text-sm text-industrial-grey">
                    {aiServiceInfo[aiService].description}
                  </p>
                  <p className="text-xs text-industrial-grey">
                    Pricing: {aiServiceInfo[aiService].pricing}
                  </p>
                  <a 
                    href={aiServiceInfo[aiService].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-industrial-blue hover:underline"
                  >
                    Get API Key →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Key Input */}
          <div>
            <Label htmlFor="api-key" className="flex items-center">
              <Key className="w-4 h-4 mr-1" />
              {aiService.toUpperCase()} API Key
            </Label>
            <Input
              id="api-key"
              type="password"
              placeholder={`Enter your ${aiService.toUpperCase()} API key`}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="text-xs text-industrial-grey mt-1">
              Your API key is stored locally and never sent to our servers.
            </p>
          </div>

          {/* Save Button */}
          <Button onClick={handleSave} variant="industrial" className="w-full">
            Save Configuration
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatBotSettings;