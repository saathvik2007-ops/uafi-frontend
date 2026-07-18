import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {

    return (

        <>

            <Navbar />

            <div className="container" style={{padding:"60px 0"}}>

                <h1>Universal AI Financial Identity</h1>

                <br/>

                <p>

                    Build a trusted digital financial identity using AI-powered
                    financial analysis, secure document verification, and
                    privacy-preserving trust scoring.

                </p>

                <br/>

                <button
                    style={{
                        background:"#1A73E8",
                        color:"white",
                        padding:"12px 25px",
                        borderRadius:"8px"
                    }}
                >
                    Get Started
                </button>

            </div>

            <Footer />

        </>

    );

}

export default Home;
