var quotes = [
  {quote:"She had magic in her eyes even the starts envied.",
  source:"Tu Carlitos",
  tag:"Te amo mi Bonita"},

  {quote:"& then I met you, & slowly but all at once my whole world began to change.",
  source:"Tu Carlitos",
  tag:"Te amo mi Princesa"},

  {quote:"As I lay awake, the only thing that's on my mind, is you.",
  source:"Tu Carlitos",
  tag: "Te amo mi Reina"},

  {quote:"Me volvi adicto a unos ojos verdes que brillan mas que una esmeralda.",
  source:"Tu Carlitos",
  tag:"Te amo mi Corazon"},

  {quote:"Desde que te conoci descubri que puedo tener una sonrisa que dura 24 horas.. Gracias.",
  source:"Tu Carlitos",
  tag:"Te amo mi Cariño"},

  {quote:"Descansa tu cabeza en mi pecho y escucharas a mi corazon decir que eres mas que suficiente.",
  source:"Tu Carlitos",
  tag:"Te amo mi Alma"},

  {quote:"Solo quiero que sepas que no quiero estar con nadie mas que no seas tu.",
  source:"Tu Carlitos",
  tag:"Te amo mi Todo"},

  {quote:"Por si lees esto: Amo cuando sonries.",
  source:"Tu Carlitos",
  tag:"Te amo mi Hermosa"},

  {quote:"Eres mi felicidad dia a dia.",
  source:"Tu Carlitos",
  tag:"Te amo mi Universo"},

  {quote:"Si tu me recuerdas, no me importa que el resto del mundo me olvide.",
  source:"Tu Carlitos",
  tag:"Mayo 24, 2019"},

  {quote:"Tus hermosos ojos son una ventana a tu alma y lo que veo es una alma noble, amable, cariñosa, simplemente hermosa.",
  source:"Tu Carlitos",
  tag:"5-24-2019 para simepre"},

  {quote:"Te encontre y no voy a dejarte ir, nadie se compara contigo.",
  source:"Tu Carlitos",
  tag:"Juntos para siempre mi Bonita"},

  {quote:"Mientras te contemplo pienso en lo feliz que soy contigo.",
  source:"Tu Carlitos",
  tag:"Te amo Mi Bonita"}
];


// function to choose a random quote from the array.

function getRandomQuote() {
  let randomQuote = Math.floor(Math.random()*(quotes.length))
  return quotes[randomQuote]
}


// printQuote code to make it appear on the page

function printQuote(){
  quoteObject = getRandomQuote();
      printedText = "</p>" +"</p><p class=\"tag\"> " + quoteObject.tag + "</p>" + "<p class=\"quote\">" + quoteObject.quote + "</p><p class=\"source\"> " + quoteObject.source;
      //text as it'll appear in box
      document.getElementById('quote-box').innerHTML = printedText;
      //make it appear on the page in the quote-box

}

// event listener, responds to clicks on the loadQuote button from the html
// when user clicks anywhere on the button, the "printQuote" function is called - activates the function to show random quote and change color
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//change background color on click
document.getElementById("loadQuote").addEventListener("click", function rndColor(){
    let red = Math.floor((Math.random() * 256));
    let green = Math.floor((Math.random() * 256));
    let blue = Math.floor((Math.random() * 256));
    let color = 'rgb'+'('+red+','+green+','+blue+')';
    document.body.style.backgroundColor = color;
});
