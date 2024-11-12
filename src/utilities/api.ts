import axios from "axios";

const API_URL = "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com";
const API_KEY = "738c6b9d-24cf-47c3-b688-f4f4c5747662";

export type BookingRequest = {
  when: string;
  lanes: number;
  people: number;
  shoes: number[];
};

export type BookingResponse = {
  when: string;
  lanes: number;
  people: number;
  shoes: number[];
  price: number;
  id: string;
  active: boolean;
};

export const createBooking = async (
  bookingData: BookingRequest,
): Promise<BookingResponse> => {
  try {
    const response = await axios.post<BookingResponse>(
      `${API_URL}`,
      bookingData,
      {
        headers: {
          "Content-Type": "text/plain",
          "x-api-key": API_KEY,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};
