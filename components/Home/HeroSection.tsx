import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="container flex justify-between items-start pt-10">
      <div className="w-1/2 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="2xl:text-5xl text-3xl">
            Индивидуальное изготовление из натурального камня
          </h2>
          <p className="text-lg font-normal">
            Узнайте, как наши мастера могут создать уникальное изделие из
            натурального камня с учетом ваших желаний и потребностей.
          </p>
          <p className="text-base">
            Заполните форму с вашими пожеланиями, и мы обязательно свяжемся с
            вами!
          </p>
        </div>
        <form className="p-4 flex flex-col gap-4 bg-slate-200">
          <input className="px-2 py-4" type="text" placeholder="Ваше имя" />
          <input className="px-2 py-4" type="tel" placeholder="Ваш телефон" />
          <textarea
            rows={3}
            className="min-h-[120px] max-h-[300px]"
            placeholder="Ваши пожелания"
          />
          <button className="border-1 bg-[#7E7E7E] p-2 max-w-max text-white justify-start flex" type="submit">ОСТАВИТЬ ЗАЯВКУ</button>
        </form>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="container aspect-square relative">
          <Image fill src="https://via.placeholder.com/540x540/" alt="" />
        </div>
      </div>
    </section>
  );
}
