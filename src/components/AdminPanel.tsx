import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Shield, Save, Eye, MessageSquare, BarChart3, Users } from "lucide-react";

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'chat' | 'analytics'>('overview');
  const [systemPrompt, setSystemPrompt] = useState('');
  const [chatSettings, setChatSettings] = useState({
    maxTokens: 500,
    temperature: 0.7,
    model: 'gpt-5-2025-08-07',
    enableMemory: true,
    autoSuggestProducts: true
  });
  const { toast } = useToast();

  // Mock analytics data
  const analytics = {
    totalChats: 1247,
    dailyChats: 89,
    avgRating: 4.6,
    topQuestions: [
      { question: "What pump for water treatment?", count: 156 },
      { question: "Centrifugal vs submersible?", count: 134 },
      { question: "Installation cost estimate?", count: 98 },
      { question: "Emergency repair service?", count: 87 },
      { question: "Maintenance schedule?", count: 76 }
    ],
    conversionRate: 23.4,
    leadGenerated: 291
  };

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Chatbot configuration has been updated successfully.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="fixed top-20 right-6 z-40">
          <Shield className="w-4 h-4 mr-2" />
          Admin Panel
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Shield className="w-5 h-5 mr-2 text-industrial-blue" />
            AquaPump AI Admin Panel
          </DialogTitle>
        </DialogHeader>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-industrial-blue-light rounded-lg p-1">
          <Button
            variant={activeTab === 'overview' ? 'industrial' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('overview')}
            className="flex-1"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Overview
          </Button>
          <Button
            variant={activeTab === 'chat' ? 'industrial' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('chat')}
            className="flex-1"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat Settings
          </Button>
          <Button
            variant={activeTab === 'analytics' ? 'industrial' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('analytics')}
            className="flex-1"
          >
            <Eye className="w-4 h-4 mr-2" />
            Analytics
          </Button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-0 shadow-card">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-industrial-blue">{analytics.totalChats}</div>
                    <div className="text-sm text-industrial-grey">Total Conversations</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-card">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-industrial-blue">{analytics.leadGenerated}</div>
                    <div className="text-sm text-industrial-grey">Leads Generated</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-card">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-industrial-blue">{analytics.conversionRate}%</div>
                    <div className="text-sm text-industrial-grey">Conversion Rate</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>AI Service</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Response Time</span>
                      <span className="text-sm text-industrial-grey">~2.3s avg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Daily Usage</span>
                      <span className="text-sm text-industrial-grey">{analytics.dailyChats} conversations</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Customer Rating</span>
                      <span className="text-sm text-industrial-grey">⭐ {analytics.avgRating}/5.0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'chat' && (
            <div className="space-y-6">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">AI Model Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Model Selection</Label>
                      <Select value={chatSettings.model} onValueChange={(value) => setChatSettings(prev => ({ ...prev, model: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gpt-5-2025-08-07">GPT-5 (Recommended)</SelectItem>
                          <SelectItem value="gpt-4.1-2025-04-14">GPT-4.1</SelectItem>
                          <SelectItem value="claude-sonnet-4-20250514">Claude 4 Sonnet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Max Tokens</Label>
                      <Input
                        type="number"
                        value={chatSettings.maxTokens}
                        onChange={(e) => setChatSettings(prev => ({ ...prev, maxTokens: parseInt(e.target.value) }))}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Temperature (Creativity): {chatSettings.temperature}</Label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={chatSettings.temperature}
                      onChange={(e) => setChatSettings(prev => ({ ...prev, temperature: parseFloat(e.target.value) }))}
                      className="w-full mt-2"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">System Prompt</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Customize the AI assistant's behavior and knowledge..."
                    value={systemPrompt}
                    onChange={(e) => setSystemPrompt(e.target.value)}
                    rows={6}
                    className="mb-4"
                  />
                  <Button onClick={handleSaveSettings} variant="industrial">
                    <Save className="w-4 h-4 mr-2" />
                    Save Configuration
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Customer Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analytics.topQuestions.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-industrial-blue-light rounded-lg">
                        <span className="text-sm text-industrial-dark">{item.question}</span>
                        <Badge variant="secondary" className="bg-industrial-blue text-white">
                          {item.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-industrial-blue-light rounded-lg">
                      <div className="text-2xl font-bold text-industrial-blue">89</div>
                      <div className="text-sm text-industrial-grey">Chats Today</div>
                    </div>
                    <div className="text-center p-4 bg-industrial-blue-light rounded-lg">
                      <div className="text-2xl font-bold text-industrial-blue">2.3s</div>
                      <div className="text-sm text-industrial-grey">Avg Response</div>
                    </div>
                    <div className="text-center p-4 bg-industrial-blue-light rounded-lg">
                      <div className="text-2xl font-bold text-industrial-blue">94%</div>
                      <div className="text-sm text-industrial-grey">Resolution Rate</div>
                    </div>
                    <div className="text-center p-4 bg-industrial-blue-light rounded-lg">
                      <div className="text-2xl font-bold text-industrial-blue">4.6⭐</div>
                      <div className="text-sm text-industrial-grey">User Rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPanel;