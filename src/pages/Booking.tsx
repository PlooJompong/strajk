import { Link } from "react-router-dom";
import Header from "../components/Header.tsx";
import Container from "../components/Container.tsx";
import logo from "../assets/logo.svg";
import Divider from "../components/Divider.tsx";
import Input from "../components/Input.tsx";
import InputSection from "../components/InputSection.tsx";
import Button from "../components/Button.tsx";

const Booking = () => {
  return (
    <>
      <Header />

      <Container>
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <section className="flex flex-col items-center justify-center">
            <img src={logo} alt="logo" className="h-[110px] w-[76px]" />
            <h1 className="font-primary text-[60px] leading-[72px] text-primary">
              BOOKING
            </h1>
          </section>

          <Divider dividerText="WHEN, WHAT & WHO" />

          <InputSection>
            <div className="flex w-full items-center justify-center gap-5">
              <Input
                inputType="date"
                inputName="date"
                inputId="date"
                placeholder="DATE"
              />
              <Input
                inputType="time"
                inputId="time"
                inputName="time"
                placeholder="TIME"
              />
            </div>

            <Input
              inputId="players"
              inputName="players"
              placeholder="NUMBER OF AWESOME BOWLERS"
            />

            <Input
              inputId="lanes"
              inputName="lanes"
              placeholder="NUMBER OF LANE"
            />
          </InputSection>

          <Divider dividerText="SHOES" />

          <InputSection>
            <Input
              inputId="shoes"
              inputName="shoes"
              // placeholder={`SHOE SIZE / PERSON ${x}}`
              placeholder="SHOE SIZE / PERSON 1"
            />
          </InputSection>

          <Link to="/confirmation" className="w-full max-w-96">
            <Button>STRIIIIIIKE!</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Booking;
