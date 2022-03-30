import "./styles.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      {/*<h1>Hello World!</h1>*/}
      <Header />
      <About />
      <Projects />
      <Footer />


      
    </div>
  );
}

export default App;
