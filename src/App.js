import { useState } from "react";
import TutorCarousel from "./components/TutorCarousel";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="bg-neutral-light">
      <nav
        className={`lg:hidden fixed ${
          isSidebarOpen ? "translate-x-0 drop-shadow-xl" : "-translate-x-full"
        } transition transform duration-300 w-3/4 h-screen p-6 z-50 bg-neutral-dark text-white`}
      >
        <div className="flex flex-col py-4 w-full space-y-8">
          <img src="/logo_bw.svg" alt="" className="h-10 self-center" />
          <div className="flex flex-col space-y-5">
            <a href="/">Home</a>
            <a href="/">FAQ</a>
            <a href="/">Help Center</a>
          </div>
          <div className="w-full h-[1px] opacity-20 bg-neutral-grey"></div>
          <div className="flex flex-col space-y-5">
            <a href="/">Our Story</a>
            <a href="/">Meet the Team</a>
            <a href="/">Join us</a>
          </div>
        </div>
      </nav>
      <nav className="flex sticky top-0 px-6 lg:px-24 py-4 lg:py-5 z-40 justify-between items-center bg-neutral-light border-b border-neutral-grey">
        <img src="/logo.png" alt="logo" className="h-10" />
        <div className="hidden space-x-16 items-center lg:flex">
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">FAQ</a>
          <button className="px-4 py-2 text-[15px] text-white font-medium hover:bg-primary-alt bg-primary rounded-lg duration-200 transition flex justify-center items-center">
            <p>Help Center</p>
          </button>
        </div>
        <button
          className="lg:hidden"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        >
          {isSidebarOpen ? (
            <IoCloseOutline size={28} />
          ) : (
            <IoMenuOutline size={28} />
          )}
        </button>
      </nav>
      <div
        className="px-10 lg:px-24"
        onClick={() => {
          setIsSidebarOpen(false);
        }}
      >
        <div className="flex flex-col py-16 justify-center items-center">
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
                <div className="flex flex-col items-end group">
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
                <div className="flex flex-col items-end group">
                  <div className="w-8 h-8 flex justify-center items-center rounded-md bg-primary group-hover:bg-secondary duration-200 transition">
                    <h4 className="text-white">3</h4>
                  </div>
                  <h2 className="mt-4 text-2xl text-right font-medium text-primary group-hover:text-secondary duration-200 transition">
                    Heal and Resolve
                  </h2>
                  <p className="text-right mt-1.5 font-light">
                    Your physical and mental health are our top priorities.
                    After the assault, we will assist you to heal and recover
                    using our extensive guides and professional helps
                  </p>
                </div>
              </div>
              <img src="/phone_frame.svg" alt="frame" className="h-[80vh]" />
              <div className="flex flex-col space-y-12 self-end pb-16 pr-12">
                <div className="flex flex-col justify-start group">
                  <div className="w-8 h-8 flex justify-center items-center rounded-md bg-primary group-hover:bg-secondary duration-200 transition">
                    <h4 className="text-white">2</h4>
                  </div>
                  <h2 className="mt-4 text-2xl font-medium text-primary group-hover:text-secondary duration-200 transition">
                    Activate Beacon
                  </h2>
                  <p className="text-left mt-1.5 font-light">
                    If the assault is indeed happening, you can activate beacon
                    to alert all nearby Toolong users about your situation
                  </p>
                </div>
                <div className="flex flex-col justify-start group">
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
      </div>
    </main>
  );
}

export default App;
