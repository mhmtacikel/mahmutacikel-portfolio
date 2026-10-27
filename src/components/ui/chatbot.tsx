import { useEffect, useRef, useState } from "react";
import { Bot, MessageSquare, Send, User, X } from "lucide-react";
import { generateGeminiResponse, type ChatMessage } from "@/lib/gemini";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function sendMessage(event?: React.FormEvent) {
    event?.preventDefault();
    if (!input.trim() || isLoading) return;
    const prompt = input.trim();
    setInput("");
    const nextMessages = [...messages, { role: "user", content: prompt } as ChatMessage];
    setMessages(nextMessages);
    setIsLoading(true);
    try {
      const response = await generateGeminiResponse(messages, prompt);
      setMessages([...nextMessages, { role: "model", content: response }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages([...nextMessages, { role: "model", content: "Şu an yanıt veremiyorum. Lütfen info@mahmutacikel.com adresinden doğrudan ulaşın." }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button className={`chat-launcher ${isOpen ? "is-hidden" : ""}`} onClick={() => setIsOpen(true)} aria-label="MA Asistanı aç">
        <MessageSquare size={19} />
        <span>MA Asistan</span>
      </button>
      <section className={`chat-panel ${isOpen ? "is-open" : ""}`} aria-label="MA Asistan">
        <header className="chat-header">
          <div><span className="chat-kicker">01 / saha notu</span><strong>MA Asistan</strong><small>Hizmetler ve standartlar hakkında sorun.</small></div>
          <button onClick={() => setIsOpen(false)} aria-label="Asistanı kapat"><X size={18} /></button>
        </header>
        <div className="chat-messages">
          {messages.length === 0 && <div className="chat-welcome"><Bot size={18} /><p>Merhaba. ISO 27001, 27701, 42001 ve 22301 çalışmaları hakkında sorularınızı yanıtlayabilirim.</p><div className="chat-suggestions"><button onClick={() => setInput("ISO 27001 sürecinde nasıl yardımcı oluyorsunuz?")}>ISO 27001 süreci</button><button onClick={() => setInput("Hangi hizmet sizin için uygun?")}>Hangi hizmet uygun?</button></div></div>}
          {messages.map((message, index) => <div className={`chat-message ${message.role === "user" ? "from-user" : ""}`} key={`${message.role}-${index}`}><span className="chat-avatar">{message.role === "user" ? <User size={14} /> : <Bot size={14} />}</span><p>{message.content}</p></div>)}
          {isLoading && <div className="chat-message"><span className="chat-avatar"><Bot size={14} /></span><p>Notlar hazırlanıyor…</p></div>}
          <div ref={endRef} />
        </div>
        <form className="chat-form" onSubmit={sendMessage}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Sorunuzu yazın…" disabled={isLoading} /><button type="submit" disabled={isLoading} aria-label="Gönder"><Send size={16} /></button></form>
      </section>
    </>
  );
}
