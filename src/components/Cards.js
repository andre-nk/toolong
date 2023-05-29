import React from "react";

export default function Cards() {
  function Card(props) {
    return (
      <div className="mb-8 font-sans">
        <img
          src={props.imgSrc}
          alt={props.imgAlt}
          className="rounded-xl mb-6 aspect-[16/10]"
        />
        <h2 className="mb-3 text-primary text-xl md:text-2xl md:mb-1.5 font-semibold leading-4">
          {props.title}
        </h2>
        <p className="text-[15px] md:text-lg font-light leading-[21px] lg:leading-relaxed">
          {props.sub}
        </p>
      </div>
    );
  }
  return (
    <div className="pt-12">
      <div className="px-10">
        <h2 className="font-serif text-[28px] lg:text-4xl font-medium text-center lg:block">
          Dengan <span className="text-primary"> Toolong</span>,<br />
        </h2>
        <p className="font-sans mt-2 lg:mt-3 text-base lg:text-xl font-light text-center leading-relaxed">
          Anda tidak hanya melindungi diri sendiri, namun juga masyarakat{" "}
          <br className="hidden lg:block" />
          sekitar Anda dengan fitur-fitur unggulan kami seperti:
        </p>
      </div>
      <div className="px-10 pb-10 pt-16 gap-x-16 lg:gap-x-24 lg:gap-y-12 lg:px-20 lg:grid lg:grid-cols-2 lg:pb-20">
        <Card
          key={1}
          imgSrc="/accurate.png"
          imgAlt="accurate"
          title="Akurat"
          sub="Dengan menggunakan teknologi terkini, Toolong dapat memetakan lokasi pelaporan dengan akurasi tinggi, sehingga pihak berwenang dapat segera menindak langsung ke lokasi kejadian."
        />
        <Card
          key={2}
          imgSrc="/safe.png"
          imgAlt="safe"
          title="Aman"
          sub="Keamanan data Anda adalah prioritas kami. Informasi yang Anda berikan akan dirahasiakan dengan ketat dan hanya digunakan untuk kepentingan penindakan lanjut terhadap laporan Anda."
        />
        <Card
          key={3}
          imgSrc="/fast.png"
          imgAlt="fast"
          title="Cepat"
          sub="Setelah Anda melaporkan kejahatan, Toolong akan secara otomatis memberi notifikasi ke pihak berwenang setempat, memastikan tanggapan yang cepat dan efisien."
        />
        <Card
          key={4}
          imgSrc="/hand.jpeg"
          imgAlt="hand"
          title="Dalam Genggaman"
          sub="Gunakan Toolong di mana pun dan kapan pun Anda memerlukan bantuan atas kasus kekerasan seksual melalui aplikasi seluler kami yang intuitif dan mudah digunakan."
        />
      </div>
    </div>
  );
}
