export const isValidDate = (date: string, time: string): boolean => {
  const today: Date = new Date();
  const selectedDate: Date = new Date(date);

  if (selectedDate >= today) return true;

  if (selectedDate.toDateString() === today.toDateString()) {
    const [selectedHours, selectedMinutes]: number[] = time
      .split(":")
      .map(Number);

    const currentHours: number = today.getHours();
    const currentMinutes: number = today.getMinutes();

    return (
      selectedHours > currentHours ||
      (selectedHours === currentHours && selectedMinutes > currentMinutes)
    );
  }

  return false;
};

export const isValidPlayers = (players: number): boolean => {
  return players >= 1 && players <= 40;
};

export const isValidLanes = (lanes: number): boolean => {
  return lanes >= 1 && lanes <= 10;
};

export const isValidLaneAllocation = (
  players: number,
  lanes: number,
): boolean => {
  return players / lanes <= 4;
};

export const validateBooking = (
  date: string,
  time: string,
  players: number,
  lanes: number,
  shoes: string[],
): string | null => {
  if (!isValidDate(date, time)) {
    return "Booking date cannot be in the past, and time must be in the future for today.";
  }

  if (!isValidPlayers(players)) {
    return "Number of players must be between 1 and 40.";
  }

  if (!isValidLanes(lanes)) {
    return "Number of lanes must be between 1 and 10.";
  }

  if (!isValidLaneAllocation(players, lanes)) {
    return "Each lane can accommodate a maximum of 4 players.";
  }

  if (shoes.some((size) => size.trim() === "")) {
    return "Please fill in all shoe sizes.";
  }

  if (
    shoes.some(
      (size) => isNaN(Number(size)) || Number(size) < 30 || Number(size) > 50,
    )
  ) {
    return "Shoe sizes must be between 30 and 50.";
  }

  return null;
};
