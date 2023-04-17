"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <>
      <Image
        src="/images/placeholder.png"
        alt="Avatar"
        width={30}
        height={30}
        className="round-full"
      />
    </>
  );
};

export default Avatar;
