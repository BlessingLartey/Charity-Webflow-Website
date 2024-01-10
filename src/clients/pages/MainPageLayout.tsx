import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MainPageLayout() {
  return (
    <>
      <Header />
      <main style={{ padding: "0px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainPageLayout;
