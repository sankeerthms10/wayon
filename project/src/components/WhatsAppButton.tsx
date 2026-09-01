import { MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '@/utils/helpers';

export default function WhatsAppButton() {
  return (
    <a
      href={getGeneralWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-elevated transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5d] group"
    >
      <MessageCircle className="h-6 w-6 fill-white" strokeWidth={1.5} />
      <span className="hidden md:inline text-sm font-semibold max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[200px]">
        Chat with us
      </span>
    </a>
  );
}
