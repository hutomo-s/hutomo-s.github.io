import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'assets/app.css';
import Navbar from 'components/navbar/Navbar';
import Jumbotron from 'components/home/Jumbotron';
import About from 'components/home/About';
import Education from 'components/home/Education';
import CoreValues from 'components/home/CoreValues';
import Experience from 'components/home/Experience';
import Skills from 'components/home/Skills';
import Portfolio from 'components/home/Portfolio';
import Connect from 'components/home/Connect';
import Footer from 'components/footer/Footer';

function HomePage() {

  return (
    <div className="App">

      <Navbar />
      
      <Jumbotron />
      
      <div className="bg-grey">
        <About />
      </div>

      <Education />

      <div className="bg-grey">
        <CoreValues />
      </div>

      <Experience />      

      <div className="bg-grey">
        <Skills />
      </div>

      <Portfolio />

      <div className="bg-grey">
        <Connect />
      </div>

      <Footer />

    </div>
  );
}

export default HomePage;