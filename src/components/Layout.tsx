import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './Header';
import { Chatbot } from './Chatbot';
import { Footer } from './Footer';
import { cn } from '@/lib/utils';
import useMobile from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isChatbotOpen, setIsChatbotOpen] = useState(true);
  const isMobile = useMobile();
  const [chatbotWidth, setChatbotWidth] = useState(window.innerWidth / 3);
  const { t } = useTranslation();

  useEffect(() => {
    if (!isMobile) {
      const initialWidth = Math.max(320, Math.min(800, window.innerWidth / 3));
      setChatbotWidth(initialWidth);
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-background w-full">
      <Header 
        onChatbotToggle={() => setIsChatbotOpen(!isChatbotOpen)}
        isChatbotOpen={isChatbotOpen}
      />
      
      <div className="flex w-full">
        {/* Main Content */}
        <main 
          className={cn(
            "flex-1 transition-all duration-300",
            isChatbotOpen ? "mr-0" : "mr-0"
          )}
          style={{
            marginRight: isChatbotOpen && !isMobile ? `${chatbotWidth}px` : '0px'
          }}
        >
          {children}
          <Footer />
        </main>

        {/* Chatbot Sidebar */}
        <div
          className={cn(
            "fixed right-0 top-16 h-[calc(100vh-4rem)] bg-sidebar border-l border-sidebar-border transition-transform duration-300 z-40",
            isChatbotOpen ? "translate-x-0" : "translate-x-full",
            isMobile ? "w-full" : ""
          )}
          style={{ width: isMobile ? '100%' : `${chatbotWidth}px` }}
        >
          <Chatbot
            onClose={() => setIsChatbotOpen(false)}
            onResize={(width) => setChatbotWidth(width)}
          />
        </div>

        {/* Resize Handle */}
        {isChatbotOpen && !isMobile && (
          <div
            className="fixed right-0 top-16 w-1 h-[calc(100vh-4rem)] bg-border hover:bg-primary cursor-col-resize z-50 transition-colors"
            style={{ right: `${chatbotWidth - 2}px` }}
            onMouseDown={(e) => {
              const startX = e.clientX;
              const startWidth = chatbotWidth;

              const handleMouseMove = (e: MouseEvent) => {
                const newWidth = Math.max(320, Math.min(800, startWidth + startX - e.clientX));
                setChatbotWidth(newWidth);
              };

              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };

              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          />
        )}

        {/* Mobile Overlay */}
        {isChatbotOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsChatbotOpen(false)}
          />
        )}
      </div>
    </div>
  );
}