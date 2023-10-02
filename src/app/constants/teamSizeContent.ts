import { TeamSizeListType } from "../types";
import gameIcon from "../assets/images/game_icon_eba3d81511.webp";
import cloudIcon from "../assets/images/Cloud_Icon_3a0e68dbd5.webp";
import devopsIcon from "../assets/images/Dev_Ops_Icon_007d67a039.webp";
import globalIcon from "../assets/images/Global_Network_Icon_e85c3eca3d.webp";

export const teamSizeContent: TeamSizeListType = [
  {
    headerImgSrc: gameIcon,
    headerImgAlt: "game console",
    title: "Individuals",
    listItems: [
      "Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere",
      "Conveniently share files and data, or even play LAN games with others",
      "Manage secure network access to users of choice",
    ],
  },
  {
    headerImgSrc: cloudIcon,
    headerImgAlt: "cloud icon",
    title: "IT Teams",
    listItems: [
      "Simplify your network stack by unifying VPNs, VLANs, and SD-WANs with one solution",
      "Build, manage, and observe any number of remote, on premise, or cloud networks with one management interface",
      "Easily provision remote access for all of your users",
    ],
  },
  {
    headerImgSrc: devopsIcon,
    headerImgAlt: "devops icon",
    title: "DevOps",
    listItems: [
      "Quickly build backplane networks spanning multiple cloud providers",
      "Save on performance, storage, and bandwidth",
      "Administrate and debug from anywhere",
      "Secure corporate network overlay and failover layer",
    ],
  },
  {
    headerImgSrc: globalIcon,
    headerImgAlt: "global network icon",
    title: "Embedded",
    listItems: [
      "Enjoy vastly superior network control and functionality",
      "Develop and manage products or services running on their own decentralized networks",
      "Create 4G/5G-capable secure networks for any IoT, edge or embedded device that can operate on 64MB of RAM",
    ],
  },
];
