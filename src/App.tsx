import { useState } from "react";
import { Character, Weapon } from "./interface/GenshinInterface";

const Genshin = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [weapon, setWeapon] = useState<Weapon | null>(null);

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
    <div className="bg-blue-950 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-white text-3xl font-bold mb-6">
        Genshin Impact Pull
      </h1>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={fetchRandomCharacter}
          className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-500"
        >
          Get Random Character
        </button>
        <button
          onClick={fetchRandomWeapon}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-400"
        >
          Get Random Weapon
        </button>
      </div>

      <div className="flex flex-row items-center space-x-8">
        {character && (
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <img
              src={`https://genshin.jmp.blue/characters/${character.id}/gacha-card`}
              alt={character.name}
              className="w-48 h-auto rounded-lg mb-4"
            />
            <p className="text-lg font-semibold">{character.name}</p>
          </div>
        )}

        {weapon && (
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <img
              src={`https://genshin.jmp.blue/weapons/${weapon.id}/icon`}
              alt={weapon.name}
              className="w-48 h-auto rounded-lg mb-4"
            />
            <p className="text-lg font-semibold">{weapon.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Genshin;
