import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/site";

// Floating "chat on WhatsApp" button, shown on every page. For clients in
// India this is usually the quickest way to start a conversation — much more
// likely to be used than a contact form.
const WhatsAppButton = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Anubhav on WhatsApp"
    title="Chat on WhatsApp"
    className="group fixed bottom-5 right-5 xl:bottom-8 xl:right-8 z-30 flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 h-14 pl-4 pr-4 xl:pr-6 hover:bg-[#1ebe5b] transition-colors"
  >
    <FaWhatsapp className="text-3xl shrink-0" aria-hidden="true" />
    <span className="hidden xl:inline font-semibold">Chat on WhatsApp</span>
  </a>
);

export default WhatsAppButton;
