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
      <h2 className="font-serif font-medium text-3xl text-center lg:hidden">
        bagaimana <span className="text-primary">Toolong</span> membantu Anda?
      </h2>
      <h2 className="font-serif font-medium text-5xl text-center hidden lg:block">
        bagaimana<span className="text-primary"> Toolong</span> membantu Anda?
      </h2>
      <div className="hidden lg:block w-full mt-16">
        <div className="w-full flex justify-center space-x-12">
          <div className="flex flex-1 flex-col space-y-12 pt-8">
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
                Kontak dan Rekam
              </h2>
              <p className="text-right mt-1.5 font-light">
                Toolong akan membantu Anda menghubungi orang terdekat Anda untuk
                menyampaikan lokasi keberadaan Anda. Di saat yang bersamaan,
                fitur kamera akan langsung diaktifkan untuk merekam situasi
                sekitar Anda.
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
                Pulih dan Penyelesaian
              </h2>
              <p className="text-right mt-1.5 font-light">
                Kesehatan fisik dan mental Anda adalah prioritas utama kami.
                Setelah kasus terjadi, kami akan mendampingi anda untuk mencari
                pertolongan dan memulihkan diri menggunakan petunjuk dari kami
                dan pertolongan dari pihak profesional.
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
            className="h-[80vh] flex-1"
          />
          <div className="flex flex-col flex-1 space-y-12 self-end pb-4">
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
                Aktifkan Suar
              </h2>
              <p className="text-left mt-1.5 font-light">
                Apabila pelecehan terjadi, Anda dapat mengaktifkan fitur suar
                untuk memberi tahu situasi anda kepada seluruh pengguna Toolong
                terdekat
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
                Laporkan Kejadian
              </h2>
              <p className="text-left mt-1.5 font-light">
                Hanya setelah Anda siap, Anda atau kerabat dapat melaporkan
                kejadian ke pihak berwajib dengan bantuan bukti yang kami telah
                peroleh dengan aman
              </p>
            </div>
          </div>
        </div>
      </div>
      <TutorCarousel />
    </div>
  );
}
