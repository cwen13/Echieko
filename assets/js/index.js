
let movieData = [
  {
    "title": "Hello Regina",
    "description": "MOvie descirpiton movie description moceisdkhgnlskfugndlkhgblkdjhbnlkfdgbhnldfkjgbhlkdfunhdufuhndlfkuhnbdlfuhbdlkfhnjbdlfkhnbldkfhx",
    "img": "HeyRegina.JPG",
    "alt-txt": "image split in half with a woman smiling in the top section and a woamn wiht glowing eyes on the bottom",
    "role": {
      "first-ad": true,
      "director": false,
      "screenwriter": true
    },
    "awards":
    {
      "best-pic": false,
      "best-sfx": false,
      "best-sound": false,
      "honorable": true
    }
  }
];

let populate = (category) => {
  for(let i=0; i<movie.length; i++) {
    let roles = movieData[i]["roles"];
    if(roles[category]) {
      
  }

  
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
  
    // if there are awards
    let card = populate(cats[i]);
    if (card) tab.append(card);

      
    
    // build and plug in


  }
    
  
  
}

main();
