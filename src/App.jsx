import Hero from "./components/Hero";
import ChatSimulator from "./components/ChatSimulator";
import BookingForm from "./components/BookingForm";
import SheetsInfo from "./components/SheetsInfo";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <ChatSimulator />
      <BookingForm />
      <SheetsInfo />
    </div>
  );
}

export default App;
