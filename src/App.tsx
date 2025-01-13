import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [genshinPull, setGenshinPull];
  const randomGenshin = () => {
    const RGP = await fetch(`http://localhost:3000/character`);
    if (!Response.ok)
      throw new Error("There's an error in fetching the characters.");
    const data = await RGP.json();
    setGenshinPull(data);
  };
  return (
    <div className="">
      <h1>Genshin Impact Rolling</h1>
      <p>Roll your Genshin Character or roll for a weapon.</p>
    </div>
  );
};

export default App;
