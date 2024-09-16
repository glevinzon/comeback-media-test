import React, { FC } from "react";
import Image from "next/image";
import { Article } from "./contentTypes";

const Content: FC<Article> = ({ featuredImage }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-1 content-center justify-center text-center">
        Left side
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
  );
};

export default Content;
