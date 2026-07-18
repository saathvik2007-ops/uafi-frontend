import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UploadDocuments from "./pages/UploadDocuments";
import FinancialPassport from "./pages/FinancialPassport";
import NotFound from "./pages/NotFound";

function App() {

    return (

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/upload" element={<UploadDocuments />} />

            <Route path="/passport" element={<FinancialPassport />} />

            <Route path="*" element={<NotFound />} />

        </Routes>

    );

}

export default App;
