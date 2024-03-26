import Image from "next/image";
import Link from "next/link";

export default function Posts() {
    return (
      <article>
         <div className="py-10">
          <h3 className="text-3xl flex justify-center items-center">
           СВЕЖИЕ ПУБЛИКАЦИИ
          </h3>
        </div>
    <div className="container grid grid-cols-3 gap-10">
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="w-full aspect-square flex flex-col gap-3">
          <div className="relative w-full aspect-square">
            <Image fill src="https://via.placeholder.com/430x320/" alt="sad" />
          </div>
          <h6 className="text-center">Название</h6>
          <p className="text-center">..........</p>
          <Link
            className="text-center mx-auto flex justify-center p-2 items-center max-w-max border-2 border-gray-400"
            href="#">
            Читать далее
          </Link>
        </div>
      ))}
    </div>
      </article>
  );
}
