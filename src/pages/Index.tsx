import { useState } from "react";
import { Heart } from "lucide-react";
import { loveMessages, LoveMessage } from "@/data/messages";
import MessageCard from "@/components/MessageCard";
import MessageModal from "@/components/MessageModal";
import FloatingHearts from "@/components/FloatingHearts";

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
    <div className="min-h-screen bg-gradient-romantic relative">
      <FloatingHearts />
      
      {/* Hero Section */}
      <header className="relative z-10 pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative hearts */}
          <div className="flex justify-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-rose-medium fill-rose-medium animate-pulse-soft" />
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
            <Heart className="w-6 h-6 text-rose-medium fill-rose-medium animate-pulse-soft" style={{ animationDelay: "1s" }} />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mb-4 animate-fade-in-up">
            My Love Letters
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            For you, my darling. Words from my heart, saved for when you need them most.
          </p>
          
          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </header>

      {/* Messages Grid */}
      <main className="relative z-10 px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loveMessages.map((message, index) => (
              <MessageCard
                key={message.id}
                message={message}
                onClick={() => handleOpenMessage(message)}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <p className="text-muted-foreground font-serif italic text-lg flex items-center justify-center gap-2">
          <span>Made with</span>
          <Heart className="w-5 h-5 text-primary fill-primary animate-pulse-soft" />
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
