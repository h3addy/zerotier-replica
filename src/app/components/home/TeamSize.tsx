import { teamSizeContent } from "@/app/constants/teamSizeContent";
import CardTransparent from "../CardTransparent";

const TeamSize = () => {
  return (
    <section className="team_size__wrapper py-8 px-8 lg:py-4">
      <div className="px-0  w-full h-full lg:flex items-center justify-center">
        <div className="h-full w-full lg:w-[1280px]">
          <div className="flex flex-col items-center p-0">
            <h2 className="text-[#fff] text-[clamp(22px,4.5vw,40px)] text-center font-bold">
              Secure networks for teams of any size
            </h2>
          </div>
          <div className="flex flex-row flex-wrap gap-8 md:gap-0 mt-4 lg:mt-0">
            {teamSizeContent?.map((d, i) => (
              <CardTransparent
                key={i}
                headerImgSrc={d.headerImgSrc}
                headerImgAlt={d.headerImgAlt}
                title={d.title}
                listItems={d.listItems}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSize;
