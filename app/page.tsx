import GolfAILogo from "./components/GolfAILogo";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <div className="flex items-center gap-6 mb-4">
            <div className="flex-shrink-0">
              <GolfAILogo />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">
              MyAIGolfCoach
            </h1>
          </div>
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

        {/* Golf Glossary */}
        <div className="mt-16">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900">
            Common Golf Terms
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Main Misses */}
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 font-semibold text-gray-900">Main Miss (Shot Direction)</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <span className="font-medium text-gray-900">Push:</span> Ball travels right of target for a right-handed golfer
                </div>
                <div>
                  <span className="font-medium text-gray-900">Pull:</span> Ball travels left of target for a right-handed golfer
                </div>
                <div>
                  <span className="font-medium text-gray-900">Slice:</span> Ball curves strongly right with sidespin for a right-handed golfer
                </div>
                <div>
                  <span className="font-medium text-gray-900">Hook:</span> Ball curves strongly left with sidespin for a right-handed golfer
                </div>
                <div>
                  <span className="font-medium text-gray-900">Fat:</span> Club hits ground before the ball, resulting in poor distance
                </div>
                <div>
                  <span className="font-medium text-gray-900">Thin:</span> Club strikes the ball too high on the clubface
                </div>
              </div>
            </div>

            {/* Ball Flight */}
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 font-semibold text-gray-900">Ball Flight (Overall Pattern)</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <span className="font-medium text-gray-900">Left:</span> Consistent pattern where the ball travels toward the left side
                </div>
                <div>
                  <span className="font-medium text-gray-900">Right:</span> Consistent pattern where the ball travels toward the right side
                </div>
                <div>
                  <span className="font-medium text-gray-900">Straight:</span> Ball travels directly toward your intended target line
                </div>
              </div>
            </div>

            {/* Handicap */}
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 font-semibold text-gray-900">Handicap (Skill Level)</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <span className="font-medium text-gray-900">0–5:</span> Expert golfer with consistent ball striking
                </div>
                <div>
                  <span className="font-medium text-gray-900">6–12:</span> Experienced golfer with solid fundamentals
                </div>
                <div>
                  <span className="font-medium text-gray-900">13–20:</span> Intermediate golfer still developing consistency
                </div>
                <div>
                  <span className="font-medium text-gray-900">21+:</span> Beginner or recreational golfer
                </div>
              </div>
            </div>

            {/* Clubs */}
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 font-semibold text-gray-900">Clubs (Equipment)</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <span className="font-medium text-gray-900">Driver:</span> Low-numbered wood club for maximum distance off the tee
                </div>
                <div>
                  <span className="font-medium text-gray-900">Iron:</span> Mid-range clubs for accuracy and distance control
                </div>
                <div>
                  <span className="font-medium text-gray-900">Wedge:</span> High-loft clubs for short shots and precise distances
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}