import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { loveMessages, LoveMessage } from "@/data/messages";
import MessageCard from "@/components/MessageCard";
import MessageModal from "@/components/MessageModal";
import FloatingHearts from "@/components/FloatingHearts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [selectedMessage, setSelectedMessage] = useState<LoveMessage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenMessage = (message: LoveMessage) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const handleCloseMessage = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMessage(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-romantic relative overflow-hidden">
      <FloatingHearts />
      
      {/* Hero Section */}
      <header className="relative z-10 pt-12 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative hearts */}
          <div className="flex justify-center gap-3 mb-4">
            <Heart className="w-5 h-5 text-rose-medium fill-rose-medium animate-pulse-soft" />
            <Heart className="w-7 h-7 text-primary fill-primary animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
            <Heart className="w-5 h-5 text-rose-medium fill-rose-medium animate-pulse-soft" style={{ animationDelay: "1s" }} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-3 animate-fade-in-up">
            My Love Letters
          </h1>
          <p className="text-lg text-muted-foreground font-sans max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            For you, my darling. Swipe to discover your messages.
          </p>
          
          {/* Swipe hint */}
          <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground/70 text-sm animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <ChevronLeft className="w-4 h-4 animate-pulse" />
            <span>Swipe to explore</span>
            <ChevronRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>
      </header>

      {/* Messages Carousel */}
      <main className="relative z-10 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {loveMessages.map((message, index) => (
                <CarouselItem key={message.id} className="pl-2 md:pl-4 basis-[85%] sm:basis-[45%] md:basis-[33%] lg:basis-[25%]">
                  <MessageCard
                    message={message}
                    onClick={() => handleOpenMessage(message)}
                    index={index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-4 bg-card/90 backdrop-blur-sm border-border hover:bg-card" />
            <CarouselNext className="right-0 md:-right-4 bg-card/90 backdrop-blur-sm border-border hover:bg-card" />
          </Carousel>
          
          {/* Message count indicator */}
          <p className="text-center text-muted-foreground/60 text-sm mt-6">
            {loveMessages.length} messages waiting for you 💕
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center">
        <p className="text-muted-foreground font-serif italic text-base flex items-center justify-center gap-2">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-soft" />
          <span>just for you</span>
        </p>
      </footer>

      {/* Message Modal */}
      <MessageModal
        message={selectedMessage}
        isOpen={isModalOpen}
        onClose={handleCloseMessage}
      />
    </div>
  );
};

export default Index;
