"use client";

import { useEffect, useMemo, useState } from "react";
import ExampleReportCard from "../components/ExampleReportCard";

type AssessmentData = {
  category: string;
  shotShape: string;
  frequency: string;
  strike: string;
  skillLevel: string;
};

type DriverDiagnosisBucket =
  | "PUSH_BLOCK"
  | "SLICE"
  | "PULL_HOOK"
  | "OVER_DRAW_HOOK"
  | "INCONSISTENT"
  | "STRIKE_ISSUE";

const openingQuestions = [
  "Go on then... what's been costing you shots lately?",
  "Right... what's been hurting your score recently?",
  "Be honest... what's not behaving at the minute?",
  "So... where's it going wrong just now?",
  "Alright... what part of your game's letting you down?",
  "Go on... what's been the problem lately?",
];

const feedbackPools = {
  general: ["Got it 👍", "Makes sense", "Right, I'm with you", "Seen that a lot"],
  shotPattern: ["Ahh... classic one", "Yep, see that loads", "That fits"],
  frequency: ["That's useful", "That tells me a lot", "Yeah, that's common"],
  strike: ["Interesting...", "That's helpful", "Yep, that ties in"],
  skillLevel: ["Perfect", "Got a good picture now", "That helps me pitch it right"],
  contextual: ["That lines up", "That matches what you said earlier"],
};

const step1Options = ["Driving", "Irons", "Short game", "Putting", "Bit of everything"];

const step2OptionsByCategory: Record<string, string[]> = {
  Driving: [
    "Starting right and staying there",
    "Starting right and going further right",
    "Starting left and going further left",
    "Starting right and coming back left",
    "Honestly... a mix",
  ],
  Irons: ["Pulling them left", "Pushing them right", "Heavy contact", "Thin and hot", "Honestly... a mix"],
  "Short game": ["Chunking chips", "Blading chips", "Distance control", "Rough lies", "Honestly... a mix"],
  Putting: ["Starting line", "Pace control", "Short putts", "Long lag putts", "Honestly... a mix"],
  "Bit of everything": ["Miss changes shot to shot", "Big right miss", "Big left miss", "Strike quality", "Honestly... a mix"],
};

const step3Options = ["Pretty much every shot", "Most of the time", "Just when I try to hit it hard", "Comes and goes"];
const step4Options = ["Solid but offline", "Weak / glancing", "Low and bullety", "High and spinny", "No idea 😅"];
const step5Options = ["New / figuring it out", "Can get it round", "Fairly consistent", "Proper player"];

const totalSteps = 5;

const initialData: AssessmentData = {
  category: "",
  shotShape: "",
  frequency: "",
  strike: "",
  skillLevel: "",
};

function getDriverDiagnosisBucket(data: AssessmentData): DriverDiagnosisBucket {
  const isWeakStrike = data.strike === "Weak / glancing";
  const isStrikeIssue =
    data.shotShape === "Honestly... a mix" && ["Weak / glancing", "Low and bullety", "High and spinny"].includes(data.strike);

  if (isStrikeIssue) return "STRIKE_ISSUE";
  if (data.shotShape === "Honestly... a mix" || data.frequency === "Comes and goes") return "INCONSISTENT";
  if (data.shotShape === "Starting right and staying there") return "PUSH_BLOCK";
  if (data.shotShape === "Starting right and going further right") return "SLICE";
  if (data.shotShape === "Starting left and going further left") return "PULL_HOOK";
  if (data.shotShape === "Starting right and coming back left") return "OVER_DRAW_HOOK";

  return isWeakStrike ? "STRIKE_ISSUE" : "INCONSISTENT";
}

function getFrequencyLine(bucket: DriverDiagnosisBucket, frequency: string) {
  if (frequency === "Most of the time") {
    if (bucket === "SLICE") {
      return "If it's happening most of the time, it's your current pattern rather than just a bad swing here or there.";
    }

    return "If it's happening most of the time, that's your stock pattern right now.";
  }

  if (frequency === "Comes and goes") {
    if (bucket === "INCONSISTENT") {
      return "The fact it comes and goes backs that up.";
    }

    return "The fact it comes and goes tells us there's a timing element in it as well.";
  }

  return null;
}

function buildDriverResponse(data: AssessmentData) {
  const bucket = getDriverDiagnosisBucket(data);
  const frequencyLine = getFrequencyLine(bucket, data.frequency);
  const weakStrikeLine = data.strike === "Weak / glancing" ? "That weak contact ties in with this pattern." : null;

  const sectionsByBucket: Record<DriverDiagnosisBucket, string[]> = {
    PUSH_BLOCK: [
      "Right - this one's pretty clear.",
      "Starting right and just staying there tells us the face is hanging open through impact.",
      "That's why it never really gets back to target - it just leaks out.",
      "Good news? This isn't a big swing rebuild.",
      "The non-obvious bit is that this often feels like a path problem to the golfer, when the bigger issue is the face simply never squaring up soon enough.",
      "But this is where most golfers go wrong trying to fix it - they try to aim or steer it instead of changing why the face stays open.",
      "The fix isn't what most people think, and doing the obvious thing here often makes it worse.",
      "👉 One thing to try:",
      "Make one swing feeling like the clubhead passes your hands a fraction earlier through impact.",
      "---",
      "👉 What we'd normally do next:",
      "Before building your plan properly, we'd need a bit more detail from you: how much time you can realistically practice, what driver you use, what ball you play, and a short paragraph on what you actually see in your flight.",
      "That's what unlocks the personalisation.",
      "We'd show you the exact feels that match this pattern, not generic release advice.",
      "We'd give you specific drills to train it properly, then show you what to look for in your ball flight so you know it's working.",
      "We'd map it into a simple practice plan so it actually sticks on the course.",
      "Full personalised plan: £3.99.",
      "---",
      "Unlock your full plan →",
    ],
    SLICE: [
      "Ahh... this is a really common one.",
      "Starting right and then peeling further right tells us a lot - the face is open, and your path is working left of it.",
      "That's what creates that wipey spin.",
      "Good news? This isn't a full rebuild.",
      "The non-obvious bit is that most slicers aren't just leaving the face open - they're also moving the swing direction the wrong way while trying to save it.",
      "But this is also where most golfers go wrong trying to fix it - they focus on one piece and ignore the other.",
      "This only improves properly when the face and path are matched to your swing, not guessed at on the range.",
      "👉 One thing to try:",
      "Make one swing feeling like the ball starts a little more to the right before you worry about curve.",
      "---",
      "👉 What we'd normally do next:",
      "Before building your plan properly, we'd need a bit more detail from you: how much time you can realistically practice, what driver you use, what ball you play, and a short paragraph on what you actually see in your flight.",
      "That's what unlocks the personalisation.",
      "We'd break this into face control and path, then give you the exact feels that fit your pattern.",
      "We'd show you which drills matter, what ball flight changes to expect, and what launch monitor numbers tell you it's actually improving.",
      "We'd turn that into a structured practice plan so you're not just trying random fixes.",
      "Full personalised plan: £3.99.",
      "---",
      "Unlock your full plan →",
    ],
    PULL_HOOK: [
      "Right - that left start is the giveaway here.",
      "If it's starting left and not coming back, the face is likely closing too quickly relative to your path.",
      "That's why it feels like it goes left early and stays there.",
      "Good news? This isn't a full rebuild.",
      "The non-obvious bit is that this pattern often starts before impact, not after it - the face is already too shut by the time the ball gets in the way.",
      "But this is where a lot of golfers make it worse - they try to hold on or guide it, and that usually creates a different miss.",
      "The real fix depends on why that face is shutting down so early in your swing.",
      "👉 One thing to try:",
      "Hit one feeling like the logo on your glove stays looking at the target for a fraction longer through impact.",
      "---",
      "👉 What we'd normally do next:",
      "Before building your plan properly, we'd need a bit more detail from you: how much time you can realistically practice, what driver you use, what ball you play, and a short paragraph on what you actually see in your flight.",
      "That's what unlocks the personalisation.",
      "We'd show you the feels that calm this pattern down without taking speed away.",
      "We'd give you the right drills for your closure pattern and show you what ball flight to look for when it's starting to neutralise.",
      "We'd build it into a simple practice structure so it holds up when you add pressure.",
      "Full personalised plan: £3.99.",
      "---",
      "Show me how to fix this →",
    ],
    OVER_DRAW_HOOK: [
      "That shape tells us a lot.",
      "Starting right then turning over hard left means the face is closing quickly relative to your path.",
      "It often feels like it's fine... then suddenly dives.",
      "Good news - this is very controllable.",
      "The non-obvious bit is that this shot usually feels powerful, which is why golfers keep chasing it even though the closure rate is too aggressive.",
      "But this is exactly the kind of miss where the obvious fix can backfire if it's matched to the wrong cause.",
      "This only settles down properly when you know whether it's the release, the face, or the pattern before impact driving it.",
      "👉 One thing to try:",
      "Make one swing feeling like the finish stays a touch more open to the target instead of rolling over quickly.",
      "---",
      "👉 What we'd normally do next:",
      "Before building your plan properly, we'd need a bit more detail from you: how much time you can realistically practice, what driver you use, what ball you play, and a short paragraph on what you actually see in your flight.",
      "That's what unlocks the personalisation.",
      "We'd pinpoint what is making it tip over too hard, then give you the exact feels that suit your swing rather than generic anti-hook advice.",
      "We'd pair that with the right drills and show you the ball flight checkpoints that tell you the curve is coming under control.",
      "We'd map it into a practice plan so you can keep the good shape without the sudden left miss.",
      "Full personalised plan: £3.99.",
      "---",
      "Unlock your full plan →",
    ],
    INCONSISTENT: [
      "That actually tells me more than you think.",
      "When the miss changes, it usually isn't one big fault - it's timing.",
      "The face and path relationship is just varying swing to swing.",
      "That's why one feels great... then the next one doesn't.",
      "Good news? This doesn't usually mean everything is broken.",
      "The non-obvious bit is that inconsistency is often one repeated pattern showing up at different timings, not five separate faults.",
      "But this is where most golfers go wrong - they keep changing grip, stance, takeaway, then end up chasing five different problems at once.",
      "The fix isn't obvious because inconsistency only improves when you identify what part is actually changing swing to swing.",
      "👉 One thing to try:",
      "On your next few swings, make your backswing and transition feel 10% slower and see if the start line tightens up.",
      "---",
      "👉 What we'd normally do next:",
      "Before building your plan properly, we'd need a bit more detail from you: how much time you can realistically practice, what driver you use, what ball you play, and a short paragraph on what you actually see in your flight.",
      "That's what unlocks the personalisation.",
      "We'd work out whether this is mainly face control, path control, strike, or transition timing.",
      "Then we'd give you the feels that match your pattern, the right drills to stabilise it, and the ball flight signs that prove it's improving.",
      "We'd build all of that into a simple practice plan so it becomes repeatable on the course, not just on the range.",
      "Full personalised plan: £3.99.",
      "---",
      "Show me how to fix this →",
    ],
    STRIKE_ISSUE: [
      "Interesting - this sounds more like a strike issue than direction.",
      "When contact isn't centred, the ball flight becomes unpredictable - even if the swing itself isn't far off.",
      "That's why you're seeing inconsistent results.",
      "Good news? This doesn't always mean the swing is miles away.",
      "The non-obvious bit is that poor strike can completely disguise the real start direction, which is why so many golfers misdiagnose this one.",
      "But this is where most golfers get stuck - they keep trying to fix direction without realising strike is the thing scrambling the flight.",
      "Doing the obvious thing here often makes it worse, because strike only improves when the solution matches your delivery pattern.",
      "👉 One thing to try:",
      "Make one swing at 80% speed and pay attention to whether the strike instantly feels more centred.",
      "---",
      "👉 What we'd normally do next:",
      "Before building your plan properly, we'd need a bit more detail from you: how much time you can realistically practice, what driver you use, what ball you play, and a short paragraph on what you actually see in your flight.",
      "That's what unlocks the personalisation.",
      "We'd map your strike pattern first, then give you the exact feels that match why contact is moving around.",
      "We'd pair that with specific drills and show you what changes in flight and strike location tell you it's working.",
      "We'd put it into a simple practice plan so centre contact becomes reliable instead of occasional.",
      "Full personalised plan: £3.99.",
      "---",
      "Unlock your full plan →",
    ],
  };

  const sections = [...sectionsByBucket[bucket]];

  if (frequencyLine) {
    const insertAt = bucket === "STRIKE_ISSUE" ? 3 : 4;
    sections.splice(insertAt, 0, frequencyLine);
  }

  if (weakStrikeLine) {
    const teaserIndex = sections.indexOf("👉 What we'd normally do next:");
    const insertAt = teaserIndex >= 0 ? teaserIndex : 3;
    sections.splice(insertAt, 0, weakStrikeLine);
  }

  return sections;
}

function randomFrom(pool: string[]) {
  return pool[Math.floor(Math.random() * pool.length)];
}

function getAcknowledgement(step: number, value: string, data: AssessmentData) {
  if (step === 1) {
    if (value === "Driving") return "Good, driver first.";
    if (value === "Irons") return "Nice, irons it is.";
    if (value === "Short game") return "Perfect, short game.";
    if (value === "Putting") return "Great, putting first.";
    if (value === "Bit of everything") return "Fair, we'll simplify it.";
  }

  if (step === 2) {
    if (value.includes("right")) return "Yep, right miss noted.";
    if (value.includes("left")) return "Got it, left trend.";
    if (value.includes("mix")) return "That lines up.";
    return randomFrom(feedbackPools.shotPattern);
  }

  if (step === 3) {
    if (value === "Pretty much every shot") return "Okay, very consistent.";
    if (value === "Most of the time") return "Right, mostly there.";
    if (value === "Just when I try to hit it hard") return "Got it, pressure swing.";
    if (value === "Comes and goes") return "Makes sense, intermittent.";
  }

  if (step === 4) {
    if (value === "Solid but offline") return "Good clue there.";
    if (value === "Weak / glancing") return "Yep, that fits.";
    if (value === "Low and bullety") return "Nice detail, useful.";
    if (value === "High and spinny") return "Got it, spinny flight.";
    if (value === "No idea 😅") return "No worries, common.";
  }

  if (step === 5) {
    if (value === "New / figuring it out") return "Perfect, we'll keep it simple.";
    if (value === "Can get it round") return "Nice, solid base.";
    if (value === "Fairly consistent") return "Great, easy to tune.";
    if (value === "Proper player") return "Love it, let's sharpen.";
  }

  // Occasionally reference prior answers to keep the flow conversational.
  if (step > 1 && Math.random() < 0.28 && data.category) {
    return randomFrom(feedbackPools.contextual);
  }

  if (step === 2) return randomFrom(feedbackPools.shotPattern);
  if (step === 3) return randomFrom(feedbackPools.frequency);
  if (step === 4) return randomFrom(feedbackPools.strike);
  if (step === 5) return randomFrom(feedbackPools.skillLevel);

  return randomFrom(feedbackPools.general);
}

export default function AssessmentPage() {
  const [step, setStep] = useState(1);
  const [viewMode, setViewMode] = useState<"question" | "ack">("question");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [acknowledgement, setAcknowledgement] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>(initialData);

  const [openingPrompt, setOpeningPrompt] = useState(openingQuestions[0]);

  useEffect(() => {
    setOpeningPrompt(randomFrom(openingQuestions));
  }, []);

  const resultSections = useMemo(() => {
    if (!isComplete) return [];
    if (assessmentData.category !== "Driving") {
      return [
        "Decent. That gives me what I need for a first pass.",
        "The full results engine is built for driving first.",
        "If you want, next step is building the same level of feedback for irons, short game, and putting.",
      ];
    }

    return buildDriverResponse(assessmentData).filter(
      (line) => line !== "Unlock your full plan →" && line !== "Show me how to fix this →"
    );
  }, [isComplete, assessmentData]);

  const showDriverPreview = isComplete && assessmentData.category === "Driving";

  const stepConfig = useMemo(() => {
    if (step === 1) {
      return {
        key: "category" as const,
        question: openingPrompt,
        options: step1Options,
      };
    }

    if (step === 2) {
      return {
        key: "shotShape" as const,
        question: "Alright... what's the typical one doing?",
        options: step2OptionsByCategory[assessmentData.category] || step2OptionsByCategory["Bit of everything"],
      };
    }

    if (step === 3) {
      return {
        key: "frequency" as const,
        question: "How often are you seeing that?",
        options: step3Options,
      };
    }

    if (step === 4) {
      return {
        key: "strike" as const,
        question: "How does it feel off the face?",
        options: step4Options,
      };
    }

    return {
      key: "skillLevel" as const,
      question: "Level with me... where's your game at?",
      options: step5Options,
    };
  }, [step, openingPrompt, assessmentData.category]);

  const handleSelect = (value: string) => {
    if (selectedOption || viewMode === "ack") return;

    const ack = getAcknowledgement(step, value, assessmentData);
    const transitionDelay = 1000 + Math.floor(Math.random() * 301);

    setAssessmentData((prev) => ({ ...prev, [stepConfig.key]: value }));
    setSelectedOption(value);
    setAcknowledgement(ack);
    setViewMode("ack");

    window.setTimeout(() => {
      setAcknowledgement("");

      if (step < totalSteps) {
        setStep((prev) => prev + 1);
      } else {
        // Trigger result generation phase.
        setIsComplete(true);
      }

      setViewMode("question");
      setSelectedOption(null);
    }, transitionDelay);
  };

  if (isComplete) {
    return (
      <main className="min-h-screen bg-stone-50 px-5 py-8 md:py-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <div className="space-y-4 text-left text-sm leading-relaxed text-gray-800 md:text-base">
            {resultSections.map((section, index) =>
              section === "---" ? (
                <div key={`divider-${index}`} className="border-t border-gray-200" />
              ) : (
                <p
                  key={`${section}-${index}`}
                  className={
                    section === "👉 What we'd normally do next:" || section === "👉 One thing to try:"
                      ? "font-semibold text-gray-900"
                      : section === "Full personalised plan: £3.99."
                          ? "font-medium text-gray-900"
                          : undefined
                  }
                >
                  {section}
                </p>
              )
            )}
          </div>

          {showDriverPreview ? <div className="mt-8"><ExampleReportCard /></div> : null}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-5 py-8">
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <div className="relative min-h-[380px] overflow-hidden md:min-h-[420px]">
          <div
            className={`absolute inset-0 transition-all duration-300 ${
              viewMode === "question" ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0 pointer-events-none"
            }`}
          >
            <h1 className="mb-5 text-2xl font-semibold leading-tight text-gray-900 md:text-3xl">{stepConfig.question}</h1>

            <div className="space-y-3">
              {stepConfig.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  disabled={Boolean(selectedOption)}
                  className={`w-full rounded-2xl border px-4 py-4 text-left text-base font-medium text-gray-900 transition ${
                    selectedOption === option
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 bg-white hover:border-green-500 hover:bg-green-50"
                  } ${selectedOption ? "cursor-default" : "cursor-pointer"}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              viewMode === "ack" ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0 pointer-events-none"
            }`}
          >
            <div className="text-center">
              {selectedOption ? <p className="text-sm text-gray-500">{selectedOption}</p> : null}
              <p className="mt-2 text-2xl font-semibold text-green-600 md:text-3xl">{acknowledgement}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-4">
          <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-green-500 transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
          <p className="text-center text-xs text-gray-500">
            Step {step} of {totalSteps}
          </p>
        </div>
      </div>
    </main>
  );
}
