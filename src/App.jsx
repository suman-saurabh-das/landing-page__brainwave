import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './components/Button';

const App = () => {
  return (
    <>
      <h1 className="text-3xl text-sky-600 font-bold">
        Brainwave 🌊
      </h1>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Button className="mt-10">
          Login
        </Button>
      </div>
      {/* ButtonGradient is an svg using which we are giving a gradient effect to the button */}
      <ButtonGradient />
    </>
  )
};

export default App;
