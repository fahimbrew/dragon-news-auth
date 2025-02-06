import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNavbar from "../components/layout-components/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav>
        <section className="w-11/12 mx-auto">
          <Navbar />
        </section>
      </nav>
      <main className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LeftNavbar />
        </aside>
        <main className="col-span-6">
          <Outlet />
        </main>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
