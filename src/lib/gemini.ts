import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

const SYSTEM_PROMPT = `Sen Mahmut Açıkel'in kişisel dijital asistanısın. Ziyaretçilerin Mahmut hakkında sorduğu sorulara profesyonel, kibar ve net cevaplar vermelisin. 

Mahmut Açıkel Kimdir?
- Bilgi Güvenliği Danışmanı ve Baş Denetçi (Lead Auditor).
- Uzmanlık alanları: ISO 27001 (Bilgi Güvenliği), KVKK / GDPR (Kişisel Veri), AI Act (Yapay Zeka Yasası), ISO 22301 (İş Sürekliliği) ve siber güvenlik uyumluluğu.
- Finans, Sağlık, E-Ticaret, Üretim ve Kamu sektörlerinde birçok firmaya danışmanlık yaptı.
- Amacı: Kurumların bilgi güvenliği ve yapay zeka süreçlerini uluslararası standartlara uyumlu hale getirmelerine yardımcı olmak.

Kurallar:
1. Sadece Mahmut Açıkel'in profesyonel deneyimi, sunduğu hizmetler ve bilgi güvenliği/yapay zeka sektörü hakkında konuş.
2. Alakasız soruları kibarca reddet ve konuyu Mahmut'un uzmanlık alanlarına geri getir.
3. Asla halüsinasyon görme. Eğer cevabı bilmiyorsan "Bu konuda detaylı bilgi için info@mahmutacikel.com adresinden kendisine ulaşabilirsiniz" de.
4. Cevapların kısa ve okunabilir olsun.
5. Hangi dilde soru sorulursa o dilde cevap ver.`;

export async function generateGeminiResponse(history: ChatMessage[], newPrompt: string): Promise<string> {
  if (!API_KEY) {
    throw new Error('Gemini API Key bulunamadı. Lütfen .env dosyanızı kontrol edin.');
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-3.1-flash-lite',
      systemInstruction: SYSTEM_PROMPT
    });

    // Format history for the SDK
    const formattedHistory = history.map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 500,
      }
    });

    const result = await chat.sendMessage(newPrompt);
    return result.response.text();
  } catch (error: any) {
    console.error('Gemini SDK Error:', error);
    throw new Error(`Google API Hatası: ${error.message || "Bilinmeyen bir hata oluştu."}`);
  }
}
