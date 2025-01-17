"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.listen(3000, function () {
    console.log("Listening to port 3000.");
});
app.get("/standard", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var chance, GenshinCharacters, GenshinCharData, randomIndex, randomCharacter, randomCharacterData, randomCharacterJSON, GenshinWeapons, GenshinWeaponData, cumulativeProbabilities, stars, pull, star_1, i, weaponDetailsPromises, weaponDetails, filteredWeapons, randomIndex, randomWeapon, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 10, , 11]);
                chance = Math.random() * 80;
                if (!(chance > 50)) return [3 /*break*/, 5];
                return [4 /*yield*/, fetch("https://genshin.jmp.blue/characters")];
            case 1:
                GenshinCharacters = _a.sent();
                return [4 /*yield*/, GenshinCharacters.json()];
            case 2:
                GenshinCharData = _a.sent();
                randomIndex = Math.floor(Math.random() * GenshinCharData.length);
                randomCharacter = GenshinCharData[randomIndex];
                return [4 /*yield*/, fetch("https://genshin.jmp.blue/characters/".concat(randomCharacter))];
            case 3:
                randomCharacterData = _a.sent();
                return [4 /*yield*/, randomCharacterData.json()];
            case 4:
                randomCharacterJSON = _a.sent();
                res.status(200).json({ character: randomCharacterJSON });
                return [3 /*break*/, 9];
            case 5: return [4 /*yield*/, fetch("https://genshin.jmp.blue/weapons/")];
            case 6:
                GenshinWeapons = _a.sent();
                return [4 /*yield*/, GenshinWeapons.json()];
            case 7:
                GenshinWeaponData = _a.sent();
                cumulativeProbabilities = [93.3, 99.3, 100];
                stars = [3, 4, 5];
                pull = Math.random() * 100;
                star_1 = 3;
                for (i = 0; i < cumulativeProbabilities.length; i++) {
                    if (pull <= cumulativeProbabilities[i]) {
                        star_1 = stars[i];
                        break;
                    }
                }
                weaponDetailsPromises = GenshinWeaponData.map(function (weaponID) {
                    return fetch("https://genshin.jmp.blue/weapons/".concat(weaponID)).then(function (response) {
                        return response.json();
                    });
                });
                return [4 /*yield*/, Promise.all(weaponDetailsPromises)];
            case 8:
                weaponDetails = _a.sent();
                filteredWeapons = weaponDetails.filter(function (weapon) { return weapon.rarity === star_1; });
                if (filteredWeapons.length === 0) {
                    res
                        .status(404)
                        .json({ message: "No weapons found for the selected rarity." });
                    return [2 /*return*/];
                }
                randomIndex = Math.floor(Math.random() * filteredWeapons.length);
                randomWeapon = filteredWeapons[randomIndex];
                res.status(200).json({ weapon: randomWeapon });
                _a.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                error_1 = _a.sent();
                res.status(400).json({ message: "Failed to fetch random character." });
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}); });
app.get("/weapons", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var GenshinWeapons, GenshinWeaponData, cumulativeProbabilities, stars, pull, star_2, i, weaponDetailsPromises, weaponDetails, filteredWeapons, randomIndex, randomWeapon, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, fetch("https://genshin.jmp.blue/weapons/")];
            case 1:
                GenshinWeapons = _a.sent();
                return [4 /*yield*/, GenshinWeapons.json()];
            case 2:
                GenshinWeaponData = _a.sent();
                cumulativeProbabilities = [93.3, 99.3, 100];
                stars = [3, 4, 5];
                pull = Math.random() * 100;
                star_2 = 3;
                for (i = 0; i < cumulativeProbabilities.length; i++) {
                    if (pull <= cumulativeProbabilities[i]) {
                        star_2 = stars[i];
                        break;
                    }
                }
                weaponDetailsPromises = GenshinWeaponData.map(function (weaponID) {
                    return fetch("https://genshin.jmp.blue/weapons/".concat(weaponID)).then(function (response) {
                        return response.json();
                    });
                });
                return [4 /*yield*/, Promise.all(weaponDetailsPromises)];
            case 3:
                weaponDetails = _a.sent();
                filteredWeapons = weaponDetails.filter(function (weapon) { return weapon.rarity === star_2; });
                if (filteredWeapons.length === 0) {
                    res
                        .status(404)
                        .json({ message: "No weapons found for the selected rarity." });
                    return [2 /*return*/];
                }
                randomIndex = Math.floor(Math.random() * filteredWeapons.length);
                randomWeapon = filteredWeapons[randomIndex];
                res.status(200).json({ weapon: randomWeapon });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                console.error(error_2); // Log the error
                res.status(400).json({ message: "Error fetching weapons." });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
