import { cn } from "@/cn";
import Image from "next/image";

interface LayoutProps {
  isReversed?: boolean;
  images?: string[] | string;
}

export default function LayoutCard({ isReversed, images }: LayoutProps) {
  return (
    <article>
      <div
        className={cn("flex justify-between items-start gap-10", {
          "flex-row-reverse": isReversed,
          "items-center": Array.isArray(images) === false,
        })}>
        <p className="w-1/2">
          Технологии обработки и укладки натурального камня, применяемые нашими
          специалистами, продлевают срок службы, износостойкость и декоративные
          качества материала. Например, каменный подоконник будет выглядеть
          добротно и одновременно эстетично, если его правильно изготовить и
          смонтировать. Природные материалы имеют огромную историю применения и
          пользуются популярностью. Пример - натуральный фасадный камень. По
          своим качествам он во многом превосходит даже самые дорогие элитные
          современные материалы.{" "}
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
