import * as express from "express";
import * as cors from "cors";

const app = express();
app.use(cors());
app.listen(3000, () => {
  console.log(`Listening to port 3000.`);
});

app.get(`/standard`, async (req, res) => {
  try {
    let chance = Math.random() * 70;
    if (chance > 65) {
      const GenshinCharacters = await fetch(
        `https://genshin.jmp.blue/characters`
      );
      const GenshinCharData = await GenshinCharacters.json();
      const randomIndex = Math.floor(Math.random() * GenshinCharData.length);
      const randomCharacter = GenshinCharData[randomIndex];
      const randomCharacterData = await fetch(
        `https://genshin.jmp.blue/characters/${randomCharacter}`
      );
      const randomCharacterJSON = await randomCharacterData.json();
      res.status(200).json({ character: randomCharacterJSON });
    } else {
      const GenshinWeapons = await fetch(`https://genshin.jmp.blue/weapons/`);
      const GenshinWeaponData = await GenshinWeapons.json();

      const cumulativeProbabilities = [93.3, 99.3, 100];
      const stars = [3, 4, 5];
      const pull = Math.random() * 100;
      let star = 3;

      for (let i = 0; i < cumulativeProbabilities.length; i++) {
        if (pull <= cumulativeProbabilities[i]) {
          star = stars[i];
          break;
        }
      }
      const weaponDetailsPromises = GenshinWeaponData.map((weaponID) =>
        fetch(`https://genshin.jmp.blue/weapons/${weaponID}`).then((response) =>
          response.json()
        )
      );
      const weaponDetails = await Promise.all(weaponDetailsPromises);

      const filteredWeapons = weaponDetails.filter(
        (weapon) => weapon.rarity === star
      );

      if (filteredWeapons.length === 0) {
        res
          .status(404)
          .json({ message: "No weapons found for the selected rarity." });
        return;
      }

      const randomIndex = Math.floor(Math.random() * filteredWeapons.length);
      const randomWeapon = filteredWeapons[randomIndex];

      res.status(200).json({ weapon: randomWeapon });
    }
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch random character." });
  }
});
app.get(`/weapons`, async (req, res) => {
  try {
    const GenshinWeapons = await fetch(`https://genshin.jmp.blue/weapons/`);
    const GenshinWeaponData = await GenshinWeapons.json();

    const cumulativeProbabilities = [93.3, 99.3, 100];
    const stars = [3, 4, 5];
    const pull = Math.random() * 100;
    let star = 3;

    for (let i = 0; i < cumulativeProbabilities.length; i++) {
      if (pull <= cumulativeProbabilities[i]) {
        star = stars[i];
        break;
      }
    }
    const weaponDetailsPromises = GenshinWeaponData.map((weaponID) =>
      fetch(`https://genshin.jmp.blue/weapons/${weaponID}`).then((response) =>
        response.json()
      )
    );
    const weaponDetails = await Promise.all(weaponDetailsPromises);

    const filteredWeapons = weaponDetails.filter(
      (weapon) => weapon.rarity === star
    );

    if (filteredWeapons.length === 0) {
      res
        .status(404)
        .json({ message: "No weapons found for the selected rarity." });
      return;
    }

    const randomIndex = Math.floor(Math.random() * filteredWeapons.length);
    const randomWeapon = filteredWeapons[randomIndex];

    res.status(200).json({ weapon: randomWeapon });
  } catch (error) {
    console.error(error); // Log the error
    res.status(400).json({ message: "Error fetching weapons." });
  }
});
