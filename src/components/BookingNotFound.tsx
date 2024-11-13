import { Link } from "react-router-dom";
import Header from "./Header";
import Container from "./Container";
import Divider from "./Divider";
import InputError from "./InputError";
import Button from "./Button";
import logo from "../assets/logo.svg";

const BookingNotFound = () => {
  return (
    <>
      <Header />

      <Container>
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <section className="flex flex-col items-center justify-center">
            <img src={logo} alt="logo" className="h-[110px] w-[76px]" />
            <h1 className="font-primary text-[3.75rem] leading-[72px] text-primary">
              BOOKING NOT FOUND
            </h1>
          </section>

          <Divider dividerText="SEE YOU SOON" />

          <InputError>
            <p>Booking information not found. Please make a booking first.</p>
          </InputError>

          <Divider dividerText="SEE YOU SOON" />

          <Link to="/booking">
            <Button>Go to Booking</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default BookingNotFound;
