import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./components/Style.css";
import MainPageLayout from "./pages/MainPageLayout";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPageLayout />}>
      <Route index element={<LandingPage />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
