import React, { FC } from "react";
import Image from "next/image";
import { Article } from "./contentTypes";

const Content: FC<Article> = ({ featuredImage, author, title, subtitle }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col gap-4 justify-center px-[64px]">
          <p className="text-md text-brand-700 font-semibold">
            20 Jan 2024 • 10 min read
          </p>
          <p className="display-lg font-semibold">{title}</p>
          <p className="text-xl font-normal text-tertiary w-[480px]">
            {subtitle}
          </p>
          <div className="flex gap-4">
            <Image
              src={author.avatar.url}
              width={56}
              height={56}
              alt=" "
              className="rounded-full"
            />
            <div className="flex flex-col justify-center">
              <div className="text-lg font-semibold">{author.name}</div>
              <div className="text-md font-normal text-tertiary">
                {author.role}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          {featuredImage && (
            <Image
              src={featuredImage.url}
              alt=" "
              width={1280}
              height={720}
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </div>
      <div className="flex">body</div>
    </div>
  );
};

export default Content;
