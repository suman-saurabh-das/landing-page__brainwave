import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';

const App = () => {
  return (
    <>
      {/* We have added padding top (pt-[4.75rem] lg:pt-[5.25rem]) because Header is fixed and we do not want it to overlap with the content above i.e. Navbar */}
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefits />
      </div>
      {/* ButtonGradient is an svg using which we are giving a gradient effect to the button */}
      <ButtonGradient />
    </>
  )
};

export default App;
