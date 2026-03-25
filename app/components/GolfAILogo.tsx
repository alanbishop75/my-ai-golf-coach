import Image from "next/image";

export default function GolfAILogo() {
  return (
    <div className="w-[180px] max-w-[92vw] text-center md:w-[380px]">
      <Image
        src="/MyAIGolfCoachLogo.PNG"
        alt="MyAIGolfCoach Logo"
        width={380}
        height={84}
        priority
        className="h-auto w-full object-contain"
      />
      <p className="-mt-1 text-xs text-gray-800 md:text-sm whitespace-nowrap">
        Targeted personalised Golf Coaching.
      </p>
    </div>
  );
}
