import { cn } from "@/cn";
import Image from "next/image";

interface LayoutProps {
  isReversed?: boolean;
    images?: string[] | string;
    content?: string
}

export default function LayoutCard({ isReversed, images,content }: LayoutProps) {
  return (
    <article>
      <div
        className={cn("flex justify-between items-start gap-10", {
          "flex-row-reverse": isReversed,
          "items-center": Array.isArray(images) === false,
        })}>
        <p className="w-1/2">
         {content}
        </p>
        {Array.isArray(images) ? (
          <div className="grid grid-cols-3 w-1/2 gap-2">
            {images?.map((img, index) => (
              <div className="w-full h-[270px] relative" key={index}>
                <Image fill src={img} alt="asd" />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-1/2 aspect-video relative ">
            <Image fill src="https://via.placeholder.com/470x320/" alt="solo" />
          </div>
        )}
      </div>
    </article>
  );
}
