import CardBlue from "../CardBlue";
import ciImage from "../../assets/images/Continuous_Integration_ee887d3f58.webp";

const ZerotierEnterprise = () => {
  return (
    <section className="enterprise__wrapper py-4">
      <div className="w-full h-full lg:flex justify-center items-center">
        <div className="px-4 w-full lg:w-[1280px] h-full">
          <CardBlue
            title="ZeroTier Enterprise"
            subText="For high-volume VPN, IoT, edge, embedded networking, multi & hybrid cloud, Infrastructure as Code (IaC), and Commercial Use."
            buttonLink="/"
            buttonName="Contact Sales"
            imageSrc={ciImage}
            imageAlt="Continuous integration"
          />
        </div>
      </div>
    </section>
  );
};

export default ZerotierEnterprise;
