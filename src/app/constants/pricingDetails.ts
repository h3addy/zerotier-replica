import { PricingListType } from "../types";
import logoWhite from "../assets/images/Zero_Tier_Logo_Inverted_White_73e6fee0b9.webp";
import logoOrange from "../assets/images/Zero_Tier_Logo_Orange_a60eff7c4a.webp";
import logoBlue from "../assets/images/Zero_Tier_Logo_Blue_1c2a591633.webp";

export const pricingDetails: PricingListType = [
  {
    headerImgSrc: logoWhite,
    headerImgAlt: "Zerotier white log",
    title: "Basic",
    subTitle: "For Everyone / ZeroTier Hosted Controller",
    listItems: [
      "✓ 1 Admin",
      "✓ 25 Nodes",
      "✓ Unlimited Networks",
      "✖ Business SSO: n/a",
      "✓ Community Support",
      "FREE",
    ],
    buttonName: "Free Sign Up",
    buttonLink: "/",
    colorScheme: ["border-[#fff]", "bg-[#fff]"],
  },
  {
    headerImgSrc: logoOrange,
    headerImgAlt: "Zerotier orange logo",
    title: "Professional",
    subTitle: "Licensed Only For Individuals and Testing",
    listItems: [
      "✓ Admins | $10 USD/mo each",
      "✓ 25 Node Packs | $5 USD/mo",
      "✓ Unlimited Networks",
      "✓ Business SSO | $5 USD/mo per seat",
      "✓ Community Support",
      "Starting at $5 USD/month",
    ],
    buttonName: "Sign Up",
    buttonLink: "/",
    colorScheme: ["border-[#ffb441]", "bg-[#ffb441]"],
  },
  {
    headerImgSrc: logoBlue,
    headerImgAlt: "Zerotier blue logo",
    title: "Business",
    subTitle: "Licensed for Commercial Deployments",
    listItems: [
      "Use Cases Include:",
      "∙ IoT",
      "∙ SD-WAN",
      "∙ VPN",
      "∙ Remote Monitoring and Managementt",
      "Contact Sales for Pricing",
    ],
    buttonName: "Contact Sales",
    buttonLink: "/",
    colorScheme: ["border-[#4436ca]", "bg-[#4436ca]"],
  },
];
