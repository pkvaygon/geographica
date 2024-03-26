"use client";
import React from "react";

import { LogoIcon } from "@/icons";
import Link from "next/link";

const navLinks = [
  {
    name: "Главная страница",
    href: "/",
  },
  {
    name: "О компании",
    href: "#",
  },
  {
    name: "Каталог",
    href: "#",
  },
  {
    name: "Услуги",
    href: "#",
  },
  {
    name: "Работы с камнем",
    href: "#",
  },
  {
    name: "Контакты",
    href: "#",
  },
  {
    name: "Блог",
    href: "#",
  },
];

export default function Header() {
  return (
    <header className="w-full h-auto flex flex-col py-5 2xl:gap-14 gap-8">
      <section className="flex w-[90%] mx-auto justify-between items-center">
        <Link className="2xl:text-2xl" href="#">+7 (499) 113-11-04</Link>
        <h1 className="2xl:text-3xl text-2xl">Географика</h1>
        <input className="h-7 border-1" type="text" placeholder="Введите текст для поиска"/>
      </section>
      <section className="w-[80%] mx-auto flex justify-between items-center">
        {
          navLinks.map((link, index) => (
            <Link className="2xl:text-2xl" key={index} href={link.href}>{link.name}</Link>
            ))
        }
      </section>
    </header>
  );
}
