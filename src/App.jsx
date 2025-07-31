import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import PlayPage from "./pages/Play";

import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import Banner from "./partials/Banner";

import "./css/style.css";

// Import pages
import LdnTopWealthDistro from "./pages/LdnTopWealthDistro";
import UkTopWealthDistro from "./pages/UkTopWealthDistro";
import UkBottomWealthDistro from "./pages/UkBottomWealthDistro";
import UkTopHundredWealthiest from "./pages/UkTopHundredWealthiest";
import UkGiniCoefficient from "./pages/UkGiniCoefficient";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className="grow">
            <Routes>
              <Route exact path="/" element={<UkTopWealthDistro />} />
              <Route
                exact
                path="/uk-bottom-wealth-distro"
                element={<UkBottomWealthDistro />}
              />
              <Route
                exact
                path="/uk-top-100-wealthiest"
                element={<UkTopHundredWealthiest />}
              />
              <Route
                exact
                path="/uk-gini-coefficient"
                element={<UkGiniCoefficient />}
              />
              <Route path="/play" element={<PlayPage />} />
              <Route
                exact
                path="/ldn-top-wealth-distro"
                element={<LdnTopWealthDistro />}
              />
            </Routes>
          </main>

          {/* <Banner /> */}
        </div>
      </div>
    </>
  );
}

export default App;
