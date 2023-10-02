import Link from "next/link";

const Community = () => {
  return (
    <section className="community__wrapper py-4">
      <div className="w-full h-full lg:flex justify-center items-center">
        <div className="px-4 w-full lg:w-[1280px] h-full">
          <div className={`h-full w-full p-8 bg-brand-grey rounded-3xl`}>
            <h3 className="text-[#fff] text-[clamp(20px,4.5vw,30px)] font-bold leading-7">
              Open Source Community Edition
            </h3>
            <p className="text-[#fff] text-[clamp(16px,4.5vw,24px)] leading-7 my-4">
              Featuring unlimited nodes, networks, and admins. Self-hosted.
              Designed for non-Commercial Use cases.
            </p>
            <ul className="block my-4 lg:my-2 flex gap-4 flex-col items-center md:flex-row">
              <li className="p-3 lg:p-0">
                <Link
                  href="/"
                  className="py-2 px-4 border-[2px] hover:bg-[#fff] focus:bg-[#fff] hover:text-[#000] focus:text-[#000] border-[#fff] text-[#fff] rounded-full font-medium text-[clamp(16px,4.5vw,20px)] transition-colors duration-700 delay-150 ease-in-out"
                >
                  ZeroTier GitHub
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="/"
                  className="py-2 px-4 text-[#fff] font-medium text-[clamp(20px,4.5vw,24px)] hover:text-brand-yellow focus:text-brand-yellow transition-colors duration-700 delay-150 ease-in-out"
                >
                  Read Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
