# ☕ FalconX Barista Agent

FalconX Barista Agent is a voice-powered AI coffee shop assistant built as part of the  
**Murf AI Voice Agent Challenge – Day 2**.

It can take coffee orders through voice, ask smart follow-up questions, and generate a structured JSON order summary.

---

## 🚀 Features

- 🎤 Voice-based coffee ordering  
- 🧠 Intelligent conversation flow with clarifying questions  
- ☕ Friendly barista persona  
- 📄 Generates structured **JSON order receipt**  
- 🔊 Uses the fastest TTS API: **Murf Falcon**  
- 🧪 Built and deployed using **Google AI Studio**  

---

## 🛠 Order State Format

Each order is managed in this structure:

```json
{
  "drinkType": "string",
  "size": "string",
  "milk": "string",
  "extras": ["string"],
  "name": "string"
}
ent Task
