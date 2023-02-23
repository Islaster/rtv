import Header from "../../components/about/firstsection/header";
import Group from "../../components/about/fourthsection/group";
import Values from "../../components/about/secondsection/values";
import Mission from "../../components/about/thirdsection/mission";

export default function AboutUs() {
  document.title = "About Us";
  return (
    <>
      <Header />
      <Values />
      <Mission />
      <Group />
    </>
  );
}
