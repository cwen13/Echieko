
let movieData = [
  {
    "title": "Hello Regina",
    "description": "MOvie descirpiton movie description moceisdkhgnlskfugndlkhgblkdjhbnlkfdgbhnldfkjgbhlkdfunhdufuhndlfkuhnbdlfuhbdlkfhnjbdlfkhnbldkfhx",
    "img": "HeyRegina.JPG",
    "alt-txt": "image split in half with a woman smiling in the top section and a woamn wiht glowing eyes on the bottom",
    "production":"White Midnight",
    "role": {
      "director": true,
      "first-ad": false,
      "set-design": false,
      "producer": false,
      "screenwriter": false,
    },
    "awards":[
      "Honorable-Mention - Another Internaitonal Film"
    ]
  }
];




let populate = (category) => {
  let cards = [];
  for(let i=0; i<movieData.length; i++) {
    let film = movieData[i];
    let awardsList = document.createElement("ul");
    if(film["role"][category]) {
      
      let card = document.createElement("section");
      card.setAttribute("class","card mb-3 bg-danger");

      let divG = document.createElement("div");
      divG.setAttribute("class", "row g-0");

      let divCol4 = document.createElement("div");
      divCol4.setAttribute("class","col-md-4");

      let poster = document.createElement("img");
      poster.setAttribute("src","./assets/images/"+film["img"]);
      poster.setAttribute("alt",film["alt-txt"]);
      poster.setAttribute("class","img-fluid rounded-start m-3 rounded");
      poster.setAttribute("height","250");
      poster.setAttribute("width","250");

      let divCol8 = document.createElement("div");
      divCol8.setAttribute("class","col-md-8");

      let divCardBody = document.createElement("div");
      divCardBody.setAttribute("class", "card-body continer-fluid");
      

      let title = document.createElement("h5");
      title.setAttribute("class", "card-title");
      title.innerHTML = film["title"];
      
      let desc = document.createElement("p");
      desc.setAttribute("class","card-text");
      desc.innerHTML = film["description"];

      let production = document.createElement("p");
      production.setAttribute("class","card-text");
      production.innerHTML = "Production: "+film["production"];

      if (film["awards"].length > 0) {
	var awards = document.createElement("ul");
	awards.setAttribute("id", "awards");
	for (const award of film["awards"]) {
	  let awardEle = document.createElement("li")
	  awardEle.innerHTML ='<i class="bi bi-trophy-fill"></i> ' + award;
	  awards.append(awardEle);
	}
      }
      
      
      //image column
      divCol4.append(poster);

      //text column
      divCardBody.append(title);
      divCardBody.append(desc);
      divCardBody.append(production);
      if (awards) divCardBody.append(awards);
      divCol8.append(divCardBody);
      

      // merging columns
      divG.append(divCol4);
      divG.append(divCol8);
      if (awardsList) divG.append(awardsList);
      card.append(divG);

      cards.push(card);
    } else {
      continue;
    }
  }
  return cards;
}

let buildAwards = (awards) => {
  
}  


function main() {
  // get the block categories
  let categories = document.querySelector("#v-pills-tab");
  categories = categories.querySelectorAll("button");
//  console.log(categories);
  let cats = [];
  categories.forEach((cat) => cats.push(cat.innerText.trim().toLowerCase()));
  console.log(cats);
  // cycle through them
  for (let i=0; i<cats.length; i++) {
    let tab = document.querySelector("#v-pills-"+cats[i]);
    // build card
    let cards = populate(cats[i]);
    cards.forEach((card) =>tab.append(card));
    
  }
    
  return 0;
}

main();
