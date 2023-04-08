import Header from "../conponents/Header"
import SimpleSlider from "../conponents/Roundimg"
import Service from "../conponents/Service"
import Footer from "../conponents/Footer"

function Home() {
    return(
        <div>
            <Header classname="layoutHeader" />
            <div className="content">
                <img className="mainimg" src="public/images/main.jpg" alt="main" />
            </div>
            <SimpleSlider/>
            <Service/>
            <Footer/>
        </div>
    );
}

export default Home;