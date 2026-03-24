import GolfAILogo from "./components/GolfAILogo";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="flex justify-center">
          <GolfAILogo />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          MyAIGolfCoach
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Your personal Golf Coach. Understand your swing, practise with purpose, and improve over time.          
        </p>

        <button className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-green-700 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}