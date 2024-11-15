import { useState } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { createBooking, BookingRequest } from "../services/api.ts";
import { validateBooking } from "../utilities/inputValidation.ts";
import Header from "../components/Header.tsx";
import Container from "../components/Container.tsx";
import Transition from "../components/Transition.tsx";
import Divider from "../components/Divider.tsx";
import Input from "../components/Input.tsx";
import InputSection from "../components/InputSection.tsx";
import Button from "../components/Button.tsx";
import InputError from "../components/InputError.tsx";
import logo from "../assets/logo.svg";

const Booking: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [players, setPlayers] = useState<number>(1);
  const [lanes, setLanes] = useState<number>(1);
  const [shoes, setShoes] = useState<string[]>([""]);
  const [error, setError] = useState<string | null>(null);

  const navigate: NavigateFunction = useNavigate();

  const handlePlayerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const playerCount = Number(e.target.value);
    setPlayers(playerCount);

    setShoes((prevShoes) =>
      playerCount > prevShoes.length
        ? [...prevShoes, ...Array(playerCount - prevShoes.length).fill("")]
        : prevShoes.slice(0, playerCount),
    );
  };

  const handleShoeSizeChange = (index: number, value: string): void => {
    setShoes((prevShoes) => {
      const updatedShoes = [...prevShoes];
      updatedShoes[index] = value;
      return updatedShoes;
    });
  };

  const handleBooking = async (): Promise<void> => {
    const when = `${date}, ${time}`;

    const validationError: string | null = validateBooking(
      date,
      time,
      players,
      lanes,
      shoes,
    );

    if (validationError) {
      setError(validationError);
      return;
    }

    const bookingData: BookingRequest = {
      when,
      lanes,
      people: players,
      shoes: shoes.map(Number),
    };

    try {
      const response = await createBooking(bookingData);
      localStorage.setItem("booking", JSON.stringify(response));
      navigate("/confirmation");
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Failed to create booking. Please try again.");
    }
  };

  return (
    <>
      <Header />

      <Container>
        <Transition>
          <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <section className="flex flex-col items-center justify-center">
              <img src={logo} alt="logo" className="h-[110px] w-[76px]" />
              <h1 className="font-primary text-[3.75rem] leading-[72px] text-primary">
                BOOKING
              </h1>
            </section>

            <Divider dividerText="WHEN, WHAT & WHO" />

            <InputSection>
              <div className="flex w-full items-center justify-center gap-5">
                <Input
                  type="date"
                  name="date"
                  id="date"
                  label="DATE"
                  min={new Date().toISOString().split("T")[0]}
                  max={
                    new Date(new Date().setMonth(new Date().getMonth() + 2))
                      .toISOString()
                      .split("T")[0]
                  }
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <Input
                  type="time"
                  name="time"
                  id="time"
                  label="TIME"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <Input
                type="number"
                name="players"
                id="players"
                label="NUMBER OF AWESOME BOWLERS"
                min={1}
                max={40}
                value={String(players)}
                onChange={handlePlayerChange}
              />

              <Input
                type="number"
                name="lanes"
                id="lanes"
                label="NUMBER OF LANE"
                min={1}
                max={10}
                value={String(lanes)}
                onChange={(e) => setLanes(Number(e.target.value))}
              />
            </InputSection>

            <Divider dividerText="SHOES" />

            <InputSection>
              {shoes.map((size, index) => (
                <Input
                  type="number"
                  key={index}
                  name={`shoe-${index}`}
                  id={`shoe-${index}`}
                  label={`SHOE SIZE / PERSON ${index + 1}`}
                  min={30}
                  max={50}
                  value={size}
                  placeholder="size 30-50"
                  onChange={(e) => handleShoeSizeChange(index, e.target.value)}
                />
              ))}
            </InputSection>

            {error && <InputError>{error}</InputError>}

            <Button onClick={handleBooking}>STRIIIIIIKE!</Button>
          </div>
        </Transition>
      </Container>
    </>
  );
};

export default Booking;
