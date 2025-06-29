import AdviceForm from "./components/AdviceForm"; // use correct relative path
import './globals.css';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Startup Advisor
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Get AI-generated advice for your startup idea.
        </p>

        <AdviceForm />
      </div>
    </main>
  );
}
