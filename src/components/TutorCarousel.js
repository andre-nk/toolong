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
            Kontak dan Rekam
          </h2>
          <p className="text-center mt-1.5 font-light">
            Toolong akan membantu Anda menghubungi orang terdekat Anda untuk
            menyampaikan lokasi keberadaan Anda. Di saat yang bersamaan, fitur
            kamera akan langsung diaktifkan untuk merekam situasi sekitar Anda.
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
            Aktifkan Suar
          </h2>
          <p className="text-center mt-1.5 font-light">
            Apabila pelecehan terjadi, Anda dapat mengaktifkan fitur suar untuk
            memberi tahu situasi anda kepada seluruh pengguna Toolong terdekat
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
            Pulih dan Penyelesaian
          </h2>
          <p className="text-center mt-1.5 font-light">
            Kesehatan fisik dan mental Anda adalah prioritas utama kami. Setelah
            kasus terjadi, kami akan mendampingi anda untuk mencari pertolongan
            dan memulihkan diri menggunakan petunjuk dari kami dan pertolongan
            dari pihak profesional.
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
            Laporkan Kejadian
          </h2>
          <p className="text-center mt-1.5 font-light">
            Hanya setelah Anda siap, Anda atau kerabat dapat melaporkan kejadian
            ke pihak berwajib dengan bantuan bukti yang kami telah peroleh
            dengan aman
          </p>
        </div>
      </div>
    </div>
  );
}
