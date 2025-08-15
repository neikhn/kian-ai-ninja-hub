import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Send,
  X,
  Bot,
  User,
  Loader2,
  Volume2,
  VolumeX,
  RotateCcw,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { systemPrompt } from '@/prompts/gemini-system-prompt';
import { callGeminiApi } from '@/lib/gemini';
import ReactMarkdown from './ReactMarkdown';

interface ChatbotProps {
  onClose: () => void;
  onResize: (width: number) => void;
}

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  emotion?: 'greet' | 'sad' | 'happy' | 'thinking' | 'curious' | 'neutral';
  suggestions?: string[];
}

export function Chatbot({ onClose, onResize }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [quickSuggestions, setQuickSuggestions] = useState<string[]>([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isQuickSuggestionsOpen, setIsQuickSuggestionsOpen] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  const emotionVideos = {
    greet: { entrance: '/mascot/greet.mp4', loop: '/mascot/greet_loop.mp4' },
    sad: { entrance: '/mascot/sad.mp4', loop: '/mascot/sad_loop.mp4' },
    happy: { entrance: '/mascot/neutral_1.mp4', loop: '/mascot/neutral_1_loop.mp4' },
    thinking: { entrance: '/mascot/neutral_1.mp4', loop: '/mascot/neutral_1_loop.mp4' },
    curious: { entrance: '/mascot/neutral_1.mp4', loop: '/mascot/neutral_1_loop.mp4' },
    neutral: { entrance: '/mascot/neutral_1.mp4', loop: '/mascot/neutral_1_loop.mp4' }
  };

  const currentEmotion = messages.length > 0
    ? messages[messages.length - 1].emotion || 'neutral'
    : 'greet';
  
  const [activeVideo, setActiveVideo] = useState(0);
  const [videoSources, setVideoSources] = useState([
    emotionVideos[currentEmotion].entrance,
    emotionVideos[currentEmotion].loop,
  ]);

  useEffect(() => {
    const newVideos = emotionVideos[currentEmotion];
    setVideoSources([newVideos.entrance, newVideos.loop]);
    setActiveVideo(0);
  }, [currentEmotion]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const generateGreeting = async () => {
      setIsLoading(true);
      try {
        const lang = i18n.language === 'vi' ? 'Vietnamese' : 'English';
        const finalPrompt = systemPrompt.replace('{{language}}', lang);
        const response = await callGeminiApi(finalPrompt, [], "greet the user");
        const greetingMessage: Message = {
          id: '1',
          content: response.content,
          sender: 'bot',
          timestamp: new Date(),
          emotion: 'greet', // Force the first message emotion to be 'greet'
        };
        setMessages([greetingMessage]);
        if (response.suggestions) {
          setQuickSuggestions(response.suggestions);
        }
      } catch (error) {
        console.error("Error generating greeting:", error);
        const fallbackGreeting: Message = {
          id: '1',
          content: "Hello! I'm Kien's AI assistant. How can I help you today?",
          sender: 'bot',
          timestamp: new Date(),
          emotion: 'greet', // Also force fallback greeting to use 'greet'
        };
        setMessages([fallbackGreeting]);
        setQuickSuggestions([
          "What is the Ninja AI Program?",
          "Tell me about Hoang Kien.",
          "How do I apply?",
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    if (messages.length === 0) {
      generateGreeting();
    }
  }, []);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const updatedMessages = [...messages, userMessage];
      const history = updatedMessages.map(({ content, sender }) => ({ content, sender }));
      const lang = i18n.language === 'vi' ? 'Vietnamese' : 'English';
      const finalPrompt = systemPrompt.replace('{{language}}', lang);
      const response = await callGeminiApi(finalPrompt, history, content.trim());

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        sender: 'bot',
        timestamp: new Date(),
        emotion: response.emotion,
      };

      setMessages((prev) => [...prev, botResponse]);
      if (response.suggestions) {
        setQuickSuggestions(response.suggestions);
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble connecting. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
        emotion: 'neutral',
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-full bg-sidebar">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-sidebar-foreground">
              {t('chatbot.title')}
            </h3>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNewChat}
            className="h-8 w-8"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMuted(!isMuted)}
            className="h-8 w-8"
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Emotion Display Area */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
          {[0, 1].map((index) => (
            <video
              key={`${currentEmotion}-${index}`}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                activeVideo === index ? "opacity-100" : "opacity-0"
              )}
              autoPlay
              loop={index === 1} // Only loop the second video
              muted
              playsInline
              onEnded={() => {
                if (index === 0) {
                  setActiveVideo(1);
                }
              }}
              src={videoSources[index]}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 text-white text-xs rounded">
            {currentEmotion}
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea 
        ref={scrollAreaRef}
        className="flex-1 px-4"
      >
        <div className="space-y-4 py-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start space-x-3",
                message.sender === 'user' ? "justify-end" : "justify-start"
              )}
            >
              {message.sender === 'bot' && (
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-white" />
                </div>
              )}
              
              <div
                className={cn(
                  "max-w-[80%] px-3 py-2 rounded-lg text-sm",
                  message.sender === 'user'
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
              
              {message.sender === 'user' && (
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-3 h-3 text-secondary-foreground" />
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                <Bot className="w-3 h-3 text-white" />
              </div>
              <div className="bg-muted px-3 py-2 rounded-lg">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Quick Suggestions */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <p className="text-xs font-medium text-muted-foreground">
              {t('chatbot.quickSuggestions')}
            </p>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsQuickSuggestionsOpen(!isQuickSuggestionsOpen)}
              className="h-6 w-6"
            >
              {isQuickSuggestionsOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronUp className="h-4 w-4" />
              )}
            </Button>
          </div>
          {isQuickSuggestionsOpen && (
            <div className="flex flex-wrap gap-2">
              {quickSuggestions.slice(0, 3).map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs h-8"
                  onClick={() => handleSendMessage(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          )}
        </div>
        
        {/* Input */}
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={t('chatbot.placeholder')}
            className="flex-1"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage(inputValue);
              }
            }}
            disabled={isLoading}
          />
          <Button
            size="icon"
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim() || isLoading}
            className="flex-shrink-0"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}