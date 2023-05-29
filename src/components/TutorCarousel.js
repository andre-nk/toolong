import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function TutorCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const slideNext = () => {
    if (carouselIndex === 3) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  const slidePrev = () => {
    if (carouselIndex === 0) {
      setCarouselIndex(3);
    } else {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  return (
    <div className="lg:hidden">
      <div className="mt-16 mb-12 flex w-full justify-between items-center">
        <button onClick={slidePrev}>
          <IoChevronBackOutline size={32} />
        </button>
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
          className="h-96"
        />
        <button onClick={slideNext}>
          <IoChevronForwardOutline size={32} />
        </button>
      </div>
      <div className="relative">
        <div
          className={`${
            carouselIndex === 0 ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 relative top-0 w-full flex flex-col items-center justify-start`}
        >
          <div className="w-8 h-8 flex justify-center items-center rounded-md bg-primary">
            <h4 className="text-white">1</h4>
          </div>
          <h2 className="mt-4 text-2xl font-medium text-primary">
            Notify and Record
          </h2>
          <p className="text-center mt-1.5 font-light">
            You will notify the preferred contacts about your current location,
            activate live recording of your surrounding.
          </p>
        </div>
        <div
          className={`${
            carouselIndex === 1 ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 absolute top-0 w-full flex flex-col items-center justify-start`}
        >
          <div className="w-8 h-8 flex justify-center items-center rounded-md bg-primary">
            <h4 className="text-white">2</h4>
          </div>
          <h2 className="mt-4 text-2xl font-medium text-primary">
            Activate Beacon
          </h2>
          <p className="text-center mt-1.5 font-light">
            If the assault is indeed happening, you can activate beacon to alert
            all nearby Toolong users about your situation
          </p>
        </div>
        <div
          className={` ${
            carouselIndex === 2 ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500  absolute top-0 w-full flex flex-col items-center justify-start`}
        >
          <div className="w-8 h-8 flex justify-center items-center rounded-md bg-primary">
            <h4 className="text-white">3</h4>
          </div>
          <h2 className="mt-4 text-2xl font-medium text-primary">
            Heal and Resolve
          </h2>
          <p className="text-center mt-1.5 font-light">
            Your physical and mental health are our top priorities. After the
            assault, we will assist you to heal and recover using our extensive
            guides and professional helps
          </p>
        </div>
        <div
          className={`${
            carouselIndex === 3 ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500  absolute top-0 w-full flex flex-col items-center justify-start`}
        >
          <div className="w-8 h-8 flex justify-center items-center rounded-md bg-primary">
            <h4 className="text-white">4</h4>
          </div>
          <h2 className="mt-4 text-2xl font-medium text-primary">
            Report to Authorities
          </h2>
          <p className="text-center mt-1.5 font-light">
            Whenever you&apos;re ready, you or your close contacts can resolve
            the case to authorities with many evidence we have safely gathered
            for you
          </p>
        </div>
      </div>
    </div>
  );
}
