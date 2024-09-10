import IPRHead from "./IPRHead";
import NavBar from "../components/NavBar";
import IPRservices from "./IPRservices";
import IPRAppProcess from "./IPRAppProcess";
import Footer from "../components/Footer";
import IPRNavbar from "../NavBars/IPRNavbar";
import IPRFooter from "../Footers/IPRFooter";

export default function IPRHomePage() {
  return (
    <div>
      <IPRNavbar />
      <IPRHead />
      <IPRservices />
      <IPRAppProcess />
      <IPRFooter />
    </div>
  );
}
