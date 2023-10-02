import clsx from "clsx";
import Link from "next/link";

type IProps = {
  show: boolean;
  subMenuList: string[];
};
const HeaderSubMenu = ({ subMenuList, show }: IProps) => {
  return (
    <>
      <div
        className={`${clsx(
          show
            ? "block scale-y-100 opacity-1"
            : "hidden lg:block scale-y-0 opacity-0",
        )} transform transition-all ease-in-out origin-top duration-500 lg:absolute top-10 -left-20 bg-white lg:bg-[#000000cc] blur w-[15rem] p-2`}
      ></div>
      <ul
        className={`${clsx(
          show
            ? "block lg:block scale-y-100 opacity-1"
            : "hidden lg:block scale-y-0 opacity-0",
        )} transform transition-all ease-in-out origin-top duration-500 lg:absolute top-10 -left-20 lg:bg-[#000] w-[15rem] py-2 px-4 rounded-2xl`}
      >
        {subMenuList?.map((d, i) => (
          <li
            key={i}
            className="p-2 text-[clamp(16px,4.5vw,20px)] w-full text-[#fff] block hover:text-brand-blue focus:text-brand-blue lg:hover:bg-brand-grey lg:focus:bg-brand-grey lg:hover:text-[#fff] lg:focus:text-[#fff] lg:hover:rounded-3xl"
          >
            <Link href="#">{d}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeaderSubMenu;
