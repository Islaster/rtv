import WhiteHeader from "../../components/Landing/FifthSection/WhiteHeader";
import One from "../../components/Landing/FirstSection/One";
import LightPurple from "../../components/Landing/FourthSection/LightPurple";
import WhatWeDo from "../../components/Landing/SecondSection/WhatWeDo";
import WhoWeAre from "../../components/Landing/SeventhSection/WhoWeAre";
import Donate from "../../components/Landing/SixthSection/MintBackground";
import HelpingHand from "../../components/Landing/ThirdSection/HelpingHand";
import Volunteer from "../../components/Landing/Volunteer/Volunteer";
export default function Landing() {
  document.title = "Retraining the Village";
  return (
    <>
      <One />
      <WhatWeDo />
      <HelpingHand />
      <LightPurple />
      <WhiteHeader />
      <Donate />
      <WhoWeAre />
      <Volunteer />
    </>
  );
}
