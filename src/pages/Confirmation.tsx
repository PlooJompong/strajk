import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookingResponse } from "../services/api.ts";
import Header from "../components/Header.tsx";
import Container from "../components/Container.tsx";
import Transition from "../components/Transition.tsx";
import Divider from "../components/Divider.tsx";
import InputSection from "../components/InputSection.tsx";
import Details from "../components/Details.tsx";
import Button from "../components/Button.tsx";
import BookingNotFound from "../components/BookingNotFound.tsx";
import logo from "../assets/logo.svg";

const Confirmation: React.FC = () => {
  const [bookingData, setBookingData] = useState<BookingResponse | null>(null);

  useEffect(() => {
    const storedBooking: string | null = localStorage.getItem("booking");
    if (storedBooking) {
      setBookingData(JSON.parse(storedBooking));
    }
  }, []);

  if (!bookingData) {
    return <BookingNotFound />;
  }

  const { when, lanes, people, id, price } = bookingData;

  return (
    <>
      <Header />

      <Container>
        <Transition>
          <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <section className="flex flex-col items-center justify-center">
              <img src={logo} alt="logo" className="h-[110px] w-[76px]" />
              <h1 className="font-primary text-[3.75rem] leading-[72px] text-primary">
                SEE YOU SOON!
              </h1>
            </section>

            <Divider dividerText="BOOKING DETAILS" />

            <InputSection>
              <Details placeholder="WHEN" text={when} />
              <Details
                placeholder="WHO"
                text={`${people === 1 ? "1 per" : `${people} pers`} `}
              />
              <Details
                placeholder="LANES"
                text={`${lanes === 1 ? "1 lane" : `${lanes} lanes`} `}
              />
              <Details placeholder="BOOKING NUMBER" text={id} />

              <div className="mt-5 flex w-full items-center justify-between rounded border border-primary bg-transparent p-2 text-primary">
                <p className="font-bold">total</p>
                <p>{`${price} SEK`}</p>
              </div>
            </InputSection>

            <Link to="/booking" className="w-full max-w-96">
              <Button>NEW BOOKING!</Button>
            </Link>
          </div>
        </Transition>
      </Container>
    </>
  );
};

export default Confirmation;
