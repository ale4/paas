import { useState, useRef, useEffect } from "react";
import { X, Send, Shield, Loader2, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  resources?: { title: string; type: string }[];
}

interface AIChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIChatPanel({ isOpen, onClose }: AIChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your AI Privacy Advisor. I can help you with GDPR, CCPA, HIPAA compliance questions, data protection strategies, and privacy best practices. How can I assist you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // todo: remove mock functionality - simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Based on your query, here's what you need to know about privacy compliance. I've also found some relevant resources that may help:",
        resources: [
          { title: "GDPR Compliance Checklist", type: "Guide" },
          { title: "Data Processing Agreement Template", type: "Template" },
        ],
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  // todo: remove mock functionality
  const quickActions = [
    { label: "GDPR Requirements", icon: FileText },
    { label: "Data Breach Protocol", icon: Shield },
    { label: "Privacy Policy Help", icon: HelpCircle },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-background border-l border-border z-50 flex flex-col shadow-xl">
      <div className="flex items-center justify-between gap-4 p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">AI Privacy Advisor</h3>
            <p className="text-xs text-muted-foreground">Expert compliance support</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} data-testid="button-close-chat">
          <X className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarFallback className={message.role === "assistant" ? "bg-primary text-primary-foreground" : ""}>
                  {message.role === "assistant" ? <Shield className="h-4 w-4" /> : "U"}
                </AvatarFallback>
              </Avatar>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
                data-testid={`message-${message.id}`}
              >
                <p className="text-sm">{message.content}</p>
                {message.resources && message.resources.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {message.resources.map((resource, idx) => (
                      <Card key={idx} className="p-3 bg-background cursor-pointer hover-elevate">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">{resource.title}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">{resource.type}</Badge>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <Shield className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg p-3">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <div className="flex flex-wrap gap-2 mb-3">
          {quickActions.map((action, idx) => (
            <Button
              key={idx}
              variant="outline"
              size="sm"
              onClick={() => {
                setInputValue(action.label);
              }}
              data-testid={`button-quick-${idx}`}
            >
              <action.icon className="h-3 w-3 mr-1" />
              {action.label}
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about privacy compliance..."
            className="flex-1"
            data-testid="input-chat"
          />
          <Button onClick={handleSend} data-testid="button-send">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
