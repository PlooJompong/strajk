import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { createBooking, BookingRequest } from "../utilities/api.ts";
import Header from "../components/Header.tsx";
import Container from "../components/Container.tsx";
import Divider from "../components/Divider.tsx";
import Input from "../components/Input.tsx";
import InputSection from "../components/InputSection.tsx";
import Button from "../components/Button.tsx";
import logo from "../assets/logo.svg";

const Booking: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [players, setPlayers] = useState<number>(1);
  const [lanes, setLanes] = useState<number>(1);
  const [shoes, setShoes] = useState<string[]>([""]);
  const navigate: NavigateFunction = useNavigate();

  const handlePlayerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const playerCount = Number(e.target.value);
    setPlayers(playerCount);

    if (playerCount > shoes.length) {
      setShoes([...shoes, ...Array(playerCount - shoes.length).fill("")]);
    } else if (playerCount < shoes.length) {
      setShoes(shoes.slice(0, playerCount));
    }
  };

  const handleShoeSizeChange = (index: number, value: string): void => {
    const updatedShoes = [...shoes];
    updatedShoes[index] = value;
    setShoes(updatedShoes);
  };

  const handleBooking = async (): Promise<void> => {
    const when = `${date}, ${time}`;

    const bookingData: BookingRequest = {
      when,
      lanes,
      people: players,
      shoes: shoes.map(Number),
    };

    try {
      const response = await createBooking(bookingData);
      console.log("Booking successful:", response);
      navigate("/confirmation", { state: response });
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Failed to create booking. Please try again.");
    }
  };

  return (
    <>
      <Header />

      <Container>
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
                inputType="date"
                inputName="date"
                inputId="date"
                placeholder="DATE"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <Input
                inputType="time"
                inputId="time"
                inputName="time"
                placeholder="TIME"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <Input
              inputType="number"
              inputId="players"
              inputName="players"
              placeholder="NUMBER OF AWESOME BOWLERS"
              value={String(players)}
              onChange={handlePlayerChange}
            />

            <Input
              inputType="number"
              inputId="lanes"
              inputName="lanes"
              placeholder="NUMBER OF LANE"
              value={String(lanes)}
              onChange={(e) => setLanes(Number(e.target.value))}
            />
          </InputSection>

          <Divider dividerText="SHOES" />

          <InputSection>
            {shoes.map((size, index) => (
              <Input
                inputType="number"
                key={index}
                inputId={`shoe-${index}`}
                inputName={`shoe-${index}`}
                placeholder={`SHOE SIZE / PERSON ${index + 1}`}
                value={size}
                onChange={(e) => handleShoeSizeChange(index, e.target.value)}
              />
            ))}
          </InputSection>

          <Button onClick={handleBooking}>STRIIIIIIKE!</Button>
        </div>
      </Container>
    </>
  );
};

export default Booking;
