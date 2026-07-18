import Navbar from "../components/Navbar";

function Login() {

    return (

        <>

            <Navbar />

            <div className="container" style={{padding:"60px 0"}}>

                <div style={{
                    maxWidth:"400px",
                    margin:"auto",
                    background:"white",
                    padding:"30px",
                    borderRadius:"12px",
                    boxShadow:"0 4px 15px rgba(0,0,0,.08)"
                }}>

                    <h2>Login</h2>

                    <br/>

                    <input type="email" placeholder="Email" />

                    <input type="password" placeholder="Password" />

                    <button
                        style={{
                            width:"100%",
                            background:"#1A73E8",
                            color:"white",
                            padding:"12px",
                            borderRadius:"8px"
                        }}
                    >
                        Login
                    </button>

                    <br/><br/>

                    <button
                        style={{
                            width:"100%",
                            background:"#34A853",
                            color:"white",
                            padding:"12px",
                            borderRadius:"8px"
                        }}
                    >
                        Continue with Google
                    </button>

                </div>

            </div>

        </>

    );

}

export default Login;
