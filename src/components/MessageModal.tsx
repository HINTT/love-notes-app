import { LoveMessage } from "@/data/messages";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Heart } from "lucide-react";

interface MessageModalProps {
  message: LoveMessage | null;
  isOpen: boolean;
  onClose: () => void;
}

const MessageModal = ({ message, isOpen, onClose }: MessageModalProps) => {
  if (!message) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border p-0">
        {/* Header with gradient */}
        <div className="relative bg-gradient-romantic p-8 rounded-t-lg">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNGMwIDItMiA0LTIgNHMtMi0yLTItNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-card/80 hover:bg-card transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          
          <div className="text-center relative z-10">
            <span className="text-5xl mb-4 block animate-float">{message.emoji}</span>
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-card/80 text-rose-deep rounded-full mb-3">
              {message.occasion}
            </span>
            <DialogHeader>
              <DialogTitle className="text-3xl font-serif font-semibold text-foreground text-center">
                {message.title}
              </DialogTitle>
            </DialogHeader>
          </div>
        </div>
        
        {/* Message content */}
        <div className="p-8 animate-fade-in-up">
          <div className="prose prose-lg max-w-none">
            {message.message.split('\n').map((paragraph, idx) => (
              <p 
                key={idx} 
                className={`font-serif text-lg leading-relaxed text-foreground/90 mb-4 ${
                  paragraph.trim() === '' ? 'h-4' : ''
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Decorative footer */}
          <div className="mt-8 pt-6 border-t border-border flex items-center justify-center gap-2 text-primary">
            <Heart className="w-5 h-5 fill-primary animate-pulse-soft" />
            <span className="font-serif italic text-lg">With all my love</span>
            <Heart className="w-5 h-5 fill-primary animate-pulse-soft" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MessageModal;
