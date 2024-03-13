import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay"; // Import the GamePlay component
import RollDice from "./components/RollDice";




function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
