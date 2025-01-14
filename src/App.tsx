import { useState, useEffect } from "react";
import { fetchCharacters, fetchWeapons } from "../server/GenshinExpress";
import "./App.css";

type GachaType = "standard" | "weapon";

const GachaSimulator = () => {
  const [primogems, setPrimogems] = useState(32000);
  const [characters, setCharacters] = useState<any[]>([]);
  const [weapons, setWeapons] = useState<any[]>([]);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      const charData = await fetchCharacters();
      console.log("Character data:", charData);
      const weaponData = await fetchWeapons();
      console.log("Weapon data:", weaponData);
      setCharacters(charData);
      setWeapons(weaponData);
    };
    loadData();
  }, []);

  const handlePull = (type: GachaType) => {
    console.log(`Button clicked: ${type}`);
    if (primogems < 160) {
      alert("Not enough primogems!");
      return;
    }

    setPrimogems((prev) => prev - 160);

    const isWeaponWish = type === "weapon";
    const randomNum = Math.random();
    let newResult;

    if (isWeaponWish) {
      if (randomNum <= 0.007) {
        const randomItem =
          characters[Math.floor(Math.random() * characters.length)];
        newResult = { type: "5-star", data: randomItem };
      } else if (randomNum <= 0.06) {
        const randomItem =
          characters[Math.floor(Math.random() * characters.length)];
        newResult = { type: "4-star", data: randomItem };
      } else {
        const randomItem = weapons[Math.floor(Math.random() * weapons.length)];
        newResult = { type: "3-star", data: randomItem };
      }
    } else {
      if (randomNum <= 0.006) {
        const randomItem =
          characters[Math.floor(Math.random() * characters.length)];
        newResult = { type: "5-star", data: randomItem };
      } else if (randomNum <= 0.051) {
        const randomItem =
          characters[Math.floor(Math.random() * characters.length)];
        newResult = { type: "4-star", data: randomItem };
      } else {
        const randomItem = weapons[Math.floor(Math.random() * weapons.length)];
        newResult = { type: "3-star", data: randomItem };
      }
    }

    console.log("Pull result:", newResult);
    setResult(newResult);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Gacha Simulator</h1>
      <div>
        <p>Primogems: {primogems}</p>
        <button onClick={() => handlePull("standard")} className="btn-standard">
          Standard Wish
        </button>
        <button onClick={() => handlePull("weapon")} className="btn-weapon">
          Weapon Wish
        </button>

        {/* Display results */}
        {result && result.data && (
          <div className="result mt-4 flex align-items-center justify-between">
            {result.data.type === "character" ? (
              <img
                src={`https://genshin.jmp.blue/characters/${result.data.id}/gacha-card`}
                alt={result.data.name}
              />
            ) : (
              <img
                src={`https://genshin.jmp.blue/weapons/${result.data.id}/gacha-card`}
                alt={result.data.name}
              />
            )}
            <p>{`${result.type} ${result.data.name}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GachaSimulator;
