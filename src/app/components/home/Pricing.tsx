import { pricingDetails } from "@/app/constants/pricingDetails";
import CardGrey from "../CardGrey";

const Pricing = () => {
  return (
    <section className="service__wrapper py-4 lg:pb-8">
      <div className="w-full h-full lg:flex items-center justify-center">
        <div className="px-4 w-full lg:w-[1280px] h-full">
          <div className="flex flex-col items-center py-8">
            <h2 className="text-[#fff] text-[clamp(22px,4.5vw,42px)] font-semibold">
              Pricing
            </h2>
            <div className="text-center text-[#fff] text-[clamp(16px,4.5vw,20px)] font-medium">
              ZeroTier makes networking easy for everyone - anywhere.
            </div>
          </div>
          <div className="flex flex-row flex-wrap sm:justify-center lg:flex-nowrap gap-8">
            {pricingDetails?.map((d, i) => (
              <CardGrey
                key={i}
                headerImgSrc={d.headerImgSrc}
                headerImgAlt={d.headerImgAlt}
                title={d.title}
                subTitle={d.subTitle}
                listItems={d.listItems}
                buttonName={d.buttonName}
                buttonLink={d.buttonLink}
                colorScheme={d.colorScheme}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
