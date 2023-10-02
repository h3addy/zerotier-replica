import Image from "next/image";
import { FeedbackType } from "../types";

const CardGradient = ({
  headerImgSrc,
  headerImgAlt,
  feedbackText,
  authorName,
  authorRole,
  authorCompany,
}: FeedbackType) => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-start rounded-3xl gap-4 p-8 mb-10 bg-gradient-to-br from-[#fdb25d] to-[#4436ca]">
      <Image src={headerImgSrc} alt={headerImgAlt} width={48} height={48} />
      <div className="flex">
        <blockquote className="text-[#fff] text-[clamp(16px,4.5vw,20px)] font-medium">
          <p className="mb-4 lg:mb-0">&ldquo;{feedbackText}&rdquo;</p>
          <figcaption>
            <cite>{authorName}</cite>,<p>{authorRole},</p>
            <p>{authorCompany}</p>
          </figcaption>
        </blockquote>
      </div>
    </div>
  );
};

export default CardGradient;
