import * as express from "express";
import * as cors from "cors";

const app = express();
app.use(cors());
app.listen(3000, () => {
  console.log(`Listening to port 3000.`);
});

app.get(`/character`, async (req, res) => {
  try {
    const GenshinCharacters = await fetch(
      `https://genshin.jmp.blue/characters`
    );
    const GenshinCharData = await GenshinCharacters.json();

    // Randomly select a character from the fetched data
    const randomIndex = Math.floor(Math.random() * GenshinCharData.length);
    const randomCharacter = GenshinCharData[randomIndex];
    const randomCharacterData = await fetch(
      `https://genshin.jmp.blue/characters/${randomCharacter}`
    );
    const randomCharacterJSON = await randomCharacterData.json();
    res.status(200).json(randomCharacterJSON);
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch random character." });
  }
});
app.get(`/weapons`, async (req, res) => {
  try {
    const GenshinWeapons = await fetch(`https://genshin.jmp.blue/weapons/`);
    const GenshinWeaponData = await GenshinWeapons.json();
    const randomIndex = Math.floor(Math.random() * GenshinWeaponData.length);
    const randomWeapon = GenshinWeaponData[randomIndex];
    const randomWeaponAPI = await fetch(
      `https://genshin.jmp.blue/weapons/${randomWeapon}`
    );
    const randomWeaponData = await randomWeaponAPI.json();
    const randomWeaponImage = await fetch(
      `https://genshin.jmp.blue/weapons/${randomWeapon}/icon`
    );
    //use /weapons/name/icon to display the name
    res.status(200).json(randomWeaponData);
  } catch (error) {
    res.status(400).json({ message: "Error fetching weapons." });
  }
});
