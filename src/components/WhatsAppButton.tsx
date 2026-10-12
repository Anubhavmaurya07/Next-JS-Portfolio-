import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/site";

// Floating "chat on WhatsApp" button, shown on every page. For clients in
// India this is usually the quickest way to start a conversation — much more
// likely to be used than a contact form. Icon-only so it never covers the
// homepage stats or the package buttons on a laptop screen.
const WhatsAppButton = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Anubhav on WhatsApp"
    title="Chat on WhatsApp"
    className="fixed bottom-5 right-5 xl:bottom-8 xl:right-8 z-30 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 hover:bg-[#1ebe5b] hover:scale-105 transition"
  >
    <FaWhatsapp className="text-3xl shrink-0" aria-hidden="true" />
  </a>
);

export default WhatsAppButton;
