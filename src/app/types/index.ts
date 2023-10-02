import { StaticImageData } from "next/image";

export type FooterNavLinksType = {
  group_header: string;
  sub_links: {
    name: string;
    url: string;
  }[];
}[];

export type PricingDetailsType = {
  classNames?: string;
  headerImgSrc: StaticImageData;
  headerImgAlt: string;
  title: string;
  subTitle: string;
  listItems: string[];
  buttonName: string;
  buttonLink: string;
  colorScheme: string[];
};

export type PricingListType = PricingDetailsType[];

export type TeamSizeType = {
  headerImgSrc: StaticImageData;
  headerImgAlt: string;
  title: string;
  listItems: string[];
};

export type TeamSizeListType = TeamSizeType[];

export type FeedbackType = {
  headerImgSrc: StaticImageData;
  headerImgAlt: string;
  feedbackText: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
};

export type FeedbackListType = FeedbackType[];
