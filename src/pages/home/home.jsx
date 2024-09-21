import Landing from "../../components/landing_page/landing";
import Navbar from "../../components/navbar/navbar";
import "./home.css";
function Home(){
    return(
        <>
         <Navbar active={"home"}/>
         <Landing/>
        </>
    )
}

export default Home;