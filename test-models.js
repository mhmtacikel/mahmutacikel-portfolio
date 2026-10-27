const fetch = require('node-fetch'); // or native fetch in node 18+
require('dotenv').config();

async function listModels() {
  const API_KEY = process.env.VITE_GEMINI_API_KEY || '';
  
  if (!API_KEY) {
    console.error("API Key bulunamadı! .env dosyanızı kontrol edin.");
    return;
  }

  try {
    console.log("Modeller getiriliyor...");
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    const data = await response.json();
    
    if (data.error) {
      console.error("HATA:", data.error.message);
      return;
    }
    
    console.log("--- KULLANILABİLİR MODELLER ---");
    data.models.forEach((model) => {
      console.log(`- İsim: ${model.name.replace('models/', '')}`);
      console.log(`  Desteklenen Metotlar: ${model.supportedGenerationMethods.join(', ')}\n`);
    });
  } catch (error) {
    console.error("Fetch hatası:", error);
  }
}

listModels();
