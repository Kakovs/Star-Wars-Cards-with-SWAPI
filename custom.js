const request1 = "https://swapi.dev/api/people/";
const cardGrid = document.querySelector(".cardGrid");

fetch(request1).then((Response) =>{
    return Response.json();
}).then( (data) =>{
    const characters = data.results;

    characters.map(character => {

        cardGrid.insertAdjacentHTML("afterbegin",'<div class="singleCard humanCard"> <div class="nameBox"> <i class="fa-solid fa-person"></i><h4 class="name"></h4><i class="fa-solid fa-person"></i> </div> <div> <p class="height">height:</p> </div> <div> <p class="birthYear"></p> </div> <div> <p class="homeWorld">home world:</p> </div> </div>');

        const characterName = document.querySelector(".name");
        const characterHeight = document.querySelector(".height");
        const characterBirthYear = document.querySelector(".birthYear");
        const characterHomeWorld = document.querySelector(".homeWorld");

        const planetApi = character.homeworld;

        characterName.innerHTML=character.name;
        characterHeight.innerHTML="height: " + character.height + "cm";
        characterBirthYear.innerHTML="birth year: " + character.birth_year;

        fetch(planetApi).then((Response) =>{
            return Response.json();
        }).then( (data) =>{
            const planet = data.name;
            characterHomeWorld.innerHTML="home world: " + planet;
        });

    });

});

