import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import Search from "./pages/search/Search";
import Errorpage from "./pages/Errorpage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        {/*  : -> 경로에 변수 */}
        <Route path="/search" element={<Search />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
