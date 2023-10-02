import Link from "next/link";
import FooterLogo from "../assets/icons/FooterLogo";
import { footerNavLinks } from "@/app/constants/footerNavLinks";
import GithubIcon from "../assets/icons/GithubIcon";
import FooterSubLink from "./FooterSubLink";
import LinkedInIcon from "../assets/icons/LinkedInIcon";
import FacebookIcon from "../assets/icons/FacebookIcon";
import YoutubeIcon from "../assets/icons/YoutubeIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import MastodonIcon from "../assets/icons/MastodonIcon";

const Footer = () => {
  return (
    <footer className="bg-bg-primary pt-8 pb-10">
      <div className="footer__wrapper mx-auto max-w-[1280px] px-4">
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="footer__logo flex gap-[16px] flex-col">
              <Link href="/">
                <FooterLogo />
              </Link>
              <span className="text-[#fff] text-[clamp(16px,4.5vw,18px)] mb-[8px]">
                Securely Connecting The World&apos;s Devices.
              </span>
            </div>
            <ul className="footer__nav flex flex-col mt-4 md:mt-0 md:flex-row items-start gap-5 w-2/4">
              {footerNavLinks.map((d, i) => (
                <li
                  key={`${d.group_header
                    .toLowerCase()
                    .replaceAll(" ", "")}_${i}`}
                  className="pb-5 w-full md:w-1/3"
                >
                  <div className="mb-2 uppercase tracking-widest text-[clamp(16px,4.5vw,18px)] font-bold text-[#fff]">
                    {d.group_header}
                  </div>
                  <ul className="flex flex-col gap-2">
                    {d.sub_links.map((l, i) => (
                      <li
                        key={`${l.name.toLowerCase().replaceAll(" ", "")}_${i}`}
                      >
                        <Link href={l.url}>
                          <span className="text-[clamp(14px,4.5vw,16px)] text-[#fff] font-light">
                            {l.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex gap-4 mt-4 md:mt-0">
            <li className="px-2">
              <FooterSubLink to="/">
                <GithubIcon />
              </FooterSubLink>
            </li>
            <li className="px-2">
              <FooterSubLink to="/">
                <LinkedInIcon />
              </FooterSubLink>
            </li>
            <li className="px-2">
              <FooterSubLink to="/">
                <YoutubeIcon />
              </FooterSubLink>
            </li>
            <li className="px-2">
              <FooterSubLink to="/">
                <FacebookIcon />
              </FooterSubLink>
            </li>
            <li className="px-2">
              <FooterSubLink to="/">
                <TwitterIcon />
              </FooterSubLink>
            </li>
            <li className="px-2">
              <FooterSubLink to="/">
                <MastodonIcon />
              </FooterSubLink>
            </li>
          </ul>
          <div className="flex flex-col mt-4 md:mt-0 md:flex-row md:justify-between items-start gap-4">
            <div className="text-[#fff] text-[clamp(16px,4.5vw,18px)]">
              © 2023 ZeroTier, Inc. All rights reserved.
            </div>
            <div></div>
            <ul className="flex items-center gap-4">
              <li className="mb-1">
                <FooterSubLink to="/">
                  <span className=" text-[clamp(16px,4.5vw,18px)]">Terms</span>
                </FooterSubLink>
              </li>
              <li>
                <FooterSubLink to="/">
                  <span className=" text-[clamp(16px,4.5vw,18px)]">
                    Privacy Policy
                  </span>
                </FooterSubLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
