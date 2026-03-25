"use client";

import { useState } from "react";

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

const totalPages = 12;

const chapterThreeExample = {
  title: "Chapter 3 - Root Cause Breakdown",
  intro:
    "Your pattern is happening for understandable reasons, and none of them require a full swing rebuild. We need to stabilise what happens just before and through impact.",
  causes: [
    {
      heading: "Face arrives late",
      detail:
        "As speed increases, the face is not squaring quickly enough. The ball starts slightly right, then the open face-to-path relationship adds rightward curve.",
    },
    {
      heading: "Transition races, sequence stalls",
      detail:
        "When you try to hit it harder, tempo in transition gets quicker. That leaves your release pattern reacting late rather than arriving on time.",
    },
    {
      heading: "Strike location drifts",
      detail:
        "Slightly inconsistent strike exaggerates spin and shape. Even a decent swing can look worse if contact moves around the face.",
    },
  ],
  takeaway:
    "In simple terms: this is a timing-and-control issue, not a talent issue. Better sequencing and face control will tighten start line and curve quickly.",
};

const chapterFourExample = {
  title: "Chapter 4 - Swing Feel Blueprint",
  primaryFeel:
    "Primary Feel: Through impact, feel the clubhead passing your hands a fraction earlier so the face can square without a forced roll.",
  checkpoint:
    "Single Checkpoint: On balanced swings, your stock driver should start closer to your intended start line with noticeably less late-right peel.",
};

const chapterFiveExample = {
  title: "Chapter 5 - Structured Range Plan",
  phases: [
    {
      heading: "Phase 1 (10 balls) - Calibration",
      detail:
        "Hit at 70% speed and exaggerate your Chapter 4 feel. Priority is centered contact and a predictable start line, not distance.",
    },
    {
      heading: "Phase 2 (15 balls) - Pattern Build",
      detail:
        "Move to 80-85% speed. Alternate one rehearsal feel, one live shot. Track start direction and curvature after every ball.",
    },
    {
      heading: "Phase 3 (10 balls) - Pressure Reps",
      detail:
        "Simulate on-course intent. Pick a fairway target, run full routine, then commit. If shape widens right, step back to Phase 2 for three reps.",
    },
  ],
  optionalTrainingAidSupport: {
    title: "Optional: Training Aid Support",
    intro: "These are not essential, but can help make the movement easier to feel and repeat.",
    aids: [
      {
        text: "An impact bag can help you rehearse a more stable, earlier release pattern through impact without rushing transition.",
        url: "https://www.amazon.co.uk/s?k=golf+impact+smash+bag",
      },
      {
        text: "A simple gate made from two alignment sticks can reinforce start-line control and help you confirm face delivery is becoming less right-biased.",
      },
    ],
  },
};

const chapterSixExample = {
  title: "Chapter 6 - Strike and Setup Adjustments",
  setup: [
    "Tee the ball so half sits above the crown to support a centered-to-slightly-high strike.",
    "Set lead-heel ball position, then keep sternum just behind ball at address.",
    "Use light grip pressure (4/10) to avoid late-face tension through impact.",
  ],
  strike:
    "Use face spray for 8-10 balls per session. Target a tighter strike cluster around center-high. Better strike consistency will reduce shape volatility immediately.",
};

const chapterSevenExample = {
  title: "Chapter 7 - Miss Correction Ladder",
  ladder: [
    {
      ifThis: "If the ball starts right and stays right",
      doThis: "Rehearse two slower swings feeling earlier clubhead release, then hit one at 75% speed.",
    },
    {
      ifThis: "If the ball starts right and bends further right",
      doThis: "Narrow stance slightly and keep finish balanced to reduce rushed transition.",
    },
    {
      ifThis: "If contact feels glancing",
      doThis: "Reset tee height and focus only on centered strike for the next three balls before returning to full intent.",
    },
    {
      ifThis: "If two poor shots happen in a row",
      doThis: "Step out, take one rehearsal with your primary feel, then restart your full pre-shot routine.",
    },
  ],
};

const chapterEightExample = {
  title: "Chapter 8 - On-Course Game Plan",
  thought:
    "One swing thought only: Start it committed, not steered. Your job is a committed start line with your Chapter 4 feel.",
  plan:
    "On tight tee shots, bias target selection to a larger side of fairway and accept a small stock fade. Commitment and routine matter more than mechanical fixes mid-round.",
};

const chapterNineExample = {
  title: "Chapter 9 - Progress and Validation",
  markers: [
    "Fewer drives finishing in the far-right miss zone.",
    "Start line looks more predictable, especially when swinging faster.",
    "Strike pattern clusters tighter on the face over consecutive sessions.",
  ],
  timeline:
    "Expect early gains in start-line control within 2-3 range sessions. Shape control and trust under pressure should build over the following 3-5 rounds.",
};

const chapterTenExample = {
  title: "Chapter 10 - TrackMan Practice Plan",
  usage:
    "Use TrackMan once every 2-3 weeks to validate your pattern, not every session. Keep your normal range work feel-led and simple.",
  priorities: [
    "Face Angle and Face-to-Path: look for reduced right-bias at impact.",
    "Start Direction consistency: tighter launch window around your intended line.",
    "Strike and spin behavior: fewer outlier shots that balloon right.",
  ],
};

const chapterElevenExample = {
  title: "Chapter 11 - Practice Plan Based on Time Available",
  plans: [
    {
      heading: "15 minutes",
      detail: "8 calibration balls, 5 pattern balls, 2 pressure balls. Keep everything under control speed.",
    },
    {
      heading: "30 minutes",
      detail: "Complete Chapters 5 Phase 1 and 2, then finish with 5 committed fairway reps.",
    },
    {
      heading: "60+ minutes",
      detail: "Run all three phases, add face-spray strike check, and finish with a simulated on-course driver block.",
    },
  ],
};

const chapterTwelveExample = {
  title: "Chapter 12 - Coach's Summary",
  summary:
    "Your driver pattern is highly coachable. The base motion is functional, and your misses are consistent enough to fix with precision rather than guesswork. Focus on the single feel, keep strike centered, and follow the range structure. If you stay disciplined with this plan, you should see tighter start lines, reduced right curvature, and stronger confidence off the tee over the next few weeks.",
};

type ExampleReportCardProps = {
  showIntro?: boolean;
  fullExampleReport?: boolean;
};

function PageNumber({ page }: { page: number }) {
  return <p className="mt-6 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">Page {page} of {totalPages}</p>;
}

export default function ExampleReportCard({ showIntro = true, fullExampleReport = false }: ExampleReportCardProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [copiedPage, setCopiedPage] = useState<number | null>(null);

  const getChapterCopyText = (page: number) => {
    if (page === 1) {
      return [
        chapterOneExample.title,
        "How your current ball flight behaves under real-course pressure.",
        `Skill Level: ${chapterOneExample.playerProfile.skillLevel}`,
        `Miss Pattern: ${chapterOneExample.playerProfile.missPattern}`,
        `Start Direction: ${chapterOneExample.playerProfile.startDirection}`,
        `Curve: ${chapterOneExample.playerProfile.curve}`,
        `Typical Ball Flight: ${chapterOneExample.typicalBallFlight}`,
        `Club Used: ${chapterOneExample.clubUsed}`,
        `Golf Ball: ${chapterOneExample.golfBall}`,
        `Practice Availability: ${chapterOneExample.practiceAvailability}`,
        `Pattern Summary: ${chapterOneExample.patternSummary}`,
        `Skill-Level Insight: ${chapterOneExample.skillLevelInsight}`,
        `What You Are Experiencing: ${chapterOneExample.whatYouAreExperiencing}`,
      ].join("\n\n");
    }

    if (page === 2) {
      return [
        chapterTwoExample.title,
        `What Your Ball Flight Is Telling Us: ${chapterTwoExample.whatBallFlightIsTellingUs}`,
        `Clubface Control: ${chapterTwoExample.drivers.clubfaceControl}`,
        `Swing Direction (Path): ${chapterTwoExample.drivers.swingDirectionPath}`,
        `Transition & Timing: ${chapterTwoExample.drivers.transitionTiming}`,
        `What's Working in Your Swing: ${chapterTwoExample.whatIsWorking}`,
        `The Key Insight: ${chapterTwoExample.keyInsight}`,
      ].join("\n\n");
    }

    if (page === 3) {
      return [
        chapterThreeExample.title,
        chapterThreeExample.intro,
        ...chapterThreeExample.causes.map((cause) => `${cause.heading}: ${cause.detail}`),
        `Practical Takeaway: ${chapterThreeExample.takeaway}`,
      ].join("\n\n");
    }

    if (page === 4) {
      return [
        chapterFourExample.title,
        `Primary Feel: ${chapterFourExample.primaryFeel}`,
        `Single Checkpoint: ${chapterFourExample.checkpoint}`,
      ].join("\n\n");
    }

    if (page === 5) {
      return [
        chapterFiveExample.title,
        `${chapterFiveExample.phases[0].heading}: ${chapterFiveExample.phases[0].detail}`,
        `${chapterFiveExample.optionalTrainingAidSupport.title}: ${chapterFiveExample.optionalTrainingAidSupport.intro}`,
        ...chapterFiveExample.optionalTrainingAidSupport.aids.map((aid) => `- ${aid.text}${aid.url ? ` (${aid.url})` : ""}`),

        ...chapterFiveExample.phases.slice(1).map((phase) => `${phase.heading}: ${phase.detail}`),
      ].join("\n\n");
    }

    if (page === 6) {
      return [
        chapterSixExample.title,
        "Setup Adjustments:",
        ...chapterSixExample.setup.map((item) => `- ${item}`),
        `Strike Adjustment: ${chapterSixExample.strike}`,
      ].join("\n\n");
    }

    if (page === 7) {
      return [
        chapterSevenExample.title,
        ...chapterSevenExample.ladder.map((entry) => `${entry.ifThis} -> ${entry.doThis}`),
      ].join("\n\n");
    }

    if (page === 8) {
      return [
        chapterEightExample.title,
        `One Thought: ${chapterEightExample.thought}`,
        `On-Course Plan: ${chapterEightExample.plan}`,
      ].join("\n\n");
    }

    if (page === 9) {
      return [
        chapterNineExample.title,
        "Progress Markers:",
        ...chapterNineExample.markers.map((marker) => `- ${marker}`),
        `Expected Timeline: ${chapterNineExample.timeline}`,
      ].join("\n\n");
    }

    if (page === 10) {
      return [
        chapterTenExample.title,
        chapterTenExample.usage,
        "TrackMan Priorities:",
        ...chapterTenExample.priorities.map((priority) => `- ${priority}`),
      ].join("\n\n");
    }

    if (page === 11) {
      return [
        chapterElevenExample.title,
        ...chapterElevenExample.plans.map((plan) => `${plan.heading}: ${plan.detail}`),
      ].join("\n\n");
    }

    return [chapterTwelveExample.title, chapterTwelveExample.summary].join("\n\n");
  };

  const handleCopyChapter = async (page: number) => {
    try {
      await navigator.clipboard.writeText(getChapterCopyText(page));
      setCopiedPage(page);
      window.setTimeout(() => {
        setCopiedPage((prev) => (prev === page ? null : prev));
      }, 1400);
    } catch {
      setCopiedPage(null);
    }
  };

  const ChapterFooter = ({ page }: { page: number }) => {
    const isCopied = copiedPage === page;

    return (
      <div className="mt-6">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => handleCopyChapter(page)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
          >
            {isCopied ? "Copied" : "Copy chapter text"}
          </button>
        </div>
        <PageNumber page={page} />
      </div>
    );
  };

  const renderChapterPage = (page: number) => {
    if (page === 1) {
      return (
        <>
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

          <ChapterFooter page={1} />
        </>
      );
    }

    if (page === 2) {
      return (
        <>
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

            <ChapterFooter page={2} />
          </div>
        </>
      );
    }

    if (page === 3) {
      return (
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h4 className="text-2xl font-bold text-gray-900 md:text-3xl">{chapterThreeExample.title}</h4>

          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p>{chapterThreeExample.intro}</p>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {chapterThreeExample.causes.map((cause) => (
              <div key={cause.heading} className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-gray-800 md:text-base">
                <p className="font-semibold text-gray-900">{cause.heading}</p>
                <p className="mt-2">{cause.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border-l-4 border-green-600 bg-green-50 p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p className="font-semibold text-gray-900">Practical Takeaway</p>
            <p className="mt-2">{chapterThreeExample.takeaway}</p>
          </div>

          <ChapterFooter page={3} />
        </div>
      );
    }

    if (page === 4) {
      return (
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h4 className="text-2xl font-bold text-gray-900 md:text-3xl">{chapterFourExample.title}</h4>

          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p className="font-semibold text-gray-900">Primary Feel</p>
            <p className="mt-2">{chapterFourExample.primaryFeel}</p>
          </div>

          <div className="mt-4 rounded-xl border border-gray-200 bg-stone-50 p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p className="font-semibold text-gray-900">Single Checkpoint</p>
            <p className="mt-2">{chapterFourExample.checkpoint}</p>
          </div>

          <ChapterFooter page={4} />
        </div>
      );
    }

    if (page === 5) {
      return (
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h4 className="text-2xl font-bold text-gray-900 md:text-3xl">{chapterFiveExample.title}</h4>

          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p className="font-semibold text-gray-900">{chapterFiveExample.phases[0].heading}</p>
            <p className="mt-2">{chapterFiveExample.phases[0].detail}</p>
          </div>

          <div className="mt-3 rounded-xl border border-gray-200 bg-stone-50 p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p className="font-semibold text-gray-900">{chapterFiveExample.optionalTrainingAidSupport.title}</p>
            <p className="mt-2">{chapterFiveExample.optionalTrainingAidSupport.intro}</p>
            <ul className="mt-2 space-y-2">
              {chapterFiveExample.optionalTrainingAidSupport.aids.map((aid) => (
                <li key={aid.text}>
                  {aid.text}
                  {aid.url && (
                    <a
                      href={aid.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-green-700 underline hover:text-green-900"
                    >
                      Browse impact bags on Amazon
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 space-y-3">
            {chapterFiveExample.phases.slice(1).map((phase) => (
              <div key={phase.heading} className="rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
                <p className="font-semibold text-gray-900">{phase.heading}</p>
                <p className="mt-2">{phase.detail}</p>
              </div>
            ))}
          </div>

          <ChapterFooter page={5} />
        </div>
      );
    }

    if (page === 6) {
      return (
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h4 className="text-2xl font-bold text-gray-900 md:text-3xl">{chapterSixExample.title}</h4>

          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p className="font-semibold text-gray-900">Setup Adjustments</p>
            <ul className="mt-2 space-y-2">
              {chapterSixExample.setup.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-xl border border-gray-200 bg-stone-50 p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p className="font-semibold text-gray-900">Strike Adjustment</p>
            <p className="mt-2">{chapterSixExample.strike}</p>
          </div>

          <ChapterFooter page={6} />
        </div>
      );
    }

    if (page === 7) {
      return (
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h4 className="text-2xl font-bold text-gray-900 md:text-3xl">{chapterSevenExample.title}</h4>

          <div className="mt-4 space-y-3">
            {chapterSevenExample.ladder.map((entry) => (
              <div key={entry.ifThis} className="rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
                <p className="font-semibold text-gray-900">{entry.ifThis}</p>
                <p className="mt-2">{entry.doThis}</p>
              </div>
            ))}
          </div>

          <ChapterFooter page={7} />
        </div>
      );
    }

    if (page === 8) {
      return (
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h4 className="text-2xl font-bold text-gray-900 md:text-3xl">{chapterEightExample.title}</h4>

          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p className="font-semibold text-gray-900">One Thought</p>
            <p className="mt-2">{chapterEightExample.thought}</p>
          </div>

          <div className="mt-4 rounded-xl border border-gray-200 bg-stone-50 p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p className="font-semibold text-gray-900">On-Course Plan</p>
            <p className="mt-2">{chapterEightExample.plan}</p>
          </div>

          <ChapterFooter page={8} />
        </div>
      );
    }

    if (page === 9) {
      return (
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h4 className="text-2xl font-bold text-gray-900 md:text-3xl">{chapterNineExample.title}</h4>

          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p className="font-semibold text-gray-900">Progress Markers</p>
            <ul className="mt-2 space-y-2">
              {chapterNineExample.markers.map((marker) => (
                <li key={marker}>{marker}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-xl border border-gray-200 bg-stone-50 p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p className="font-semibold text-gray-900">Expected Timeline</p>
            <p className="mt-2">{chapterNineExample.timeline}</p>
          </div>

          <ChapterFooter page={9} />
        </div>
      );
    }

    if (page === 10) {
      return (
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h4 className="text-2xl font-bold text-gray-900 md:text-3xl">{chapterTenExample.title}</h4>

          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p>{chapterTenExample.usage}</p>
          </div>

          <div className="mt-4 rounded-xl border border-gray-200 bg-stone-50 p-4 text-sm leading-relaxed text-gray-800 md:text-base">
            <p className="font-semibold text-gray-900">TrackMan Priorities</p>
            <ul className="mt-2 space-y-2">
              {chapterTenExample.priorities.map((priority) => (
                <li key={priority}>{priority}</li>
              ))}
            </ul>
          </div>

          <ChapterFooter page={10} />
        </div>
      );
    }

    if (page === 11) {
      return (
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h4 className="text-2xl font-bold text-gray-900 md:text-3xl">{chapterElevenExample.title}</h4>

          <div className="mt-4 space-y-3">
            {chapterElevenExample.plans.map((plan) => (
              <div key={plan.heading} className="rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-800 md:text-base">
                <p className="font-semibold text-gray-900">{plan.heading}</p>
                <p className="mt-2">{plan.detail}</p>
              </div>
            ))}
          </div>

          <ChapterFooter page={11} />
        </div>
      );
    }

    return (
      <div className="mt-8 border-t border-gray-200 pt-6">
        <h4 className="text-2xl font-bold text-gray-900 md:text-3xl">{chapterTwelveExample.title}</h4>

        <div className="mt-4 rounded-xl border-l-4 border-green-600 bg-green-50 p-4 text-sm leading-relaxed text-gray-800 md:text-base">
          <p>{chapterTwelveExample.summary}</p>
        </div>

        <ChapterFooter page={12} />
      </div>
    );
  };

  if (fullExampleReport) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-7">
        {showIntro ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">What Your Personalised Plan Includes</p>
            <p className="mt-1 text-xs text-gray-500">Sample from a full personalised report</p>
          </>
        ) : null}

        {renderChapterPage(currentPage)}

        <div className="mt-6 border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Chapter {currentPage} of {totalPages}</p>

            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

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
