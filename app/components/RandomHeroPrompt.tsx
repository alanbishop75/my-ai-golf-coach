"use client";

import { useState } from "react";

const prompts = [
  "Go on then... what's been costing you shots lately?",
  "Right... what's been hurting your score recently?",
  "Be honest... what's not behaving at the minute?",
  "So... where's it going wrong just now?",
  "Alright... what part of your game's letting you down?",
  "Go on... what's been the problem lately?",
];

export default function RandomHeroPrompt() {
  const [prompt] = useState(() => {
    const index = Math.floor(Math.random() * prompts.length);
    return prompts[index];
  });

  return <>{prompt}</>;
}
