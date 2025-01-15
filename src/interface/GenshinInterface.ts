export interface Weapon {
  name: string;
  type: string;
  rarity: number;
  baseAttack: number;
  subStat: string;
  passiveName: string;
  passiveDesc: string;
  location: string;
  ascensionMaterial: string;
  id: string;
}

export interface Character {
  name: string;
  title: string;
  vision: string;
  weapon: string;
  gender: string;
  nation: string;
  affiliation: string;
  rarity: number;
  release: string;
  constellation: string;
  birthday: string;
  description: string;
  skillTalents: SkillTalent[];
  passiveTalents: PassiveTalent[];
  constellations: Constellation[];
  vision_key: string;
  weapon_type: string;
  outfits: Outfit[];
  ascension_materials: AscensionMaterials;
  id: string;
}

export interface SkillTalent {
  name: string;
  unlock: string;
  description: string;
  upgrades: Upgrade[];
  type: string;
}

export interface Upgrade {
  name: string;
  value: string;
}

export interface PassiveTalent {
  name: string;
  unlock: string;
  description: string;
  level?: number;
}

export interface Constellation {
  name: string;
  unlock: string;
  description: string;
  level: number;
}

export interface Outfit {
  type: string;
  name: string;
  description: string;
  rarity: number;
  price: number;
  image: string;
}

export interface AscensionMaterials {
  level_20: Level20[];
  level_40: Level40[];
  level_50: Level50[];
  level_60: Level60[];
  level_70: Level70[];
  level_80: Level80[];
}

export interface Level20 {
  name: string;
  value: number;
}

export interface Level40 {
  name: string;
  value: number;
}

export interface Level50 {
  name: string;
  value: number;
}

export interface Level60 {
  name: string;
  value: number;
}

export interface Level70 {
  name: string;
  value: number;
}

export interface Level80 {
  name: string;
  value: number;
}
