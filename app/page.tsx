export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">
            MyAIGolfCoach
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Your personal golf coach. Understand your swing, practise with purpose, and improve over time.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">
            Start your golf assessment
          </h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="handicap" className="mb-2 block text-sm font-medium text-gray-700">
                Handicap
              </label>
              <select
                id="handicap"
                name="handicap"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-green-600 focus:outline-none"
              >
                <option value="">Select your handicap</option>
                <option value="0-5">0–5</option>
                <option value="6-12">6–12</option>
                <option value="13-20">13–20</option>
                <option value="21+">21+</option>
              </select>
            </div>

            <div>
              <label htmlFor="miss" className="mb-2 block text-sm font-medium text-gray-700">
                Main miss
              </label>
              <select
                id="miss"
                name="miss"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-green-600 focus:outline-none"
              >
                <option value="">Select your main miss</option>
                <option value="push">Push</option>
                <option value="pull">Pull</option>
                <option value="slice">Slice</option>
                <option value="hook">Hook</option>
                <option value="fat">Fat</option>
                <option value="thin">Thin</option>
              </select>
            </div>

            <div>
              <label htmlFor="flight" className="mb-2 block text-sm font-medium text-gray-700">
                Ball flight
              </label>
              <select
                id="flight"
                name="flight"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-green-600 focus:outline-none"
              >
                <option value="">Select ball flight</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="straight">Straight</option>
              </select>
            </div>

            <div>
              <label htmlFor="club" className="mb-2 block text-sm font-medium text-gray-700">
                Club
              </label>
              <select
                id="club"
                name="club"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-green-600 focus:outline-none"
              >
                <option value="">Select club</option>
                <option value="driver">Driver</option>
                <option value="iron">Iron</option>
                <option value="wedge">Wedge</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-green-600 px-6 py-3 text-lg font-semibold text-white hover:bg-green-700"
            >
              Get My Coaching Plan
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}