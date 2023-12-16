import "./App.css";
import Jumbotron from "./Components/Jumbotron";
import AppNavbar from "./Components/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navigasi-bar");
    if (window.scrollY > 20) {
      navbar.classList.add("shadow"); // Menambah kelas 'shadow' pada navbar saat scroll > 20
    } else {
      navbar.classList.remove("shadow"); // Menghapus kelas 'shadow' jika scroll <= 20
    }
  });
  return (
    <>
      <AppNavbar />
      <Jumbotron />
      <About />
      <Skill />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
