import Image from "next/image";
import { TeamSizeType } from "../types";

const CardTransparent = ({
  headerImgSrc,
  headerImgAlt,
  title,
  listItems,
}: TeamSizeType) => {
  return (
    <div className="w-full lg:w-1/4 md:w-2/4 flex flex-col items-center text-center md:p-8">
      <Image src={headerImgSrc} alt={headerImgAlt} width={176} height={176} />
      <div className="flex">
        <h2 className="text-[#fff] text-[clamp(20px,4.5vw,30px)] font-bold">
          {title}
        </h2>
      </div>
      <div>
        {listItems?.map((d, i) => (
          <p className="text-[#fff] text-[clamp(16px,4.5vw,20px)] my-4" key={i}>
            {d}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardTransparent;
