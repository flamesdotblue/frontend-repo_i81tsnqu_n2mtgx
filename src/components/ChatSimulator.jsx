import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const botReplies = [
  "Hi! I'm MedBot. What's your full name?",
  "Got it. Please share your phone number.",
  "Thanks! What specialty or doctor do you want to see?",
  "When would you like to come in? (e.g. 12 Oct, 3pm)",
  "Any symptoms we should note?",
  "All set. I'll confirm availability and save this to your sheet!",
];

export default function ChatSimulator() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Welcome to Care Clinic 👋" },
    { from: "bot", text: botReplies[0] },
  ]);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    const next = step + 1;
    setStep(next);
    const reply = botReplies[next] ?? "Thanks! Our team will reach out shortly.";
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 500);
  };

  return (
    <section id="chat" className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-center gap-2">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700">
          <MessageCircle size={20} />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Chatbot demo</h2>
          <p className="text-sm text-slate-600">A WhatsApp-style conversation that collects booking details.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="text-sm text-slate-600">Care Clinic</span>
            </div>
            <span className="text-xs text-slate-500">WhatsApp</span>
          </div>
          <div className="h-80 overflow-y-auto rounded-lg bg-slate-50 p-3">
            {messages.map((m, i) => (
              <div key={i} className={`mb-2 flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                    m.from === "user"
                      ? "bg-emerald-600 text-white rounded-br-md"
                      : "bg-white text-slate-800 border border-slate-200 rounded-bl-md"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type your reply..."
              className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-emerald-500 focus:ring-2"
            />
            <button
              onClick={send}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              <Send size={16} />
              Send
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold">What this demo does</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Guides the patient through five simple questions.</li>
            <li>Simulates a booking confirmation message.</li>
            <li>Pairs perfectly with the form to capture final details.</li>
            <li>In production, this flow can write to a Google Sheet and your EHR.</li>
          </ul>
          <div className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
            Pro tip: Connect this to the official WhatsApp Business API for live conversations and notifications.
          </div>
        </div>
      </div>
    </section>
  );
}
