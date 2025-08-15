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
  VolumeX
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatbotProps {
  onClose: () => void;
  onResize: (width: number) => void;
}

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  emotion?: 'happy' | 'thinking' | 'curious' | 'neutral';
}

export function Chatbot({ onClose, onResize }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Xin chào! Tôi là trợ lý AI của Kiên. Tôi có thể giúp bạn tìm hiểu về chương trình Ninja AI và kinh nghiệm của Kiên. Bạn muốn hỏi gì?',
      sender: 'bot',
      timestamp: new Date(),
      emotion: 'happy'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const emotionVideos = {
    happy: '/placeholder-videos/happy.mp4',
    thinking: '/placeholder-videos/thinking.mp4', 
    curious: '/placeholder-videos/curious.mp4',
    neutral: '/placeholder-videos/neutral.mp4'
  };

  const currentEmotion = messages.length > 0 
    ? messages[messages.length - 1].emotion || 'neutral'
    : 'neutral';

  const quickSuggestions = t('chatbot.suggestions', { returnObjects: true }) as string[];

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

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

    // Simulate API call to Gemini 2.5 Flash
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(content),
        sender: 'bot',
        timestamp: new Date(),
        emotion: getBotEmotion(content)
      };

      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('ninja ai') || input.includes('chương trình')) {
      return 'Chương trình Ninja AI là khóa đào tạo chuyên sâu 6 tháng để trở thành AI Engineer. Chúng tôi cam kết 100% có việc làm sau tốt nghiệp với mức lương khởi điểm 15-25 triệu/tháng. Bạn muốn biết thêm về lộ trình học tập hay yêu cầu tuyển sinh?';
    }
    
    if (input.includes('kinh nghiệm') || input.includes('kiên')) {
      return 'Kiên có hơn 8 năm kinh nghiệm trong lĩnh vực công nghệ, từ lập trình viên đến founder. Anh đã xây dựng nhiều sản phẩm thành công và hiện đang mentor cho hơn 200 developers trẻ. Thế mạnh của Kiên là kết hợp kỹ thuật với tư duy kinh doanh.';
    }
    
    if (input.includes('apply') || input.includes('ứng tuyển')) {
      return 'Để ứng tuyển chương trình Ninja AI, bạn cần: 1) Gửi CV và thư động lực, 2) Tham gia test đánh giá năng lực, 3) Phỏng vấn với team. Hạn nộp hồ sơ là cuối tháng này. Bạn đã sẵn sàng để bắt đầu chưa?';
    }
    
    if (input.includes('lộ trình') || input.includes('roadmap')) {
      return 'Lộ trình 6 tháng: Tháng 1-2: Python & AI cơ bản, Tháng 3-4: Machine Learning & Deep Learning, Tháng 5-6: Computer Vision, NLP và dự án thực tế. Mỗi tháng có 1 dự án lớn để build portfolio.';
    }
    
    return 'Cảm ơn bạn đã hỏi! Tôi có thể giúp bạn tìm hiểu về chương trình Ninja AI, kinh nghiệm của Kiên, cách ứng tuyển, lộ trình học tập và cơ hội việc làm. Bạn quan tâm đến chủ đề nào nhất?';
  };

  const getBotEmotion = (userInput: string): 'happy' | 'thinking' | 'curious' | 'neutral' => {
    const input = userInput.toLowerCase();
    
    if (input.includes('?') || input.includes('hỏi') || input.includes('gì')) {
      return 'curious';
    }
    
    if (input.includes('khó') || input.includes('phức tạp') || input.includes('làm sao')) {
      return 'thinking';
    }
    
    if (input.includes('tuyệt vời') || input.includes('cảm ơn') || input.includes('hay quá')) {
      return 'happy';
    }
    
    return 'neutral';
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
          <video
            key={currentEmotion}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            poster="/placeholder-avatar.jpg"
          >
            <source src={emotionVideos[currentEmotion]} type="video/mp4" />
          </video>
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
                {message.content}
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
          <p className="text-xs font-medium text-muted-foreground">
            Gợi ý nhanh:
          </p>
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