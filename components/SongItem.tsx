"use client";

import Image from "next/image";
import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import PlayButton from "./PlayButton";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  return (
    <div
      onClick={() => onClick(data.id)}
      className="
                relative
                group
                flex
                flex-col
                items-center
                justify-start
                rounded-md
                overflow-hidden
                cursor-pointer
                hover:bg-neutral-400/10
                transition
                p-3
                w-full
            "
    >
      <div
        className="
                relative
                aspect-square
                w-full
                rounded-md
                overflow-hidden
                "
      >
        <Image
          className="object-cover w-full h-full"
          src={imagePath || "/images/placeholder.png"}
          alt="Image"
          width={500}
          height={500}

          
        />
        <div
        className="
                absolute
                bottom-2
                right-2
                "
      >
        <PlayButton />
      </div>
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold w-full line-clamp-2 overflow-hidden">
          {data.title}
        </p>

        <p className="text-neutral-400 text-sm w-full line-clamp-2 overflow-hidden">
          {data.author}
        </p>
      </div>
      
    </div>
  );
};

export default SongItem;
