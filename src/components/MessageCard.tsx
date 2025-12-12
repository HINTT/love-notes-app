import { LoveMessage } from "@/data/messages";
import { Heart } from "lucide-react";

interface MessageCardProps {
  message: LoveMessage;
  onClick: () => void;
  index: number;
}

const MessageCard = ({ message, onClick, index }: MessageCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-full text-left bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up border border-border/50"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-rose-soft rotate-45 transform origin-bottom-left" />
      </div>
      
      {/* Emoji badge */}
      <div className="absolute -top-3 -left-3 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl shadow-soft animate-float">
        {message.emoji}
      </div>
      
      <div className="pt-4">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-rose-soft text-rose-deep rounded-full mb-3">
          {message.occasion}
        </span>
        
        <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {message.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 font-sans">
          {message.message.split('\n')[2] || message.message.substring(0, 100)}...
        </p>
        
        <div className="mt-4 flex items-center text-primary font-medium text-sm">
          <span>Read Message</span>
          <Heart className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
        </div>
      </div>
    </button>
  );
};

export default MessageCard;
