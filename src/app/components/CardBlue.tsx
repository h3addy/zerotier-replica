import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type IProps = {
  classNames?: string;
  odd?: boolean;
  title: string;
  subText: string;
  buttonName: string;
  buttonLink: string;
  imageSrc: StaticImageData;
  imageAlt: string;
};

const CardBlue = ({
  classNames,
  odd = true,
  title,
  subText,
  buttonName,
  buttonLink,
  imageSrc,
  imageAlt,
}: IProps) => {
  return (
    <div
      className={`h-full w-full p-8 bg-brand-blue rounded-2xl ${classNames}`}
    >
      <div
        className={`flex flex-wrap md:flex-nowrap ${clsx(
          odd ? "" : "lg:flex-row-reverse",
        )}`}
      >
        <div className="w-full md:2/3 flex flex-col justify-center pt-12 pb-16">
          <div className="text-[#fff] font-semibold text-[clamp(22px,4.5vw,42px)] mb-4 tracking-wide">
            {title}
          </div>
          <div className="text-[#fff] font-medium text-[clamp(18px,4.5vw,22px)] mb-4">
            {subText}
          </div>
          <div className="text-center md:text-left mt-10 mb-2">
            <Link
              href={buttonLink}
              className="text-brand-yellow border-brand-yellow border-[2px] py-2 px-4 rounded-full hover:bg-brand-yellow focus:bg-brand-yellow hover:text-[#000] focus:text-[#000] transition-colors duration-500 ease-in-out delay-150"
            >
              <span>{buttonName}</span>
            </Link>
          </div>
        </div>
        <div className="w-full md:1/3 flex justify-center items-center">
          <Image src={imageSrc} alt={imageAlt} style={{ objectFit: "cover" }} />
        </div>
      </div>
    </div>
  );
};

export default CardBlue;
