import { useState } from "react";
import { Button } from "@mui/joy";

export const App = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount((count) => count + 1);

  return (
    <Button onClick={increaseCount}>Kliknięto mnie już {count} razy</Button>
  );
};
