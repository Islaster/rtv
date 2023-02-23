import Client from "../../components/TransHousing/Client/Client";
import Header from "../../components/TransHousing/Header/Header";
import Retraining from "../../components/TransHousing/Retraining/Retraining";
import Veteran from "../../components/TransHousing/Veteran/Veteran";

export default function TransHousing() {
  document.title = "Transitional Housing";
  return (
    <>
      <Header />
      <Retraining />
      <Veteran />
      <Client />
    </>
  );
}
