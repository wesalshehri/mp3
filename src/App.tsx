import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import References from "./pages/References";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer.tsx";

function Root() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/references" element={<References />} />
                <Route path="/calculator" element={<Calculator />} />
            </Routes>
            <Footer />
        </div>
    );
}

// Define the router using createBrowserRouter
const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
    return <RouterProvider router={router} />;
}
