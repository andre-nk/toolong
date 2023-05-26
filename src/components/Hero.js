export default function Hero() {
  
  return (
    <div className="pb-20 overflow-x-hidden">
      <div className=" lg:flex lg:justify-between lg:flex-row-reverse lg:items-center overflow-x-clip">
        <div className="flex justify-center overflow-hidden lg:-mr-32" >
          <div className="min-w-[485px] h-[485px] flex justify-center items-center rounded-full border-[3px] border-[#D9D9D9] lg:min-w-[768px] lg:h-[768px]">
            <div className="min-w-[351px] h-[351px] flex justify-center items-center rounded-full border-[3px] border-[#D9D9D9] lg:min-w-[556px] lg:h-[556px]"> 
              <div className="min-w-[255px] h-[255px] flex justify-center items-center rounded-full border-[3px] border-[#D9D9D9] lg:min-w-[357px] lg:h-[357px]"> 
                <div className="flex justify-center relative font-sans">
                  <img src="phone.svg" alt="phone" className="lg:w-[257px]"/>
                  <div className="absolute top-[72px] -right-6 lg:top-28 lg:-right-14 bg-secondary h-fit py-[3px] px-2 lg:py-1 lg:px-4 rounded-t-full rounded-r-full shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                    <p className="text-[#F7F1E8] text-[9px] font-semibold leading-3 lg:text-[14px] lg:leading-5">First-Aid</p>
                  </div>           
                  <div className="absolute top-48 -left-8 lg:top-52 lg:-left-16 bg-[#49929A] h-fit py-[3px] px-2 lg:py-1 lg:px-4 rounded-t-full rounded-l-full">
                    <p className="text-[#F7F1E8] text-[9px] font-semibold leading-3 lg:text-[14px] lg:leading-5">Emergency Beacon</p>
                  </div>                
                  <div className="absolute bottom-20 -left-12 lg:bottom-28 lg:-left-24 bg-secondary h-fit py-[3px] px-2 lg:py-1 lg:px-4 rounded-t-full rounded-l-full">
                    <p className="text-[#F7F1E8] text-[9px] font-semibold leading-3 lg:text-[14px] lg:leading-5">Heal and Recover</p>
                  </div>                
                  <div className="absolute bottom-8 -right-8 lg:bottom-14 lg:-right-14 bg-[#49929A] h-fit py-[3px] px-2 lg:py-1 lg:px-4 rounded-t-full rounded-r-full shadow-[0_3px_3px_rgba(0,0,0,0.25)]">
                    <p className="text-[#F7F1E8] text-[9px] font-semibold leading-3 lg:text-[14px] lg:leading-5">Notify Contacts</p>
                  </div>                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-5 px-10 lg:mt-0 lg:pl-20">
          <h1 className="mb-2 text-center text-[28px] font-medium font-serif leading-[34px] lg:text-left lg:text-[52px] lg:leading-[64px] ">
            it's never too long<br/>
            for a <span className="text-primary italic">tolong</span>
          </h1>
          <p className="text-black mb-5 text-center leading-[21px] text-[14px] font-light font-sans lg:text-left lg:text-xl lg:leading-8 lg:mb-10">
            Lorem ipsum, tapi bosen, gatau mau ngetik<br/>
            apa hehe, duh capek, kok saya ngedesign?<br/>
            yaudah lah ya yang penting kelar<br/>
            gg lu ndree, memang jago
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-primary py-[10px] px-[14px] rounded-[7px] font-semibold font-sans text-xs text-white lg:text-xl lg:leading-8">Download sekarang</button>
          </div>

        </div>
      </div>
    </div>
  )
}