import Image from "next/image";
import heroBg from "../../assets/images/Flat_Abstract_Wireframe_Background_88335fa9ea.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero__wrapper w-full h-[90vh]">
      <div className="w-full h-[90vh] relative">
        <div className="z-10 w-full h-full absolute top-0 -left-20 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] via-[#1a1a1a25] to-[#1a1a1a00)]"></div>
        <Image
          src={heroBg}
          alt="hero background"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 z-30 w-full h-full lg:flex lg:justify-center">
        <div className="lg:max-w-[1280px] h-full">
          <div className="w-full lg:w-2/4 h-full text-[#fff] flex items-start justify-center flex-col px-4">
            <h2 className="font-semibold text-[clamp(28px,4.5vw,58px)] mb-4 leading-7 lg:leading-none">
              Securely connect any device, anywhere.
            </h2>
            <p className="mb-4 text-[clamp(18px,4.5vw,24px)]">
              ZeroTier lets you build modern, secure multi-point virtualized
              networks of almost any type. From robust peer-to-peer networking
              to multi-cloud mesh infrastructure, we enable global connectivity
              with the simplicity of a local network.
            </p>
            <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
              <Link
                href="/"
                className="border-[2px] border-brand-yellow bg-brand-yellow text-[#000] rounded-full py-2 px-6 hover:bg-brand-grey focus:bg-brand-grey hover:text-brand-yellow focus:text-brand-yellow transition-colors ease-in-out duration-500 delay-0"
              >
                Get ZeroTier
              </Link>
              <Link
                href="/"
                className="text-[#fff] rounded-full py-2 px-6 hover:bg-brand-grey focus:bg-brand-grey hover:text-brand-yellow focus:text-brand-yellow  transition-colors ease-in-out duration-500 delay-0"
              >
                Learn more ›
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
