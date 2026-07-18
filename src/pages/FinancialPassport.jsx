import Navbar from "../components/Navbar";

function FinancialPassport() {

    return (

        <>

            <Navbar />

            <div className="container" style={{padding:"50px 0"}}>

                <h1>Universal Financial Passport</h1>

                <br/>

                <div style={{
                    background:"white",
                    padding:"30px",
                    borderRadius:"12px",
                    boxShadow:"0 4px 15px rgba(0,0,0,.08)"
                }}>

                    <h2>Passport ID: UAFI-2026-001</h2>

                    <br/>

                    <table style={{width:"100%"}}>

                        <tbody>

                            <tr>

                                <td>Trust Score</td>

                                <td>92/100</td>

                            </tr>

                            <tr>

                                <td>Income Stability</td>

                                <td>95%</td>

                            </tr>

                            <tr>

                                <td>Savings Discipline</td>

                                <td>90%</td>

                            </tr>

                            <tr>

                                <td>Payment Reliability</td>

                                <td>98%</td>

                            </tr>

                            <tr>

                                <td>Fraud Risk</td>

                                <td>5%</td>

                            </tr>

                        </tbody>

                    </table>

                    <br/>

                    <button
                        style={{
                            background:"#34A853",
                            color:"white",
                            padding:"12px 25px",
                            borderRadius:"8px"
                        }}
                    >
                        Download Passport
                    </button>

                </div>

            </div>

        </>

    );

}

export default FinancialPassport;
