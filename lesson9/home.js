const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        //Create elements and content
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                let card = document.createElement('section');
                let photo = document.createElement('img');
                let name = document.createElement('h1');
                let motto = document.createElement('h2');
                let yearFounded = document.createElement('h3');
                let currentPopulation = document.createElement('h4');
                let averageRainfall = document.createElement('h5');

                //Create content
                photo.setAttribute('src', 'images/' + towns[i].photo);
                photo.setAttribute('alt', towns[i].name);
                name.textContent = 'Welcome to ' + towns[i].name;
                motto.textContent = '\"' + towns[i].motto +'\"';
                yearFounded.textContent = 'Wonderful little town - founded in ' + towns[i].yearFounded + ".";
                currentPopulation.textContent = "There's lots of room - population: " + towns[i].currentPopulation + "." ;
                averageRainfall.textContent = 'Average yearly rainfall: ' + towns[i].averageRainfall + '"' + ".";

                //Put elements in section
                card.appendChild(photo);
                card.appendChild(name);
                card.appendChild(motto);
                card.appendChild(yearFounded);
                card.appendChild(currentPopulation);
                card.appendChild(averageRainfall);
                document.querySelector('div.cards').appendChild(card);
            }
        }
    });


