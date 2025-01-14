import { useState } from "react";
import "./App.css";

const GachaSimulator = () => {
  const [character, setCharacter] = useState<any>(null);
  const [weapon, setWeapon] = useState<any>(null);

  const fetchRandomCharacter = async () => {
    try {
      const response = await fetch("http://localhost:3000/character");
      const data = await response.json();
      setCharacter(data.character);
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  const fetchRandomWeapon = async () => {
    try {
      const response = await fetch("http://localhost:3000/weapons");
      const data = await response.json();
      setWeapon(data.weapon);
    } catch (error) {
      console.error("Error fetching weapon:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Gacha Simulator</h1>
      <div>
        <button onClick={fetchRandomCharacter} className="btn-standard">
          Get Random Character
        </button>
        <button onClick={fetchRandomWeapon} className="btn-weapon">
          Get Random Weapon
        </button>

        <div className="result mt-4">
          {character && (
            <div>
              <img
                src={`https://genshin.jmp.blue/characters/${character.id}/gacha-card`}
                alt={character.name}
              />
              <p>{character.name}</p>
            </div>
          )}
          {weapon && (
            <div>
              <img
                src={`https://genshin.jmp.blue/weapons/${weapon.id}/icon`}
                alt={weapon.name}
              />
              <p>{weapon.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GachaSimulator;
