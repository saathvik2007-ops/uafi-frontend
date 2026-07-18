import Navbar from "../components/Navbar";

function NotFound() {

    return (

        <>

            <Navbar />

            <div style={{
                minHeight:"70vh",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                textAlign:"center"
            }}>

                <h1 style={{fontSize:"80px",color:"#EA4335"}}>404</h1>

                <h2>Page Not Found</h2>

                <br/>

                <p>The page you are looking for does not exist.</p>

            </div>

        </>

    );

}

export default NotFound;
