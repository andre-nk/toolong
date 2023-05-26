export default function Footer() { 
  return (
    <div className="pt-16 pb-28 px-10 bg-neutral-dark text-white font-sans lg:px-20">
      <div className="lg:flex lg:justify-between lg:flex-row-reverse">
        <div className="mb-16 lg:flex lg:gap-32">
          <div className="mb-12">
            <h3 className="text-[20px] font-semibold leading-8 mb-4">Quick Links</h3>
            <ul className="text-[20px] font-light leading-8">
              <li className="mb-3">Home</li>
              <li className="mb-3">Help Center</li>
              <li className="mb-3">Privacy Policy</li>
              <li className="mb-3">Terms and Conditionsr</li>
            </ul>            
          </div>
          <div className="mb-12">
            <h3 className="text-[20px] font-semibold leading-8 mb-4">About Us</h3>
            <ul className="text-[20px] font-light leading-8">
              <li className="mb-3">Our Story</li>
              <li className="mb-3">Meet the Team</li>
              <li className="mb-3">Join us!</li>
            </ul>
          </div>
        </div>
        <div>
          <img src="logo.svg" alt="Logo toolong" className="mb-6" />
          <p className="text-[14px] leading-[21px] font-light">
            69FG+QRR, Sagan, Caturtunggal, Depok, <br/> 
            Sleman Regency, Special Region of <br/> 
            Yogyakarta 55281<br/>
            <br/>
            +62 82243010141<br/>
            contact@toolong.com
          </p>
        </div>
      </div>
    </div>
  )
}