import Header from "../conponents/Header"
import SimpleSlider from "../conponents/Roundimg"
import Service from "../conponents/Service"
import Footer from "../conponents/Footer"

function Home() {
    return(
        <div>
            <Header classname="layoutHeader" />
            <Service/>
            <SimpleSlider/>
            <Footer/>
        </div>
    );
}

export default Home;