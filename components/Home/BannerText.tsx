
const bannerValue = [
    {
        number: "01",
        title: "Динамическое ценообразование",
        desc: "Чем больше заказ, тем выгоднее цена"
    },
    {
        number: "02",
        title: "Гарантия качества",
        desc: "Вернем деньги, если вы получите хотя бы одно бракованное изделие из партии"
    },
    {
        number: "03",
        title: "Решение любых задач",
        desc: "Полный цикл работ (от добычи камня до укладки изделий из него) и самый большой каталог товаров"
    },
    {
        number: "04",
        title: "Бесплатная экспресс-доставка",
        desc: "Привезем заказ быстрее конкурентов и бесплатно в Москву и область"
    },

]


export default function BannerText() {
    return (
        <article className=" bg-[#D9D9D9]">
            <div className="container grid grid-cols-4 gap-10 py-8">
                {
                    bannerValue.map((el, index) => (
                        <div key={index} className="w-full flex flex-col gap-3 items-center justify-start ">
                            <h4 className="text-center font-bold text-5xl">{el.number}</h4>
                            <h5 className="text-center font-bold">{el.title}</h5>
                            <p className="text-center">{el.desc}</p>
                    </div>
                        ))
                }
            </div>
    </article>
        )
}