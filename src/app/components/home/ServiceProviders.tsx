import CardBlue from "../CardBlue";
import salesImage from "../../assets/images/Sales_Graphs_Art_dc7e900aa6.webp";

const ServiceProviders = () => {
  return (
    <section className="service__wrapper py-4">
      <div className="w-full h-full lg:flex justify-center items-center">
        <div className="px-4 w-full lg:w-[1280px] h-full">
          <CardBlue
            title="Service Providers"
            subText="For hardware and software companies interested in embedding or integrating the ZeroTier platform within their service offering, as well as enterprise-facing channels including Managed Service Providers (MSPs), Resellers, and Systems Integrators."
            buttonName="Contact SP Sales"
            buttonLink="/"
            imageSrc={salesImage}
            imageAlt="Sales on a screen"
            odd={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;
