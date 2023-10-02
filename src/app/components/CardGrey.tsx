import Image from "next/image";
import Link from "next/link";
import { PricingDetailsType } from "../types";
import clsx from "clsx";

const CardGrey = ({
  classNames,
  headerImgSrc,
  headerImgAlt,
  title,
  subTitle,
  listItems,
  buttonName = "",
  buttonLink = "",
  colorScheme,
}: PricingDetailsType) => {
  return (
    <div
      className={clsx(
        `w-full sm:w-3/4 lg:w-1/3 p-8 lg:p-4 bg-brand-grey rounded-2xl flex flex-col items-center text-center gap-6 lg:gap-4`,
        classNames,
      )}
    >
      <Image
        src={headerImgSrc}
        alt={headerImgAlt}
        loading="lazy"
        width={64}
        height={64}
      />
      <h2 className="text-[#fff] text-[clamp(24px,4.5vw,26px)] font-semibold tracking-wide">
        {title}
      </h2>
      <h3 className="text-[#fff] text-[clamp(16px,4.5vw,18px)] font-medium tracking-wide">
        {subTitle}
      </h3>
      {listItems?.map((d, i) => (
        <p
          className="text-[#fff] text-[clamp(16px,4.5vw,18px)] font-medium tracking-wide"
          key={i}
        >
          {d}
        </p>
      ))}
      <div className="text-center mt-10 mb-2">
        <Link
          href={buttonLink}
          className={clsx(
            colorScheme[0],
            colorScheme[1],
            `border-[2px] py-2 px-4 rounded-full hover:bg-brand-grey focus:bg-brand-grey hover:text-[#fff] focus:text-[#fff] transition-all duration-500 ease-in-out delay-150`,
          )}
        >
          <span>{buttonName}</span>
        </Link>
      </div>
    </div>
  );
};

export default CardGrey;
