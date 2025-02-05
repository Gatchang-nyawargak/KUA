import Image from 'next/image';
import Link from 'next/link';

const Landingpage = () => {
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
  
      {/* Background image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/landing.png" 
          alt="Landing Image" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInUp">DE SOUTH CO. LTD</h1>
        <p className="text-xl animate__animated animate__fadeInUp animate__delay-1s">Empowering Futures, Enriching Lives</p>
        <Link href="#services" passHref>
          <button
            className="px-6 py-3 mt-8 md:mt-20 text-base md:text-lg bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 font-nunito"
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landingpage;
