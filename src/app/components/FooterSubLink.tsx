import Link from "next/link";

type IProps = {
  to: string;
  children: React.ReactNode;
};
const FooterSubLink = ({ to, children }: IProps) => {
  return (
    <Link
      href={to}
      className="mr-4 text-[#fff] hover:text-[#4436ca] focus:text-[#4436ca] transition-[color] duration-700 ease-in-out delay-0"
    >
      {children}
    </Link>
  );
};

export default FooterSubLink;
