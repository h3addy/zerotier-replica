import clsx from "clsx";

type IProps = {
  rotate?: boolean;
};
const SolidDown = ({ rotate }: IProps) => {
  return (
    <div
      className={`${clsx(
        rotate ? "rotate-180" : "rotate-0",
      )} transition-[rotate] ease-in-out duration-500`}
    >
      <svg
        width="9"
        height="8"
        viewBox="0 0 9 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.93301 7.25C4.74056 7.58333 4.25944 7.58333 4.06699 7.25L0.602886 1.25C0.410435 0.916666 0.650998 0.499999 1.0359 0.499999L7.9641 0.5C8.349 0.5 8.58957 0.916666 8.39712 1.25L4.93301 7.25Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};

export default SolidDown;
