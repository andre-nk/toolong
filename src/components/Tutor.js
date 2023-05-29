import React from "react";
import { useState } from "react";
import TutorCarousel from "./TutorCarousel";

export default function Tutor() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const updateIndex = (index) => {
    setCarouselIndex(index);
  };

  return (
    <div className="flex flex-col py-16 px-8 lg:px-20 justify-center items-center">
      <h2 className="font-serif font-medium text-4xl text-center lg:hidden">
        how does
        <br />
        <span className="text-primary">Toolong</span> work?
      </h2>
      <h2 className="font-serif font-medium text-5xl text-center hidden lg:block">
        how does<span className="text-primary"> Toolong</span> work?
      </h2>
      <div className="hidden lg:block w-full mt-16">
        <div className="w-full flex justify-center space-x-20">
          <div className="flex flex-col space-y-12 pt-12">
            <div
              className="flex flex-col items-end group"
              onMouseEnter={() => {
                updateIndex(0);
              }}
            >
              <div className="w-8 h-8 flex justify-center items-center rounded-md bg-primary group-hover:bg-secondary duration-200 transition">
                <h4 className="text-white">1</h4>
              </div>
              <h2 className="mt-4 text-2xl text-right font-medium text-primary group-hover:text-secondary duration-200 transition">
                Notify Contacts & <br /> Live Record
              </h2>
              <p className="text-right mt-1.5 font-light">
                You will notify the preferred contacts about your current
                location, activate live recording of your surrounding.
              </p>
            </div>
            <div
              className="flex flex-col items-end group"
              onMouseEnter={() => {
                updateIndex(2);
              }}
            >
              <div className="w-8 h-8 flex justify-center items-center rounded-md bg-primary group-hover:bg-secondary duration-200 transition">
                <h4 className="text-white">3</h4>
              </div>
              <h2 className="mt-4 text-2xl text-right font-medium text-primary group-hover:text-secondary duration-200 transition">
                Heal and Resolve
              </h2>
              <p className="text-right mt-1.5 font-light">
                Your physical and mental health are our top priorities. After
                the assault, we will assist you to heal and recover using our
                extensive guides and professional helps
              </p>
            </div>
          </div>
          <img
            src={
              carouselIndex === 0
                ? "/el.svg"
                : carouselIndex === 1
                ? "/nada.svg"
                : carouselIndex === 2
                ? "/dinda.svg"
                : "/irin.svg"
            }
            alt="frame"
            className="h-[80vh]"
          />
          <div className="flex flex-col space-y-12 self-end pb-16 pr-12">
            <div
              className="flex flex-col justify-start group"
              onMouseEnter={() => {
                updateIndex(1);
              }}
            >
              <div className="w-8 h-8 flex justify-center items-center rounded-md bg-primary group-hover:bg-secondary duration-200 transition">
                <h4 className="text-white">2</h4>
              </div>
              <h2 className="mt-4 text-2xl font-medium text-primary group-hover:text-secondary duration-200 transition">
                Activate Beacon
              </h2>
              <p className="text-left mt-1.5 font-light">
                If the assault is indeed happening, you can activate beacon to
                alert all nearby Toolong users about your situation
              </p>
            </div>
            <div
              className="flex flex-col justify-start group"
              onMouseEnter={() => {
                updateIndex(3);
              }}
            >
              <div className="w-8 h-8 flex justify-center items-center rounded-md bg-primary group-hover:bg-secondary duration-200 transition">
                <h4 className="text-white">4</h4>
              </div>
              <h2 className="mt-4 text-2xl font-medium text-primary group-hover:text-secondary duration-200 transition">
                Report to Authorities
              </h2>
              <p className="text-left mt-1.5 font-light">
                Whenever you&apos;re ready, you or your close contacts can
                resolve the case to authorities with many evidence we have
                safely gathered for you
              </p>
            </div>
          </div>
        </div>
      </div>
      <TutorCarousel />
    </div>
  );
}
