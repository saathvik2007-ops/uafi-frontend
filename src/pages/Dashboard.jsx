import Navbar from "../components/Navbar";

function Dashboard() {

    return (

        <>

            <Navbar />

            <div className="container" style={{padding:"50px 0"}}>

                <h1>Dashboard</h1>

                <br/>

                <div style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
                    gap:"20px"
                }}>

                    <div style={{
                        background:"white",
                        padding:"20px",
                        borderRadius:"12px",
                        boxShadow:"0 4px 15px rgba(0,0,0,.08)"
                    }}>
                        <h3>Trust Score</h3>
                        <h1>92</h1>
                    </div>

                    <div style={{
                        background:"white",
                        padding:"20px",
                        borderRadius:"12px",
                        boxShadow:"0 4px 15px rgba(0,0,0,.08)"
                    }}>
                        <h3>Income Stability</h3>
                        <h1>95%</h1>
                    </div>

                    <div style={{
                        background:"white",
                        padding:"20px",
                        borderRadius:"12px",
                        boxShadow:"0 4px 15px rgba(0,0,0,.08)"
                    }}>
                        <h3>Savings</h3>
                        <h1>90%</h1>
                    </div>

                    <div style={{
                        background:"white",
                        padding:"20px",
                        borderRadius:"12px",
                        boxShadow:"0 4px 15px rgba(0,0,0,.08)"
                    }}>
                        <h3>Fraud Risk</h3>
                        <h1>5%</h1>
                    </div>

                </div>

            </div>

        </>

    );

}

export default Dashboard;
