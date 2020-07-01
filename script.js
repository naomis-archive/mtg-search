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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
function cardLookup() {
    return __awaiter(this, void 0, void 0, function () {
        var nameelement, name, nameQuery, setelement, set, setQuery, image, cardname, manacost, cardtype, setname, abilities, flavour, nosetdata, nosetCards, nosetSingle, yessetdata, yessetCards, yessetSingle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nameelement = document.getElementById("name");
                    name = nameelement.value;
                    nameQuery = name.replace(/\s/g, "_");
                    setelement = document.getElementById("set");
                    set = setelement.value;
                    setQuery = set.replace(/\s/g, "_");
                    image = document.getElementById("cardimg");
                    cardname = document.getElementById("cardname");
                    manacost = document.getElementById("manacost");
                    cardtype = document.getElementById("cardtype");
                    setname = document.getElementById("setname");
                    abilities = document.getElementById("abilities");
                    flavour = document.getElementById("flavourtext");
                    alert("Searching for card...");
                    if (!(set == "")) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch("https://api.magicthegathering.io/v1/cards?name=" + nameQuery)];
                case 1:
                    nosetdata = _a.sent();
                    return [4 /*yield*/, nosetdata.json()];
                case 2:
                    nosetCards = _a.sent();
                    if (nosetCards.cards.length === 0) {
                        alert("No results found.");
                        return [2 /*return*/];
                    }
                    nosetSingle = nosetCards.cards[0];
                    image.setAttribute("src", nosetSingle.imageUrl);
                    cardname.innerText = nosetSingle.name;
                    manacost.innerText = nosetSingle.manaCost;
                    cardtype.innerText = nosetSingle.type;
                    setname.innerText = nosetSingle.setName;
                    abilities.innerText = nosetSingle.text;
                    if (!nosetSingle.text) {
                        abilities.innerText = "This card has no abilities.";
                    }
                    flavour.innerText = nosetSingle.flavor;
                    if (!nosetSingle.flavor) {
                        flavour.innerText = "This card has no flavour text.";
                    }
                    return [2 /*return*/];
                case 3: return [4 /*yield*/, fetch("https://api.magicthegathering.io/v1/cards?name=" + nameQuery + "&setName=" + setQuery)];
                case 4:
                    yessetdata = _a.sent();
                    return [4 /*yield*/, yessetdata.json()];
                case 5:
                    yessetCards = _a.sent();
                    if (yessetCards.cards.length === 0) {
                        alert("No results found.");
                        return [2 /*return*/];
                    }
                    yessetSingle = yessetCards.cards[0];
                    image.setAttribute("src", yessetSingle.imageUrl);
                    cardname.innerText = yessetSingle.name;
                    manacost.innerText = yessetSingle.manaCost;
                    cardtype.innerText = yessetSingle.type;
                    setname.innerText = yessetSingle.setName;
                    abilities.innerText = yessetSingle.text;
                    if (!yessetSingle.text) {
                        abilities.innerText = "This card has no abilities.";
                    }
                    flavour.innerText = yessetSingle.flavor;
                    if (!yessetSingle.flavor) {
                        flavour.innerText = "This card has no flavour text.";
                    }
                    alert("Search complete!");
                    return [2 /*return*/];
            }
        });
    });
}
