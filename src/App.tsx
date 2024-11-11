import Loading from "./pages/Loading.tsx";
import Booking from "./pages/Booking.tsx";
import Confirmation from "./pages/Confirmation.tsx";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
};

export default App;
