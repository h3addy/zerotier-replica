import Image from "next/image";
import phoneImage from "../../assets/images/Zero_Tier_smart_phone_in_hand_vector_illustration_dcd7d498ae.webp";
import secureImage from "../../assets/images/secure_technology_32950d4870.webp";
import Link from "next/link";

const Capabilities = () => {
  return (
    <section className="capabilities__wrapper py-4">
      <div className="px-4 w-full h-full lg:flex items-center justify-center">
        <div
          className={`h-full w-full lg:w-[1280px] p-4 bg-brand-grey rounded-2xl`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="p-8 lg:w-2/4">
              <Image
                src={phoneImage}
                alt="phone image"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="p-4 lg:w-2/4">
              <h3 className="text-[#fff] font-semibold text-[clamp(20px,4.5vw,30px)] mb-4">
                It just works
              </h3>
              <p className="text-[#fff] font-normal text-[clamp(18px,4.5vw,24px)] my-4">
                ZeroTier combines the capabilities of <strong>VPN</strong> and
                <strong>SD-WAN</strong>, simplifying network management. Enjoy
                flexibility while avoiding costly hardware vendor lock in.
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <Link
                  href="/"
                  className="bg-[#fff] text-[#000] border-[2px] border-[#fff] py-2 px-4 rounded-full hover:bg-brand-grey focus:bg-brand-grey hover:text-[#fff] focus:text-[#fff] transition-colors ease-in-out duration-500 delay-0"
                >
                  <span>Learn more ›</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-8">
            <div className="p-8 lg:w-2/4">
              <Image
                src={secureImage}
                alt="secure image"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="p-4 lg:w-2/4">
              <h3 className="text-[#fff] font-semibold text-[clamp(20px,4.5vw,30px)] mb-4">
                Speed, Flexibility, and Security
              </h3>
              <p className="text-[#fff] font-normal text-[clamp(18px,4.5vw,24px)] my-4">
                Set up ZeroTier in minutes with remote, automated deployment.
              </p>
              <p className="text-[#fff] font-normal text-[clamp(18px,4.5vw,24px)] my-4">
                Emulates Layer 2 Ethernet with multipath, multicast, and
                bridging capabilities.
              </p>
              <p className="text-[#fff] font-normal text-[clamp(18px,4.5vw,24px)] my-4">
                ZeroTier&apos;s zero-trust networking solution provides scalable
                security with 256-bit end-to-end encryption.
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <Link
                  href="/"
                  className="bg-[#fff] text-[#000] border-[2px] border-[#fff] py-2 px-4 rounded-full hover:bg-brand-grey focus:bg-brand-grey hover:text-[#fff] focus:text-[#fff] transition-colors ease-in-out duration-500 delay-0"
                >
                  <span>Get ZeroTier</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
