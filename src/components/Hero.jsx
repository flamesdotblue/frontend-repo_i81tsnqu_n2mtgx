import { MessageCircle, Calendar, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-cyan-50" />
      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-24 sm:pb-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/60 px-3 py-1 text-sm text-emerald-700 backdrop-blur">
              <MessageCircle size={16} />
              WhatsApp-first booking experience
            </div>
            <h1 className="mt-4 font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl">
              Book doctor appointments via WhatsApp in minutes
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              A friendly chatbot that handles patient intake, confirms slots, and
              logs bookings to your sheet — so your team can focus on care.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#chat"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                Try the chatbot demo
              </a>
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700 hover:bg-slate-50"
              >
                Quick booking form
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="text-emerald-600" size={18} />
                Real-time availability
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-emerald-600" size={18} />
                Secure & HIPAA friendly
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-3xl bg-gradient-to-tr from-emerald-100 to-cyan-100 blur-3xl" />
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-400 to-cyan-400 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-white/95">
                  <div className="text-center">
                    <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                      <MessageCircle />
                    </div>
                    <p className="text-slate-600">WhatsApp-like chat UI below</p>
                    <p className="text-sm text-slate-500">Interactive demo includes booking flow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
