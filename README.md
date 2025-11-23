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
📦 How It Works

The agent greets the user as a barista.

It collects order details:

Drink type

Size

Milk type

Extras

Customer name

It asks clarification questions until all fields are filled.

Once completed, it:
✅ Confirms the order
✅ Displays the full order
✅ Outputs the JSON summary

🎥 Demo

A live demo video showing:

Voice interaction

Full coffee ordering process

JSON order output

👉 Video Link: (Add your LinkedIn or Drive link here)

🧩 Tech Stack

Google AI Studio

Murf Falcon TTS API

Voice interaction framework

JavaScript / Web Interface

💡 Example Conversation

User:

I want a cappuccino

FalconX:

Sure! What size would you like?

User:

Medium with oat milk and caramel

FalconX:

Great! May I have your name?

User:

Mukesh

✅ Order Confirmed + JSON Output

🎯 Challenge

Built for:
Murf AI Voice Agent Challenge
Day 2 – Coffee Shop Barista Agent Task
