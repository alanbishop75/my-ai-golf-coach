"use client";

import { useMemo, useState } from "react";

type AssessmentData = {
  category: string;
  shotShape: string;
  frequency: string;
  strike: string;
  skillLevel: string;
};

const openingQuestions = [
  "Go on then... what's been costing you shots lately?",
  "Right... what's been hurting your score recently?",
  "Be honest... what's not behaving at the minute?",
  "So... where's it going wrong just now?",
  "Alright... what part of your game's letting you down?",
  "Go on... what's been the problem lately?",
];

const acknowledgementLines = ["Got it 👍", "Yep, see that a lot", "That helps", "Perfect, thanks", "Nice, that's useful"];

const step1Options = ["Driving", "Irons", "Short game", "Putting", "Bit of everything"];

const step2OptionsByCategory: Record<string, string[]> = {
  Driving: [
    "Starting right and staying there",
    "Starting right and going further right",
    "Starting left and going further left",
    "Starting left but coming back",
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

export default function AssessmentPage() {
  const [step, setStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [acknowledgement, setAcknowledgement] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>(initialData);

  const openingPrompt = useMemo(() => {
    const index = Math.floor(Math.random() * openingQuestions.length);
    return openingQuestions[index];
  }, []);

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
    const ack = acknowledgementLines[Math.floor(Math.random() * acknowledgementLines.length)];

    setAssessmentData((prev) => ({ ...prev, [stepConfig.key]: value }));
    setAcknowledgement(ack);
    setIsTransitioning(true);

    window.setTimeout(() => {
      setAcknowledgement("");

      if (step < totalSteps) {
        setStep((prev) => prev + 1);
      } else {
        // Trigger result generation phase.
        setIsComplete(true);
      }

      setIsTransitioning(false);
    }, 450);
  };

  if (isComplete) {
    return (
      <main className="min-h-screen bg-white px-5 py-8">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm md:p-8">
          <p className="mb-2 text-xl font-semibold text-gray-900">Nice. That gives me what I need.</p>
          <p className="text-sm text-gray-700 md:text-base">Building your coaching plan now...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-5 py-8">
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <div
          className={`transition-all duration-300 ${
            isTransitioning ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <h1 className="mb-5 text-2xl font-semibold leading-tight text-gray-900 md:text-3xl">{stepConfig.question}</h1>

          <div className="space-y-3">
            {stepConfig.options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-left text-base font-medium text-gray-900 transition hover:border-green-500 hover:bg-green-50"
              >
                {option}
              </button>
            ))}
          </div>

          <p className="mt-4 min-h-6 text-sm font-medium text-green-600">{acknowledgement}</p>
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
