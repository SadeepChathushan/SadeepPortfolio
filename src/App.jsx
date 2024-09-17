import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Education } from "./components/Education/Education";


function App() {
  

  return (<div className={styles.App} >
      <Navbar/>
      <Hero/>
      <About/>
      <Experience />
      <Education/>
      <Contact  />
    </div>
  );
}

export default App;
