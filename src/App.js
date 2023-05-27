import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Siap from "./components/Siap";
import Footer from "./components/Footer";
import Tutor from "./components/Tutor";

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
      <nav className="flex sticky top-0 px-6 lg:px-20 py-4 lg:py-5 z-30 justify-between items-center bg-neutral-light border-b border-neutral-grey">
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
      <div className="relative lg:absolute lg:top-4 bg-neutral-light flex flex-col space-y-24">
        <Hero />
        <Cards />
        <Tutor />
        <Siap />
        <Footer />
      </div>
    </main>
  );
}

export default App;
