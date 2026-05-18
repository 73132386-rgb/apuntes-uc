import { useState } from "react";
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

  // Desktop abierto por defecto
  const [sidebarOpen, setSidebarOpen] = useState(
    typeof window !== "undefined"
      ? window.innerWidth > 900
      : true
  );

  const navigate = (p) => {
    setPage(p);

    // Mobile/tablet → cerrar drawer al navegar
    if (
      typeof window !== "undefined" &&
      window.innerWidth <= 900
    ) {
      setSidebarOpen(false);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pages = {
    home: <Home navigate={navigate} />,
    cursos: <Cursos navigate={navigate} />,
    apuntes: <Apuntes navigate={navigate} />,
    examenes: <Examenes navigate={navigate} />,
    docentes: <Docentes navigate={navigate} />,
    planes: <Planes navigate={navigate} />,
    login: <Login navigate={navigate} />,
  };

  // Páginas con sidebar
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

          <main
            className={`app-main ${
              showSidebar && sidebarOpen
                ? "sidebar-open"
                : ""
            }`}
          >
            {pages[page] ?? pages.home}
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