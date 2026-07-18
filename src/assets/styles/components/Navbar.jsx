import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav style={{
            background:"#1A73E8",
            color:"white",
            padding:"15px 30px",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        }}>

            <h2>UAFI</h2>

            <div style={{display:"flex",gap:"20px"}}>

                <Link to="/">Home</Link>

                <Link to="/dashboard">Dashboard</Link>

                <Link to="/upload">Upload</Link>

                <Link to="/passport">Passport</Link>

                <Link to="/login">Login</Link>

            </div>

        </nav>

    );

}

export default Navbar;
