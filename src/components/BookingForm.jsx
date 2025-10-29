import { useState } from "react";
import { Calendar, CheckCircle } from "lucide-react";

export default function BookingForm() {
  const [status, setStatus] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    // Simulate async submit
    setStatus("loading");
    setTimeout(() => {
      console.log("Booking payload (connect to backend later):", payload);
      setStatus("success");
    }, 700);
  };

  return (
    <section id="book" className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-center gap-2">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700">
          <Calendar size={20} />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Quick booking form</h2>
          <p className="text-sm text-slate-600">Perfect for front-desk use or embedded on your site.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
              <input name="name" required className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-emerald-500 focus:ring-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Phone (WhatsApp)</label>
              <input name="phone" required className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-emerald-500 focus:ring-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input name="email" type="email" className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-emerald-500 focus:ring-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Preferred date</label>
              <input name="date" type="date" required className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-emerald-500 focus:ring-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Preferred time</label>
              <input name="time" type="time" required className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-emerald-500 focus:ring-2" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-slate-700">Doctor / Specialty</label>
              <input name="doctor" placeholder="e.g. Dr. Rao, Dermatology" className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-emerald-500 focus:ring-2" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-slate-700">Symptoms / Notes</label>
              <textarea name="notes" rows={3} className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-emerald-500 focus:ring-2" />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Submitting..." : "Book appointment"}
            </button>
            {status === "success" && (
              <div className="inline-flex items-center gap-2 text-emerald-700">
                <CheckCircle size={18} />
                <span className="text-sm">Booking saved! Check the sheet integration notes.</span>
              </div>
            )}
          </div>
        </form>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Front-desk tips</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Confirm the phone number — we’ll send WhatsApp notifications.</li>
            <li>Use the chatbot for after-hours triage and self-serve bookings.</li>
            <li>If a slot is unavailable, offer the next two nearest options.</li>
          </ul>
          <div className="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
            This demo stores data locally in your browser for now. Connect to your backend to sync with Google Sheets and calendar.
          </div>
        </div>
      </div>
    </section>
  );
}
