let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "'Falcon and the Winter Soldier' follows Sam Wilson and Bucky Barnes on a globe-trotting adventure to confront new threats and embrace their heroic legacies.",
    image: "images/slider 2.PNG"
  },
  {
    name: "loki",
    des:
      "LOKi is a mind-bending sci-fi adventure following the charismatic trickster as he navigates a temporal war, confronting past selves and challenging the boundaries of heroism in a world of paradoxes and hidden agendas.",
    image: "images/slider 1.PNG"
  },
  {
    name: "wanda vision",
    des:
      "WandaVision is a groundbreaking TV miniseries that delves into the intriguing life of Wanda Maximoff (Scarlet Witch) and Vision, two powerful Marvel superheroes. Set in an unconventional sitcom-inspired universe, the show follows Wanda and Vision as they lead an idyllic suburban life together. However, as their reality begins to unravel, they suspect that something much more sinister lies beneath the surface!",
    image: "images/slider 3.PNG"
  },
  {
    name: "raya and the last dragon",
    des:
      "Riya and the Last Dragon is a captivating animated fantasy adventure where a brave young girl named Riya embarks on a journey to find the last dragon. In a world threatened by darkness, Riya must navigate perilous obstacles, discover her inner strength, and forge an unbreakable bond with the mythical creature! ",
    image: "images/slider 4.PNG"
  },
  {
    name: "luca",
    des:
      "Luca is a heartwarming animated tale set in a picturesque seaside town on the Italian Riviera.The story follows Luca, a young sea monster, and his best friend Alberto, as they embark on an unforgettable summer adventure on land. Determined to experience life beyond the depths of the ocean, the two friends must navigate the challenges of hiding their true identities from the human world!",
    image: "images/slider 5.PNG"
  },
  {
    name: "Pathan",
    des:
      "In the film, Pathaan (Khan), an exiled RAW agent, works with ISI agent Rubina Mohsin (Padukone) to take down Jim (Abraham), a former RAW agent, who plans to attack India with a deadly virus. Produced by Aditya Chopra of Yash Raj Films, the film began principal photography in November 2020 in Mumbai.! ",
    image: "images/slider 6.jpg"
  }
];
const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //tracking the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all the element
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;
  //setting elements class names
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video cards
const videoCards = [...document.queryitem.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListenter("mouseover", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxtBtns")];

cardContainers.forEach((items, i) => {
  let containerDimensions = items.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  nxtBtns[i].addEventListener("clik", () => {
    items.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    items.scrollLeft -= containerWidth + 200;
  });
});
