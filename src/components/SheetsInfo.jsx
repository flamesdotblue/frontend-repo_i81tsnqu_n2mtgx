import { CheckCircle2, FileSpreadsheet, Zap } from "lucide-react";

export default function SheetsInfo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700">
            <FileSpreadsheet size={20} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Google Sheets sync (overview)</h2>
            <p className="text-sm text-slate-600">How bookings can land in your sheet in real-time.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            icon={<Zap className="text-emerald-600" size={18} />}
            title="Webhook from chatbot"
            desc="Using WhatsApp Business API, each completed booking posts structured data to your webhook."
          />
          <Card
            icon={<CheckCircle2 className="text-emerald-600" size={18} />}
            title="Backend writes to Sheets"
            desc="The webhook stores data to Google Sheets via a service account or OAuth. It can also write to your DB."
          />
          <Card
            icon={<FileSpreadsheet className="text-emerald-600" size={18} />}
            title="Unified reporting"
            desc="Use the sheet for daily rosters, no-shows, and revenue reporting. Share securely with your team."
          />
        </div>

        <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-900">
          Production note: When you're ready, connect this UI to your backend endpoint; the backend should use the Google Sheets API (v4) to append rows for each booking.
        </div>
      </div>

      <footer className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
        Built for clinics that want a modern, WhatsApp-first patient experience.
      </footer>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-2 flex items-center gap-2 font-medium">
        {icon}
        {title}
      </div>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}
