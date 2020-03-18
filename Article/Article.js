
/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Corona Virus (COVID-2019) Update',
    date: 'Mar 17th, 2020',
    firstParagraph: `Development of the corona virus has been getting... blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah `,

    secondParagraph: `blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah `,

    thirdParagraph: `blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah `
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

function createCard(dataObj){
  const article = document.createElement("div");
  const title = document.createElement("h2");
  const date = document.createElement("p");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const button = document.createElement("span");
  const readBtn = document.createElement("button");

  article.append(title, date, p1, p2, p3, button, readBtn);

  article.classList.add("article");
  date.classList.add("date");
  button.classList.add("expandButton");
  readBtn.classList.add("read");

  title.textContent = dataObj.title;
  date.textContent = dataObj.date;
  p1.textContent = dataObj.firstParagraph;
  p2.textContent = dataObj.secondParagraph;
  p3.textContent = dataObj.thirdParagraph;
  readBtn.textContent = "Mark As Read";

  const open = "\u25bc";
  const close = "\u25b2";

  button.textContent = open + " Click to Expand";

  button.addEventListener("click", (event) => {
    if(button.textContent.includes(open)) {
      button.textContent = close + " Click to Close";
    } else {
      button.textContent = open + " Click to Expand";
    }
    
    article.classList.toggle("article-open");   
    //article.style.transition = "all .5s"; 
  });

  readBtn.addEventListener("click", (event) => {
    data.splice(data.includes(title.textContent), 1);
    article.remove();
  });

  return article;
}

const articles = document.querySelector(".articles");
data.forEach(dataObj => articles.appendChild(createCard(dataObj)));




// Function formatDate takes a date and changes it to string like "Mar 17th, 2020"
// @param date - takes the date value
// returns the string date like `Mar 17th, 2020`
function formatDate(date) {
  const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

  const month = monthName[date.getMonth()];
  const day = numberSuffix(date.getDate()+1);
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
  
}


// Function numberSuffix takes a number and adds the corresponding suffix (st, nd, rd, th) 
// @param i - the number to add suffix to
// returns the number with the suffix added (1st, 2nd, 3rd, etc...);
function numberSuffix(i) {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";
}



function addNewArticle(articleTitle, articleDate, articlePara1, articlePara2, articlePara3) {
  const newArticle = {
    title: articleTitle,
    date: formatDate(new Date(articleDate)),
    firstParagraph: articlePara1,
    secondParagraph: articlePara2,
    thirdParagraph: articlePara3
  }


  data.push(newArticle);

  articles.querySelectorAll("div").forEach(article => article.remove());
  data.forEach(dataObj => articles.appendChild(createCard(dataObj)));
}



// Form to add new articles. hidden, will popup in the middle of screen

const newArticleSection = document.createElement("div");
const sectionTitle = document.createElement("h2");
const newArticleForm = document.createElement("form");
const titleLabel = document.createElement("label");
const inputTitle = document.createElement("input");
const dateLabel = document.createElement("label");
const inputDate = document.createElement("input");
const para1Label = document.createElement("label");
const inputPara1 = document.createElement("textArea");
const para2Label = document.createElement("label");
const inputPara2 = document.createElement("textArea");
const para3Label = document.createElement("label");
const inputPara3 = document.createElement("textArea");
const buttons = document.createElement("div");
const create = document.createElement("button");
const reset = document.createElement("input");
const close = document.createElement("button");

newArticleSection.id = "new-article";
inputTitle.id = "title";
inputTitle.type = "text";
inputTitle.setAttribute("placeholder", "Enter Article Title");
inputDate.id = "date";
inputDate.type = "date";
inputPara1.id = "para1";
inputPara1.setAttribute("cols", "100");
inputPara1.setAttribute("rows", "10");
inputPara1.setAttribute("placeholder", "Enter Article Paragraphs");
inputPara2.id = "para2";
inputPara2.setAttribute("cols", "100");
inputPara2.setAttribute("rows", "10");
inputPara2.setAttribute("placeholder", "Enter Article Paragraphs");
inputPara3.id = "para3";
inputPara3.setAttribute("cols", "100");
inputPara3.setAttribute("rows", "10");
inputPara3.setAttribute("placeholder", "Enter Article Paragraphs");
buttons.classList.add("form-buttons");
create.textContent = "Create";
reset.type = "reset";
reset.classList.add("reset");
reset.value = "Reset";
close.textContent = "close";
close.classList.add("closeForm");


sectionTitle.textContent = "Create New Article";
titleLabel.setAttribute("for", "title");
titleLabel.textContent = "Title:";
dateLabel.setAttribute("for", "date");
dateLabel.textContent = "Date:";
para1Label.setAttribute("for", "para1");
para1Label.textContent = "Paragraph 1:";
para2Label.setAttribute("for", "para2");
para2Label.textContent = "Paragraph 2:";
para3Label.setAttribute("for", "para3");
para3Label.textContent = "Paragraph 3:";


const body = document.querySelector("body");
body.appendChild(newArticleSection);
newArticleSection.append(sectionTitle, newArticleForm);
buttons.append(create, reset);
newArticleForm.append(titleLabel, inputTitle, dateLabel, inputDate, para1Label, inputPara1, para2Label, inputPara2, para3Label, inputPara3, buttons, close);

function closeForm() {
  TweenMax.fromTo("#new-article", 1, {
      delay: .5,
      opacity: 1,
      display: "none"
  }, {
      delay: .8,
      opacity: 0,
      ease: Quad.easeInOut,
      scale: 1,
      transformOrigin: "50% 50% -0px",
      yoyo: false,
      repeat: 0,
      repeatDelay: 1
  });
}

close.addEventListener("click", (event) => {
  event.preventDefault();

  closeForm();
});


create.addEventListener("click", (event) => {
  event.preventDefault();


  if((inputTitle.value !== undefined || inputTitle !== "" || inputTitle !== " ") && inputDate.valueAsDate !== null) {
    addNewArticle(inputTitle.value, 
      inputDate.valueAsDate, 
      inputPara1.value, 
      inputPara2.value, 
      inputPara3.value);
  }

  
  
  //newArticleSection.style.top = "-300%";
  
  closeForm();
  newArticleForm.reset();
  
});


const addNew = document.createElement("button");
addNew.textContent = "Add New Article";
addNew.style.margin = "20px 10%";
addNew.style.fontSize = "16px";
articles.prepend(addNew);

addNew.addEventListener("click", (event) => {
  TweenMax.fromTo("#new-article", 1, {
      delay: .5,
      opacity: 0,
      display: "block"
  }, {
      delay: .8,
      opacity: 1,
      ease: Quad.easeInOut,
      scale: 1,
      transformOrigin: "50% 50% -0px",
      yoyo: false,
      repeat: 0,
      repeatDelay: 1
  });
});




