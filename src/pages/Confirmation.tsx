import { Link } from "react-router-dom";
import Header from "../components/Header.tsx";
import Container from "../components/Container.tsx";
import logo from "../assets/logo.svg";
import Divider from "../components/Divider.tsx";
import InputSection from "../components/InputSection.tsx";
import Button from "../components/Button.tsx";
import Details from "../components/Details.tsx";

const Confirmation = () => {
  return (
    <>
      <Header />

      <Container>
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <section className="flex flex-col items-center justify-center">
            <img src={logo} alt="logo" className="h-[110px] w-[76px]" />
            <h1 className="font-primary text-[60px] leading-[72px] text-primary">
              SEE YOU SOON!
            </h1>
          </section>

          <Divider dividerText="BOOKING DETAILS" />

          <InputSection>
            <Details placeholder="WHEN" />
            <Details placeholder="WHO" />
            <Details placeholder="LANES" />
            <Details placeholder="BOOKING NUMBER" />
            <div className="mt-5 flex w-full items-center justify-between rounded border border-primary bg-transparent p-2 text-primary">
              <p className="font-bold">total</p>
              <p> 460sek</p>
            </div>
          </InputSection>

          <Link to="/booking" className="w-full max-w-96">
            <Button>SWEET, LET'S GO!</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Confirmation;
