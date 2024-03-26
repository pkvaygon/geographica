export default function ContactUsForm() {
  return (
    <article className="container bg-slate-200 mt-10 py-10">
      <div className="pb-10">
        <h3 className="text-3xl flex justify-center items-center">
          ОСТАЛИСЬ ВОПРОСЫ? НАПИШИТЕ НАМ!
        </h3>
      </div>
      <form className="p-4 w-4/5 flex flex-col gap-4 ">
        <input className="px-2 py-4" type="text" placeholder="Ваше имя" />
        <input className="px-2 py-4" type="tel" placeholder="Ваш телефон" />
        <textarea
          rows={3}
          className="min-h-[120px] max-h-[300px]"
          placeholder="Ваши пожелания"
        />
        <button
          className="border-1 bg-[#7E7E7E] p-2 max-w-max text-white justify-start flex"
          type="submit">
          ОСТАВИТЬ ЗАЯВКУ
        </button>
      </form>
    </article>
  );
}
