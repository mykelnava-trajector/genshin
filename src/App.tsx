import { useState } from "react";
import { Character, Weapon } from "./interface/GenshinInterface";
import Spinner from "./components/Spinner";

const Genshin = () => {
  const [standard, setStandard] = useState<Character | Weapon | null>(null);
  const [weapon, setWeapon] = useState<Weapon | null>(null);
  const [primogens, setPrimogens] = useState<number>(32000);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomCharacter = async () => {
    setIsLoading(true);
    if (primogens < 160) {
      return primogens;
    }
    try {
      const response = await fetch("http://localhost:3000/standard");
      const data = await response.json();
      if (data.character) {
        setStandard(data.character);
      } else {
        setStandard(data.weapon);
      }

      setPrimogens((prev) => prev - 160);
    } catch (error) {
      console.error("Error fetching character:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRandomWeapon = async () => {
    setIsLoading(true);
    if (primogens < 160) {
      return primogens;
    }
    try {
      const response = await fetch("http://localhost:3000/weapons");
      const data = await response.json();
      setWeapon(data.weapon);
      setPrimogens((prev) => prev - 160);
    } catch (error) {
      console.error("Error fetching weapon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-genimp min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="font-custom text-dirty text-3xl font-bold mb-2">
        Genshin Impact Pull
      </h1>
      <div className="text-lg font-bold mb-2">
        <p className="font-custom text-dirty text-3xl">
          Primogens: {primogens}
        </p>
      </div>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={fetchRandomCharacter}
          disabled={primogens < 160}
          className="bg-orange-600 font-custom text-white px-6 py-3 rounded-md hover:bg-orange-500"
        >
          Get Random Character
        </button>
        <button
          onClick={fetchRandomWeapon}
          disabled={primogens < 160}
          className="bg-blue-500 font-custom text-white px-6 py-3 rounded-md hover:bg-blue-400"
        >
          Get Random Weapon
        </button>
      </div>

      <div className="flex flex-row items-center space-x-8">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {standard && (
              <div className="bg-orange-600 p-3 rounded-lg max-w-xs text-center mx-20">
                <img
                  src={
                    "vision" in standard
                      ? `https://genshin.jmp.blue/characters/${standard.id}/card`
                      : `https://genshin.jmp.blue/weapons/${standard.id}/icon`
                  }
                  alt={standard.name}
                  className="w-[80%] h-auto rounded-lg mx-auto"
                />
                <p className="text-2xl font-semibold text-white">
                  {standard.name}
                </p>
              </div>
            )}
            {weapon && (
              <div className="bg-blue-500 p-3 rounded-lg shadow-lg max-w-xs w-auto text-center items-center">
                <img
                  src={`https://genshin.jmp.blue/weapons/${weapon.id}/icon`}
                  alt={weapon.name}
                  className="w-25 h-25 rounded-lg"
                />
                <p className="text-2xl font-semibold text-white">
                  {weapon.name}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Genshin;
