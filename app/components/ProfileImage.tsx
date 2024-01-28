import Image from "next/image";

export default function ProfileImage() {
  return (
    <button
      type="button"
      className="flex items-center focus:outline-none"
      aria-label="toggle profile dropdown"
    >
      <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
        <Image
          src="https://res.cloudinary.com/weknow-creators/image/upload/v1705844688/1676915958875_v6vp9q.jpg"
          className="object-cover w-full h-full"
          alt="avatar"
          height={200}
          width={200}
        />
      </div>
      <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
        Khatab wedaa
      </h3>
    </button>
  );
}
