interface magicInt {
  cards: Array<{
    name: string;
    manaCost: string;
    cmc: number;
    colors: Array<string>;
    colorIdentity: Array<string>;
    type: string;
    supertypes: Array<unknown>;
    types: Array<string>;
    subtypes: Array<string>;
    rarity: string;
    set: string;
    setName: string;
    text?: string;
    flavor?: string;
    artist: string;
    number: string;
    power: string;
    toughness: string;
    layout: string;
    multiverseid: number;
    imageUrl: string;
    rulings: Array<object>;
    foreignNames: Array<object>;
    printings: Array<string>;
    originalText: string;
    originalType: string;
    legalities: Array<object>;
    id: string;
  }>;
}

async function cardLookup() {
  //form fields
  const nameelement: HTMLInputElement | any = document.getElementById("name");
  const name: string = nameelement.value;
  const nameQuery: string = name.replace(/\s/g, "_");
  const setelement: HTMLInputElement | any = document.getElementById("set")
  const set: string = setelement.value;
  const setQuery: string = set.replace(/\s/g, "_");

  //response fields
  const image: HTMLElement | any = document.getElementById("cardimg");
  const cardname: HTMLElement | any = document.getElementById("cardname");
  const manacost: HTMLElement | any = document.getElementById("manacost");
  const cardtype: HTMLElement | any = document.getElementById("cardtype");
  const setname: HTMLElement | any = document.getElementById("setname");
  const abilities: HTMLElement | any = document.getElementById("abilities");
  const flavour: HTMLElement | any = document.getElementById("flavourtext");
  alert("Searching for card...");
  if (set == "") {
    const nosetdata = await fetch(
      `https://api.magicthegathering.io/v1/cards?name=${nameQuery}`
    );
    const nosetCards: magicInt = await nosetdata.json();
    if (nosetCards.cards.length === 0) {
      alert("No results found.");
      return;
    }
    const nosetSingle = nosetCards.cards[0];
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
    return;
  }
  const yessetdata = await fetch(
    `https://api.magicthegathering.io/v1/cards?name=${nameQuery}&setName=${setQuery}`
  );
  const yessetCards: magicInt = await yessetdata.json();
  if (yessetCards.cards.length === 0) {
    alert("No results found.");
    return;
  }
  const yessetSingle = yessetCards.cards[0];
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
  return;
}
