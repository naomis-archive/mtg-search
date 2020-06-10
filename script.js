async function cardLookup() {
  //form fields
  const name = document.getElementById("name").value;
  const nameQuery = name.replace(/\s/g, "_");
  const set = document.getElementById("set").value;
  const setQuery = set.replace(/\s/g, "_");

  //response fields
  const image = document.getElementById("cardimg");
  const cardname = document.getElementById("cardname");
  const manacost = document.getElementById("manacost");
  const cardtype = document.getElementById("cardtype");
  const setname = document.getElementById("setname");
  const abilities = document.getElementById("abilities");
  const flavour = document.getElementById("flavourtext");
  alert("Searching for card...");
  if (set == "") {
    const nosetdata = await fetch(
      `https://api.magicthegathering.io/v1/cards?name=${nameQuery}`
    );
    const nosetCards = await nosetdata.json();
    if (nosetCards.cards.length === 0) {
      alert("No results found.");
      return;
    }
    const nosetSingle = nosetCards.cards[0];
    image.src = nosetSingle.imageUrl;
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
  const yessetCards = await yessetdata.json();
  if (yessetCards.cards.length === 0) {
    alert("No results found.");
    return;
  }
  const yessetSingle = yessetCards.cards[0];
  image.src = yessetSingle.imageUrl;
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
