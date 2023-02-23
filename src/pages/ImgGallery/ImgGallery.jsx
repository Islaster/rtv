import Header from "../../components/imgGallery/Header/Header";
import Gallery from "../../components/imgGallery/Gallery/Gallery";

export default function IMGGallery() {
  document.title = "Image Gallery";
  return (
    <>
      <Header />
      <Gallery />
    </>
  );
}
