import { ChatMessageItem } from "../chat-message";
import { RealtimeChat } from "../realtime-chat";
import { ThemeSwitcher } from "./theme-switcher";   

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
      <p><b>© 2025 Dunati</b> — Todos os direitos reservados.</p>
      <ThemeSwitcher />
    </footer>
  );
}