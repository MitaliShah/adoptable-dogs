let apiData = [
  {
    name: "Rufus",
    breeds: ["Lab", "German Shepard", "Border Collie"],
    age: "Adult",
    size: "M",
    gender: "M",
    details: "No Cats, No Dogs",
    photo: "img/rufus.jpg",
    description:
      "      Hail-shot bounty barque  chase guns. Brigantine gibbet haul wind line.  Barque chandler lookout clap of thunder. Transom hogshead trysail league.  ",
  },
  {
    name: "Kylie Jane",
    breeds: ["Shih Tzu"],
    age: "Baby",
    size: "S",
    gender: "F",
    details: "Neutered",
    photo: "img/kylie.jpg",
    description:
      "   Hands loaded to the gunwalls topgallant long clothes. Crack Jennys tea cup topsail flogging handsomely. Bounty blow the man down nipper pillage. Chantey landlubber or just lubber red ensign warp.",
  },
  {
    name: "Jacque ",
    breeds: ["Chihuahua", "Rat Terrier"],
    age: "Senior",
    size: "S",
    gender: "M",
    details: "No Cats, No Dogs, Neutered, Special Medical Needs",
    photo: "img/jacque.jpg",
    description:
      "Interloper tackle   yo-ho-ho yard. Gangway keelhaul no prey, no pay sheet. Hang the jib snow careen transom. Broadside gabion bilged on her anchor sloop.",
  },
  {
    name: "Elsa",
    breeds: ["Irish Wolfhound", "Wirehaired Terrier", "Staffordshire Terrier"],
    age: "Adult",
    size: "XL",
    gender: "F",
    details: "Neutered",
    photo: "img/elsa.jpg",
    description:
      "Take a caulk league pink main sheet. Letter of Marque avast coxswain fire in the hole. Yardarm schooner piracy Jack Tar. Yardarm hardtack rutters poop deck.",
  },
  {
    name: "Colt",
    breeds: ["Staffordshire Terrier", "Dalmation"],
    age: "Baby",
    size: "L",
    gender: "M",
    details: "",
    photo: "img/colt.jpg",
    description:
      "     Come about Nelsons folly  black jack measured fer yer chains.  Hail-shot tack sloop grapple.  Boom sheet spirits man-of-war.  Scuttle bounty hulk sloop.",
  },
];

// Create a list of available breeds, and how many of each breed there are
let getSummary = function () {
  // Get breeds
  let breeds = apiData.reduce(function (breeds, dog) {
    //loop through each breed
    dog.breeds.forEach(function (breed) {
      //if breed already exists, increase count
      //otherwise create it
      if (breeds[breed]) {
        breeds[breed] = breeds[breed] + 1;
      } else {
        breeds[breed] = 1;
      }
    });
    return breeds;
  }, {});

  // if there are no breeds, return an empty string
  if (Object.keys(breeds).length < 1) {
    return "";
  }

  // Create summary markup
  let summary = "";
  for (let breed in breeds) {
    if (breeds.hasOwnProperty(breed)) {
      summary += `<li>${breed} (${breeds[breed]})</li>`;
    }
  }

  // return markup
  return `<h2>Available Breeds</h2><ul>${summary}</ul>`;
};

// Create a list of adoptable dogs
let getDogs = function () {
  return apiData
    .map(function (dog) {
      let html = `<h2>I'm ${dog.name}</h2>
      <p><img width="300" alt="A photo of ${dog.name}" src="${
        dog.photo
      }"/></p><p>Age: ${dog.age}<br/>Size: ${dog.size}<br/>Gender: ${
        dog.gender
      }<br/>Breeds: ${dog.breeds.join(", ")}<br/></p>
      <strong>Other Details:</strong><ul>${dog.details
        .split(", ")
        .map(function (detail) {
          if (detail.length < 1)
            return `<li><em>No additional details...</em></li>`;
          return `<li>${detail}</li>`;
        })}</ul>`;
      return html;
    })
    .join("");
};

// Load list of adoptable dogs into the DOM
let dogList = document.querySelector("#dogs");
dogList.innerHTML = getSummary() + getDogs();
