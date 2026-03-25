const chapterOneExample = {
  title: "Chapter 1 - Player Snapshot",
  playerProfile: {
    skillLevel: "Mid handicap (16)",
    missPattern: "Right miss with driver",
    startDirection: "Starts just right of target",
    curve: "Peels further right late in flight",
  },
  typicalBallFlight:
    "Your tee shot typically starts just right of target before continuing to curve further right through the flight. The miss becomes more pronounced as you add speed, with the ball finishing well right of your intended line.",
  clubUsed: "TaylorMade Stealth 2 Driver (10.5°)",
  golfBall: "Titleist Tour Soft",
  practiceAvailability: "1 range session per week (60-75 minutes), occasional 9-hole round",
  patternSummary:
    "A right-miss pattern driven by an open clubface relative to swing path, with the effect becoming more pronounced as swing speed increases.",
  skillLevelInsight:
    "At this level, this is a very common pattern - the motion is already functional, but sequencing and face control under speed are the main limitations. The consistency in your ball flight is a positive, as it gives a clear starting point for improvement.",
  whatYouAreExperiencing:
    "Some drives appear solid off the face but then leak right more than expected, often leaving difficult recovery shots. When you try to increase speed, timing starts to feel off, confidence drops on the tee, and trust in your normal swing begins to fade.",
};

const chapterTwoExample = {
  title: "Chapter 2 - Performance Diagnosis",
  whatBallFlightIsTellingUs:
    "The ball starting just right of target and then continuing to curve further right is a very clear pattern, not random variance. The start direction tells us the club is being delivered slightly to the right at impact, while the rightward curve shows the face is still open relative to that delivery. When you add speed, the same relationship becomes harder to control, so the miss shape gets bigger rather than changing shape.",
  drivers: {
    clubfaceControl:
      "The curve is being driven primarily by face control at impact. With the face staying open relative to the path, the ball keeps peeling right through the flight, which matches exactly what you are seeing from the tee.",
    swingDirectionPath:
      "Path is a contributing factor, but it appears secondary to the face condition. Your delivery direction influences where the ball starts, while the face-to-path relationship is what turns a manageable start line into a larger right miss.",
    transitionTiming:
      "The underlying issue is most likely timing through transition, especially as speed rises. The motion itself is functional, but under pressure the sequence arrives slightly out of sync, leaving the face late and the pattern more exaggerated.",
  },
  whatIsWorking:
    "You already produce a repeatable shot pattern, which is a strong positive because it gives clear diagnostic information. The motion is functional enough to create recognisable ball-flight behavior rather than unpredictable misses. Your awareness of when the miss gets worse, particularly at higher speed, is a strong advantage and will help accelerate improvement.",
  keyInsight:
    "This is not a full rebuild situation. The issue is a control-and-sequencing mismatch, where an open face relative to path becomes more pronounced as speed increases.",
};

type ExampleReportCardProps = {
  showIntro?: boolean;
};

export default function ExampleReportCard({ showIntro = true }: ExampleReportCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-7">
      {showIntro ? (
        <>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">What Your Personalised Plan Includes</p>
          <p className="mt-1 text-xs text-gray-500">Sample from a full personalised report</p>
        </>
      ) : null}

      <h3 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">{chapterOneExample.title}</h3>
      <p className="mt-2 text-sm text-gray-600">How your current ball flight behaves under real-course pressure.</p>

      <div className="mt-6">
        <p className="text-base font-semibold text-gray-900">Player Profile</p>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Skill Level</p>
            <p className="mt-1 text-sm font-medium text-gray-900">{chapterOneExample.playerProfile.skillLevel}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Miss Pattern</p>
            <p className="mt-1 text-sm font-medium text-gray-900">{chapterOneExample.playerProfile.missPattern}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Start Direction</p>
            <p className="mt-1 text-sm font-medium text-gray-900">{chapterOneExample.playerProfile.startDirection}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Curve</p>
            <p className="mt-1 text-sm font-medium text-gray-900">{chapterOneExample.playerProfile.curve}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm leading-relaxed text-gray-800 md:text-base">
        <p className="font-semibold text-gray-900">Typical Ball Flight</p>
        <p className="mt-2">{chapterOneExample.typicalBallFlight}</p>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Club Used</p>
          <p className="mt-1 text-sm font-medium text-gray-900">{chapterOneExample.clubUsed}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Golf Ball</p>
          <p className="mt-1 text-sm font-medium text-gray-900">{chapterOneExample.golfBall}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Practice Availability</p>
          <p className="mt-1 text-sm font-medium text-gray-900">{chapterOneExample.practiceAvailability}</p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border-l-4 border-green-600 bg-green-50 p-4">
        <p className="text-sm font-semibold text-gray-900">Pattern Summary</p>
        <p className="mt-1 text-sm leading-relaxed text-gray-800 md:text-base">{chapterOneExample.patternSummary}</p>
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
        <p className="font-semibold text-gray-900">Skill-Level Insight</p>
        <p className="mt-2">{chapterOneExample.skillLevelInsight}</p>
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-stone-50 p-4 text-sm leading-relaxed text-gray-800 md:text-base">
        <p className="font-semibold text-gray-900">What You Are Experiencing</p>
        <p className="mt-2">{chapterOneExample.whatYouAreExperiencing}</p>
      </div>

      <div className="mt-8 border-t border-gray-200 pt-6">
        <h4 className="text-2xl font-bold text-gray-900 md:text-3xl">{chapterTwoExample.title}</h4>

        <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
          <p className="font-semibold text-gray-900">What Your Ball Flight Is Telling Us</p>
          <p className="mt-2">{chapterTwoExample.whatBallFlightIsTellingUs}</p>
        </div>

        <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
          <p className="font-semibold text-gray-900">What&apos;s Driving This Pattern</p>

          <div className="mt-3 space-y-3">
            <div>
              <p className="font-semibold text-gray-900">Clubface Control</p>
              <p className="mt-1">{chapterTwoExample.drivers.clubfaceControl}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Swing Direction (Path)</p>
              <p className="mt-1">{chapterTwoExample.drivers.swingDirectionPath}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Transition &amp; Timing</p>
              <p className="mt-1">{chapterTwoExample.drivers.transitionTiming}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
          <p className="font-semibold text-gray-900">What&apos;s Working in Your Swing</p>
          <p className="mt-2">{chapterTwoExample.whatIsWorking}</p>
        </div>

        <div className="mt-4 rounded-xl border-l-4 border-green-600 bg-green-50 p-4 text-sm leading-relaxed text-gray-800 md:text-base">
          <p className="font-semibold text-gray-900">The Key Insight</p>
          <p className="mt-2">{chapterTwoExample.keyInsight}</p>
        </div>
      </div>

      <div className="mt-7 border-t border-gray-200 pt-4">
        <p className="text-lg font-semibold text-green-700">Unlock your full personalised plan →</p>
      </div>
    </div>
  );
}
