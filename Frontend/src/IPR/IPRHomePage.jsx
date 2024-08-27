
import IPRHead from "./IPRHead";
import NavBar from "../components/NavBar";
import IPRservices from "./IPRservices";
import IPRAppProcess from "./IPRAppProcess";
import Footer from "../components/Footer";
export default function IPRHomePage(){
        return(
            <div>
                <NavBar/>
                <IPRHead/> 
                <IPRservices/>
                <IPRAppProcess/>
                <Footer/>
                
            </div>
        )
}