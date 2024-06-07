"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaHeart, FaPlay } from "react-icons/fa";

interface Props {
  //   image: string;
  name: string;
  href: string;
}

export function ListItem({ name, href }: Props) {
  const router = useRouter();
  const onClick = () => {
    // add authetication before push
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className="relative group flex items-center
  rounded-md overflow-hidden gap-x-4 bg-neutral-100/10
  hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px] bg-gradient-to-t from-gray-400 to-indigo-500 flex items-center justify-center">
        {/* <Image className="object-cover"
        fill
        src={image}
        alt="si"/> */}
        <FaHeart size={24} />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div
        className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4
                        drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110"
      >
        <FaPlay className="text-black" />
      </div>
    </button>
  );
}
