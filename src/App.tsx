import { Link, Route, Routes } from "react-router";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import MenuPage from "@/pages/MenuPage";
import VotePage from "@/pages/VotePage";
import RequestsPage from "@/pages/RequestsPage";
import StaffPage from "@/pages/StaffPage";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/vote" element={<VotePage />} />
                <Route path="/requests" element={<RequestsPage />} />
                <Route path="/staff" element={<StaffPage />} />
                <Route path="*" element={<main style={{ padding: 40 }}><h1>Page not found</h1><Link to="/">Return home</Link></main>} />
            </Routes>
        </>
    );
}
