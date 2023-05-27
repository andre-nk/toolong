export default function Siap() { 
  return (
    <div className="py-20 mb-32">
      <div className="px-10 lg:px-20">
        <h1 className="mb-2.5 lg:mb-5 text-center text-[28px] font-medium font-serif leading-normal lg:text-5xl lg:leading-[64px]">
          siap jadi bagian <br className="lg:hidden"/>
          <span className="text-primary">#BersamaMelangkah?</span>
        </h1>
        <div className="flex justify-center">
          <p className="text-black mb-5 text-center leading-relaxed text-base font-light font-sans lg:text-xl lg:leading-10 lg:w-3/4 lg:mb-14">
            <span className="text-primary font-semibold">Toolong</span> bukan hanya tentang melaporkan 
            kejahatan seksual, tetapi juga tentang
            <span className="text-primary italic"> membangun kekuatan masyarakat</span>. Ayo 
            bergabung bersama kami, dan mulai 
            pemerangi kekerasan seksual dan bersama 
            mewujudkan lingkungan masyarakat yang
            <span className="text-primary italic"> aman dari kekerasan seksual</span>
          </p>
        </div>
        <div className="flex justify-center items-center space-x-8 mt-8">
          <button>
            <img src="googlePlay.svg" alt="Google Play" className="h-[2.8rem] lg:h-[72px]" />
          </button>
          <button>
            <img src="appStore.png" alt="App Store" className="h-[2.735rem] lg:h-[68px]" />
          </button>
        </div>
      </div>
    </div>
  )
}