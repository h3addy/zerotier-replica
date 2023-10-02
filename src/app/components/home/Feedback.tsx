import { feedbackContent } from "@/app/constants/feedbackContent";
import CardGradient from "../CardGradient";

const Feedback = () => {
  return (
    <section className="feedback__wrapper p-4">
      <div className="px-0 w-full h-full lg:flex items-center justify-center">
        <div className="w-full lg:w-[920px] h-full lg:flex lg:flex-col items-center justify-center">
          <div className="flex flex-col items-center p-0">
            <h2 className="text-[#fff] mb-4 text-[clamp(22px,4.5vw,40px)] text-center font-bold">
              Used by the world&apos;s most innovative teams
            </h2>
          </div>
          <div className="flex flex-col gap-8 mt-4">
            {feedbackContent?.map((d, i) => (
              <CardGradient
                key={i}
                headerImgSrc={d.headerImgSrc}
                headerImgAlt={d.headerImgAlt}
                feedbackText={d.feedbackText}
                authorName={d.authorName}
                authorRole={d.authorRole}
                authorCompany={d.authorCompany}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
