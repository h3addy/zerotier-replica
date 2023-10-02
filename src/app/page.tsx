"use client";

import Capabilities from "./components/home/Capabilities";
import Community from "./components/home/Community";
import Feedback from "./components/home/Feedback";
import ReleaseNotification from "./components/home/ReleaseNotification";
import Pricing from "./components/home/Pricing";
import ServiceProviders from "./components/home/ServiceProviders";
import Subscribe from "./components/home/Subscribe";
import TeamSize from "./components/home/TeamSize";
import ZerotierEnterprise from "./components/home/ZerotierEnterprise";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <main className="bg-bg-primary w-full h-full">
      <Hero />
      <ReleaseNotification />
      <Capabilities />
      <Feedback />
      <TeamSize />
      <Pricing />
      <ZerotierEnterprise />
      <ServiceProviders />
      <Community />
      <Subscribe />
    </main>
  );
}
