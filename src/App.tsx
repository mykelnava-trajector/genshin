import { useState } from "react";

const GenshinImpact = () => {
  const [genshinCharacter, setGenshinCharacter] = useState<string>("");

  const randomizeGenshin = async () => {
    const fetchGenshin = await fetch(`http://localhost:3000/character`);
    const fetchGenshinData = await fetchGenshin.json();
    setGenshinCharacter(fetchGenshinData);
  };
  return <div></div>;
};
export default GenshinImpact;
