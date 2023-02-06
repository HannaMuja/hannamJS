//Koden nedan hämtar elementet från HTML. Genom att ange ("icon") så vet JS att de ska leta efter det elementet i HTML//
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  //Koden under gör så att ikonen (sol/måne) ändras i navbaren beroende på om man har light theme eller dark theme//
  if(document.body.classList.contains("light-theme")){ 
    icon.src ="moon.png";
  }else{
    icon.src ="sun.png";
  }
}

//Genom ett klick på "profilbilden" så kommer en text-popup upp som är kvar på bilden tills du trycker igen. 
//Variabel skapad som heter textOverImage. document.querySelectorAll används för att hitta en div i HTML som heter onClickTextOverImage.
var textOverImage=document.querySelectorAll(".onClickTextOverImage div");

for(var i=0;i<textOverImage.length;i++){
    textOverImage[i].onclick=function(){
        this.classList.toggle("show");
    }
}
//För att kunna manipulera ett HTML element behöver man först "hitta" elementet i JS. Det finns olika metoder för det.
//Man kan använda sig av GetElementById(), GetElementByClassName(), querySelector(), querySelectorAll() Etc. Kan se ut som nedan:
// const title = document.getElementById('heading');
// title.style.color = 'red';
// console.log(title);
//Första raden skapar jag en variabel som heter title och med document.getElementById säger jag åt JS att leta efter ett element som har id "heading" i HTML
//Andra raden tar jag variabeln "title" och skriver "style" och väljer sedan ett CSS attribut (i detta fall color) och väljer färg för att syla HTML elementet i JS.
//Till sist tar jag console.log för att det ska visas på skärmen.


//WCAG krav 2.4.8, var användaren är uppfylls då den sida som användaren är på för tillfället visas som aktiv i navbaren. 
//Även krav 1.4.8 uppfylls då användaren har möjlighet att att byta bakgrundsfärg (lightmode och darkmode) 
//Till sist uppfylls även krav 1.1.1 eftersom det finns alternativ text till alla bilder.