import Image from "next/image";

export const AppIcon = () => {
  return (
    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow flex items-center justify-center bg-white">
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
