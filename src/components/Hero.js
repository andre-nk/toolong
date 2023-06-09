export default function Hero() {
  return (
    <div className="pb-20 overflow-x-hidden">
      <div className=" lg:flex lg:justify-between lg:flex-row-reverse lg:items-center overflow-x-clip">
        <div className="flex justify-center lg:-mr-32">
          <div className="min-w-[485px] h-[485px] flex justify-center items-center rounded-full border-[2.5px] border-neutral-grey lg:min-w-[768px] lg:h-[768px]">
            <div className="min-w-[361px] h-[361px] flex justify-center items-center rounded-full border-[2.5px] border-neutral-grey lg:min-w-[556px] lg:h-[556px]">
              <div className="min-w-[255px] h-[255px] flex justify-center items-center rounded-full border-[2.5px] border-neutral-grey lg:min-w-[357px] lg:h-[357px]">
                <div className="flex justify-center relative font-sans">
                  <img src="nada.svg" alt="phone" className="w-44 lg:w-[250px]" />
                  <div className="absolute top-[72px] -right-6 lg:top-28 lg:-right-14 bg-secondary h-fit py-[3px] px-2 lg:py-1 lg:px-4 rounded-t-full rounded-r-full shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                    <p className="text-[#F7F1E8] text-[9px] font-semibold leading-3 lg:text-[14px] lg:leading-5">
                      First-Aid
                    </p>
                  </div>
                  <div className="absolute top-48 -left-8 lg:top-52 lg:-left-16 bg-primary h-fit py-[3px] px-2 lg:py-1 lg:px-4 rounded-t-full rounded-l-full">
                    <p className="text-[#F7F1E8] text-[9px] font-semibold leading-3 lg:text-[14px] lg:leading-5">
                      Emergency Beacon
                    </p>
                  </div>
                  <div className="absolute bottom-20 -left-12 lg:bottom-28 lg:-left-24 bg-secondary h-fit py-[3px] px-2 lg:py-1 lg:px-4 rounded-t-full rounded-l-full">
                    <p className="text-[#F7F1E8] text-[9px] font-semibold leading-3 lg:text-[14px] lg:leading-5">
                      Heal and Recover
                    </p>
                  </div>
                  <div className="absolute bottom-8 -right-8 lg:bottom-14 lg:-right-14 bg-primary h-fit py-[3px] px-2 lg:py-1 lg:px-4 rounded-t-full rounded-r-full shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                    <p className="text-[#F7F1E8] text-[9px] font-semibold leading-3 lg:text-[14px] lg:leading-5">
                      Notify Contacts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-5 px-4 lg:mt-0 lg:pl-20 md:flex md:flex-col">
          <h1 className="mb-2.5 text-center text-[28px] font-medium font-serif leading-[34px] lg:text-left lg:text-[52px] lg:leading-[64px] ">
            it's never too long
            <br />
            for a <span className="text-primary italic">tolong</span>
          </h1>
          <p className="text-black mb-6 text-center leading-relaxed font-light text-sm font-sans md:w-8/12 lg:w-10/12 md:self-center lg:self-start lg:text-left lg:text-lg lg:leading-relaxed lg:mb-10">
            Toolong adalah aplikasi pertolongan pertama terhadap kasus kekerasan
            seksual untuk menciptakan lingkungan yang aman bagi semua orang.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-primary hover:bg-primary-alt duration-200 transition py-[10px] px-[14px] lg:py-2 lg:px-5 rounded-[7px] font-semibold font-sans text-sm text-white lg:text-base lg:leading-8">
              Download sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
