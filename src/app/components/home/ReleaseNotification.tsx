import Link from "next/link";

const ReleaseNotification = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col text-[#fff] text-[clamp(16px,4.5vw,20px)] items-center justify-center pb-1">
        <p>🔔 NEW! ZeroTier Summer 2023 Release: </p>
        <div>
          <Link href="/" className="underline">
            Download 1.12.2
          </Link>
          <span> - </span>
          <Link href="/" className="underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReleaseNotification;
