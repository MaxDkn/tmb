"use client";
import React from "react";
import { Container }  from "@/components/Container";
import {
  IconButton
} from "@material-tailwind/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

function CustomNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slidePrev()}
        className="dark !absolute left-2 top-1/2 z-10 -translate-y-1/2"
      >
        <NavArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
      </IconButton>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slideNext()}
        className="dark !absolute right-2 top-1/2 z-10 -translate-y-1/2"
      >
        <NavArrowRight className="h-7 w-7 translate-x-px stroke-2" />
      </IconButton>
    </>
  );
}

function customPagination(_: number, className: string): string {
  return `<span class="${className} w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[background:rgb(var(--color-background))] !opacity-50 ![background:rgb(var(--color-background))]"></span>`;
}

function CarouselDemo() {
  const teamMembers = [
    { firstname: "Paul", lastname: "Loiseau", img: "/img/team/paul.JPG" },
    { firstname: "Max", lastname: "Deckmyn", img: "/img/team/max.jpg" },
    { firstname: "Nikitas", lastname: "Giakkoupis", img: "/img/team/nikitas.JPG" },
    { firstname: "Maxime", lastname: "Bohler", img: "/img/team/maxime.jpg" },
    { firstname: "Zoé", lastname: "Bardin", img: "/img/team/zoe.jpg" },
    { firstname: "Matthieu", lastname: "Paillat", img: "/img/team/matthieu.jpg" },
  ];
  

  return (
    <div className="max-w-sm">
      <Swiper
        loop={true}
        autoplay={{ delay: 5000,
                    disableOnInteraction: false }}
        pagination={{ enabled: true,
                      clickable: true,
                      dynamicBullets: true,
                      renderBullet: customPagination }}
        modules={[Navigation, Pagination, Autoplay]}
        className="relative rounded-lg [&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="select-none relative">
            <img
              src={member.img}
              alt={`image-${index}`}
              className="h-[38rem] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-4 left-0 w-full flex justify-center">
              <span className="text-md tracking-wider text-green-700 dark:text-green-500">
                {member.firstname} {member.lastname.toUpperCase()}
              </span>
    </div>
          </SwiperSlide>
        ))}
        <CustomNavigation />
      </Swiper>
    </div>
  );
}


interface BenefitsProps {
  imgPos?: "left" | "right";
  id?: string;
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}

export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap " id={props.id}>
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div>
            <CarouselDemo/>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
  );
};

function Benefit(props: any) {
  return (
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-green-600 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
  );
}
