import { useState, useCallback } from "react";
import "./App.css";

import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Apuntes from "./pages/Apuntes";
import Examenes from "./pages/Examenes";
import Docentes from "./pages/Docentes";
import Planes from "./pages/Planes";
import Login from "./pages/Login";

export default function App() {
  const [page, setPage] = useState("home");
  const [navParams, setNavParams] = useState({});
  const [navKey, setNavKey] = useState(0);

  const [sidebarOpen, setSidebarOpen] = useState(
    typeof window !== "undefined" ? window.innerWidth > 900 : true
  );

  const navigate = useCallback((p, params = {}) => {
    setPage(p);
    setNavParams(params);
    setNavKey(k => k + 1);

    if (typeof window !== "undefined" && window.innerWidth <= 900) {
      setSidebarOpen(false);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const showSidebar = !["home", "login", "planes"].includes(page);

  return (
    <AuthProvider>
      <div className="app-shell">
        <Navbar
          page={page}
          navigate={navigate}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          showSidebar={showSidebar}
        />

        <div className="app-body">
          <Sidebar
            page={page}
            navigate={navigate}
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            show={showSidebar}
          />

          <main className={`app-main ${showSidebar && sidebarOpen ? "sidebar-open" : ""}`}>
            {page === "home"     && <Home     key={navKey} navigate={navigate} />}
            {page === "cursos"   && <Cursos   key={navKey} navigate={navigate} />}
            {page === "apuntes"  && <Apuntes  key={navKey} navigate={navigate} initialFilter={navParams} />}
            {page === "examenes" && <Examenes key={navKey} navigate={navigate} initialFilter={navParams} />}
            {page === "docentes" && <Docentes key={navKey} navigate={navigate} />}
            {page === "planes"   && <Planes   key={navKey} navigate={navigate} />}
            {page === "login"    && <Login    key={navKey} navigate={navigate} />}
          </main>
        </div>

        <Footer
          navigate={navigate}
          sidebarOpen={sidebarOpen}
          showSidebar={showSidebar}
        />
      </div>
    </AuthProvider>
  );
}