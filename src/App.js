import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact.js";
import LoanCalc from "./pages/LoanCalc";
import Inventory from "./pages/Inventory";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import SingleCar from "./pages/SingleCar";
import Warranty from "./pages/Warranty";
function App() {
  const themeday = {
    colors: {
      bgbody: "#f0f2f5",
      bgnav: "#fff",
      bgfooter: "#fff",
      bgform: "#fff",
      bginputbox1: "#f5f6f7",
      bginputbox2: "#f0f1f8",
      bgbtn: "rgb(24,119,242)",
      xtnav1: "#576b95",
      xtnav2: "rgb(24,119,242)",
      xtbtn: "#fff",
      bgformleft: "#afafb6",
      xtform2: "#576b95",
      xtblue: "#576b95",
      xtheading: "#1c1e21",
      text: "#4d5156",
      bdrline2: "2px solid #dadde1",
      bdrbtn1: "2px solid #bec3c9",
      shdnavbotm: "0px 2px 6.5px #888888",
      boxoutshadow: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
      shdbtnxt: "0 -1px rgba(0, 0, 0, .25)",
      xtfoot1: "#737373",
      xtfoot2: "#8a8d91",
      xtfoot3: "#90949c",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={themeday}>
      <BrowserRouter>
        <GlobalStyle />
        <div id="main">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about-us"
              element={<About />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/loan"
              element={<LoanCalc />}
            />
            <Route
              path="/inventory"
              element={<Inventory />}
            />
            <Route
              path="/warranty"
              element={<Warranty />}
            />
            <Route
              path="/admin"
              element={<Admin />}
            />
            <Route
              path="/car/:carId"
              element={<SingleCar />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
