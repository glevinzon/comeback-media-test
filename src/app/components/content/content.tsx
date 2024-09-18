"use client";

import React, { FC, useEffect, useRef } from "react";
import Image from "next/image";
import { Article } from "./contentTypes";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import useDistance from "@/app/useDistance";

const Content: FC<
  Article & {
    articleIndex: number;
    loadNextArticleCb: (articleIndex: number) => void;
    setReadProgressCb: (value: number) => void;
  }
> = ({
  featuredImage,
  author,
  title,
  subtitle,
  body,
  conclusion,
  articleIndex,
  loadNextArticleCb,
  setReadProgressCb,
}) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      loadNextArticleCb(articleIndex + 1);
    }
  }, [entry, loadNextArticleCb, articleIndex]);

  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  const { distance, startPosition, endPosition } = useDistance(
    div1Ref,
    div2Ref
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (distance && scrollTop >= startPosition && scrollTop <= endPosition) {
        const scrollPosition = Math.floor(
          ((scrollTop - startPosition) / distance) * 100
        );
        setReadProgressCb(scrollPosition);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [distance, startPosition, endPosition, setReadProgressCb]);

  return (
    <div className="flex flex-col" ref={div1Ref}>
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="flex flex-1 flex-col justify-center pl-4 sm:pl-28 pt-16 sm:pt-none">
          <p className="text-sm sm:text-md text-brand-700 font-semibold mb-4">
            20 Jan 2024 • 10 min read
          </p>
          <p className="display-md sm:display-lg font-semibold mb-3">{title}</p>
          <p className="text-lg sm:text-xl font-normal text-tertiary w-full sm:w-[480px] mb-12">
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
      <div
        className={`flex flex-col w-full sm:w-[720px] mx-auto py-24 px-4 sm:px-none`}
      >
        {body.map((element, index) => {
          switch (element.type) {
            case "p":
              return (
                <p
                  key={index}
                  className="text-md sm:text-xl font-normal text-tertiary mb-5"
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
                  className="display-xs sm:display-sm font-semibold mb-5 text-primary"
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
                    className="text-xl sm:display-xs italic font-bold mb-4"
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
                <h3 key={index} className="text-xl sm:text-2xl font-bold mb-5">
                  {element.content}
                </h3>
              );
            default:
              return null;
          }
        })}
        <div className="flex flex-col rounded-2xl bg-secondary p-8 mt-[3rem]">
          <div className="display-xs sm:display-sm font-semibold text-primary mb-5 ">
            Conclusion
          </div>
          <div className="text-lg font-normal text-tertiary prose">
            {conclusion}
          </div>
          <div ref={ref} />
          <div ref={div2Ref} />
        </div>
      </div>
    </div>
  );
};

export default Content;
