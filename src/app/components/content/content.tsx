import React, { FC } from "react";
import Image from "next/image";
import { Article } from "./contentTypes";

const Content: FC<Article> = ({
  featuredImage,
  author,
  title,
  subtitle,
  body,
  conclusion,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col justify-center px-[5rem]">
          <p className="text-md text-brand-700 font-semibold mb-4">
            20 Jan 2024 • 10 min read
          </p>
          <p className="display-lg font-semibold mb-3">{title}</p>
          <p className="text-xl font-normal text-tertiary w-[480px] mb-12">
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
      <div className={`flex flex-col w-[720px] mx-auto py-24`}>
        {body.map((element, index) => {
          switch (element.type) {
            case "p":
              return (
                <p
                  key={index}
                  className="text-xl font-normal text-tertiary mb-5"
                >
                  {element.content}
                </p>
              );
            case "divider":
              return (
                <div key={index} className="border-b border-secondary my-8" />
              );
            case "h2":
              return (
                <h2
                  key={index}
                  className="display-sm font-semibold mb-5 text-primary"
                >
                  {element.content}
                </h2>
              );
            case "img":
              return (
                <>
                  <Image
                    key={index}
                    width={500}
                    height={500}
                    src={element.url || ""}
                    alt={element.caption || ""}
                    className="w-full h-auto mb-5 rounded-xl"
                  />
                  <div className="text-sm font-normal text-tertiary mb-[3rem]">
                    {element.caption}
                  </div>
                </>
              );
            case "quote":
              return (
                <>
                  <blockquote
                    key={index}
                    className="display-xs italic font-bold mb-4"
                  >
                    “{element.content}”
                  </blockquote>
                  <p className="text-md font-normal mb-[3rem]">
                    — {element.author}
                  </p>
                </>
              );
            case "h3":
              return (
                <h3 key={index} className="text-2xl font-bold mb-5">
                  {element.content}
                </h3>
              );
            default:
              return null;
          }
        })}
        <div className="flex flex-col rounded-2xl bg-secondary p-8 mt-[3rem]">
          <div className="display-sm font-semibold text-primary mb-5 ">
            Conclusion
          </div>
          <div className="text-lg font-normal text-tertiary prose">
            {conclusion}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
