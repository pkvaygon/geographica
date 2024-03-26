import BannerText from "@/components/Home/BannerText";
import LayoutCard from "@/components/Home/LayoutCard";
import Posts from "@/components/Home/Posts";
import Image from "next/image";
import Link from "next/link";

const threeImages = [
  "https://via.placeholder.com/220x270/",
  "https://via.placeholder.com/220x270/",
  "https://via.placeholder.com/220x270/",
];
const content = [
  `Технологии обработки и укладки натурального камня, применяемые нашими специалистами, продлевают срок службы, износостойкость и декоративные качества материала. Например, каменный подоконник будет выглядеть добротно и одновременно эстетично, если его правильно изготовить и смонтировать. Природные материалы имеют огромную историю применения и пользуются популярностью. Пример - натуральный фасадный камень. По своим качествам он во многом превосходит даже самые дорогие элитные современные материалы. `,
  `Выбирая натуральный камень для фасада, вы не рискуете получить безликий и стандартный результат. Ваш дом, дача, офис будет выглядеть презентабельно и оригинально. Секрет уникальности натуральных камней - в неповторимости природного рисунка и цветовых оттенков. Покупая камень для облицовки фасада, можно обеспечить надежную защиту здания от негативного воздействия погодных факторов, механических и химических повреждений, предотвратить разрушение основного строительного материала.`,
  `Также вы можете заказать камень для отделки внутри помещений. Материал имеет отличные показатели износостойкости и устойчив к механическим воздействиям. При этом, например, травертин отличается привлекательным внешним видом, оригинально смотрится и хорошо вписывается в различные стили. Натуральный камень может использоваться не только для отделки полов и стен. Например, можно купить мрамор, гранит для строительства лестниц или других интерьерных элементов внутри помещения.`,
  `Смотрятся они очень эффектно и при этом долговечны. Современное высокоточное оборудование значительно облегчает обработку мрамора, травертина. Появилась возможность создавать изделия, приобретающие даже в каменном исполнении легкость и воздушность. Достаточно взглянуть на камень для лестницы, чтобы наглядно в этом убедиться - идеально гладкая поверхность, естественный природный рисунок и глубокие тона… В готовом изделии всё это придаст элегантности и изысканности любому интерьеру.`,
];
export default function Home() {
  return (
    <section>
      <div className="container pt-10 flex justify-between items-start">
        <div className="w-1/2 flex flex-col gap-6 justify-start items-start">
          <h3 className="2xl:text-3xl text-2xl">Балюстрада из гранита </h3>
          <p className="2xl:text-xl text-lg">
            Балюстрада из гранита - это оформление наружного фасада- ограждение
            из фигурных балясин или столбиков, соединенных у основания
            специальными элементами. Это архитектурное чудо имеет ассирийские
            корни. Балюстрады придают изящества внешнему виду здания...
          </p>
          <div className="flex gap-2">
            <Link
              className="p-2 bg-[#A7A7A7] flex justify-center items-center"
              href="#">
              УТОЧНИТЬ ЦЕНУ
            </Link>
            <Link
              className="border-2 p-2 flex justify-center items-center"
              href="#">
              Перейти в каталог
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-start">
          <div className="w-[70%] aspect-square relative">
            <Image
              fill
              src="https://via.placeholder.com/400x400/"
              alt="Балюстрада из гранита"
            />
          </div>
        </div>
      </div>
      <div className="container pt-20 flex flex-col justify-start items-start">
        <div className="mx-auto w-[600px]">
          <h3 className="text-4xl text-center">
            Мы предоставляем огромный выбор изделий из камня
          </h3>
        </div>
        <div className="flex flex-col gap-14 pt-20">
          <LayoutCard content={content[0]} images={threeImages} />
          <LayoutCard content={content[1]} isReversed images={threeImages} />
          <LayoutCard content={content[2]} images={threeImages} />
          <LayoutCard content={content[3]} isReversed images={threeImages} />
          <div className="flex justify-center items-center">
            <Link
              className="text-center bg-[#A7A7A7] px-3 py-4 flex justify-center items-center"
              href="#">
              ПЕРЕЙТИ В КАТАЛОГ ИЗДЕЛИЙ
            </Link>
          </div>
        </div>
      </div>
      <article className=" bg-[#D9D9D9]">
        <div className="container flex flex-col gap-8 py-10">
          <h3 className="text-3xl flex justify-center items-center">
            НAША КОМПАНИЯ УЖЕ 11 ЛЕТ НА РЫНКЕ
          </h3>
          <h4 className="text-xl w-[600px] mx-auto text-center flex justify-center items-center">
            Качество и надежность во всем: от добычи камня до монтажа изделий из
            него
          </h4>
          <LayoutCard images={""} isReversed />
        </div>
      </article>
      <article className="container flex flex-col gap-10">
        <div className="pt-10">
          <h3 className="text-3xl flex justify-center items-center">
            МЫ УМЕЕМ РАБОТАТЬ С КАМНЕМ
          </h3>
        </div>
        <div className="grid grid-cols-4 grid-rows-3 gap-8">
          {Array.from({ length: 12 }, (_, index) => (
            <div key={index} className="w-full aspect-square relative">
              <Image
                fill
                src="https://via.placeholder.com/300x300/"
                alt="koko"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link
            className="text-center bg-[#A7A7A7] px-3 py-4 flex justify-center items-center"
            href="#">
            ПЕРЕЙТИ В КАТАЛОГ УСЛУГ
          </Link>
        </div>
      </article>
      <article className="container flex justify-between items-start py-10">
        <div className="w-1/2 border-black  pl-8 border-l-1">
          <p className="text-sm">
            Технологии обработки и укладки натурального камня, применяемые
            нашими специалистами, продлевают срок службы, износостойкость и
            декоративные качества материала. Например, каменный подоконник будет
            выглядеть добротно и одновременно эстетично, если его правильно
            изготовить и смонтировать. Вам не придется беспокоиться о его
            повреждении водой во время поливки цветов или появлении случайных
            механических повреждений. Качественный натуральный камень для
            подоконника – практичное решение, которое выбирают те, кто ценит
            красоту и практичность. Наша бригада рабочих сделает так, чтобы
            каменное изделие сохранило свойства на протяжении десятилетий.
          </p>
        </div>
        <div className="w-1/2 border-black  pl-8 border-l-1">
          <p className="text-sm">
            Например, сделать загородный дом уютным и гостеприимным поможет
            камин из натурального камня. Это идеальное решение, применяемое на
            протяжении столетий. Даже в квартирах есть возможность обустроить
            декоративные камины из мрамора и гранита, получив дополнительный
            источник тепла. Закажите камин или материал для его облицовки, а мы
            изготовим и доставим изделие, а также поможем с его монтажом.
            Независимо от выбора заказчика – будет ли это гранит, песчаник или
            другой вид натурального камня – каждый клиент может рассчитывать на
            высококлассное обслуживание, качественные материалы и доставку точно
            в срок! Потому что мы дорожим тем, что делаем!
          </p>
        </div>
      </article>
      <BannerText />
      <Posts/>
    </section>
  );
}
