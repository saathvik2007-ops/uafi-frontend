import Navbar from "../components/Navbar";

function UploadDocuments() {

    return (

        <>

            <Navbar />

            <div className="container" style={{padding:"50px 0"}}>

                <h1>Upload Financial Documents</h1>

                <br/>

                <div style={{
                    background:"white",
                    padding:"30px",
                    borderRadius:"12px",
                    boxShadow:"0 4px 15px rgba(0,0,0,.08)"
                }}>

                    <p>Upload salary slips, bank statements, utility bills and investment proofs.</p>

                    <br/>

                    <input type="file" multiple />

                    <br/><br/>

                    <button
                        style={{
                            background:"#1A73E8",
                            color:"white",
                            padding:"12px 25px",
                            borderRadius:"8px"
                        }}
                    >
                        Upload Documents
                    </button>

                </div>

            </div>

        </>

    );

}

export default UploadDocuments;
