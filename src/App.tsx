import "./App.css";
import Home from "./assets/Pages/Home";
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
/* @ts-ignore */
import Lenis from "@studio-freight/lenis";

import { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./assets/components/Header";
import About from "./assets/Pages/About";
import Work from "./assets/Pages/Work";
import Footer from "./assets/components/Footer";
import { BubblyContainer } from "react-bubbly-transitions";
import Projectshowcase from "./assets/components/Projectshowcase";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  /* @ts-ignore */
  // const [scrollPosition, setscrollPosition] = useState(0);

  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  /* @ts-ignore */
  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    duration: 1.2,
    easing: (t: never) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  /* @ts-ignore */
  function raf(time: Lenis) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/work", element: <Work /> },
    { path: "/work/:id", element: <Projectshowcase /> },
  ];
  return (
    <BrowserRouter>
      <BubblyContainer />
      <Header />
      <ScrollToTop />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
