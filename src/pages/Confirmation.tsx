import { useState, useEffect } from "react";
import {
  useLocation,
  Link,
  Location,
  NavigateFunction,
  useNavigate,
} from "react-router-dom";
import { BookingResponse } from "../utilities/api.ts";
import Header from "../components/Header.tsx";
import Container from "../components/Container.tsx";
import Divider from "../components/Divider.tsx";
import InputSection from "../components/InputSection.tsx";
import Details from "../components/Details.tsx";
import Button from "../components/Button.tsx";
import BookingNotFound from "../components/BookingNotFound.tsx";
import logo from "../assets/logo.svg";

const Confirmation = () => {
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();

  const [bookingData, setBookingData] = useState<BookingResponse | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const stateData = location.state as BookingResponse | null;
    if (stateData) {
      setBookingData(stateData);
    } else {
      const storedBooking = localStorage.getItem("booking");
      if (storedBooking) {
        setBookingData(JSON.parse(storedBooking));
      } else {
        setError(true);
      }
    }
  }, [location.state, navigate]);

  if (error) {
    return <BookingNotFound />;
  }

  if (!bookingData) {
    return null;
  }

  const { when, lanes, people, id, price } = bookingData;

  return (
    <>
      <Header />

      <Container>
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <section className="flex flex-col items-center justify-center">
            <img src={logo} alt="logo" className="h-[110px] w-[76px]" />
            <h1 className="font-primary text-[3.75rem] leading-[72px] text-primary">
              SEE YOU SOON!
            </h1>
          </section>

          <Divider dividerText="BOOKING DETAILS" />

          <InputSection>
            <Details placeholder="WHEN" text={when || "N/A"} />
            <Details
              placeholder="WHO"
              text={`${people === 1 ? "1 per" : `${people} pers`} `}
            />
            <Details
              placeholder="LANES"
              text={`${lanes === 1 ? "1 lane" : `${lanes} lanes`} `}
            />
            <Details placeholder="BOOKING NUMBER" text={id || "N/A"} />
            <div className="mt-5 flex w-full items-center justify-between rounded border border-primary bg-transparent p-2 text-primary">
              <p className="font-bold">total</p>
              <p>{`${price || 0} SEK`}</p>
            </div>
          </InputSection>

          <Link to="/booking" className="w-full max-w-96">
            <Button onClick={() => {}}>NEW BOOKING!</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Confirmation;
