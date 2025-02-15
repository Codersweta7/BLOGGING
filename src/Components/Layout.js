import Footer from "./Footer.js";
import Header from "./Header.js";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "../context/SearchContext.js";

export default function Layout() {
  return (
    <SearchProvider>
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
    </SearchProvider>
  );
}
