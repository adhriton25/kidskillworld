import Image from "next/image";

export const AppIcon = () => {
  return (
    <div className="w-14 h-14 rounded-full overflow-hidden shadow flex items-center justify-center bg-white">
      <Image
        src="/kidskillworld-Icon.png"
        alt="KidSkillWorld Icon"
        width={60}
        height={60}
        priority
      />
    </div>
  );
};
