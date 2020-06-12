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
                let name = document.createElement('h2');
                let photo = document.createElement('img');
                let motto = document.createElement('h3');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');

                //Create content
                photo.setAttribute('src', 'Images/' + towns[i].photo);
                photo.setAttribute('alt', towns[i].name);
                motto.textContent = '\"' + towns[i].motto + '\"';
                yearFounded.textContent = 'This wonderful little town was founded in ' + towns[i].yearFounded;
                currentPopulation.textContent = ', and has a population of only ' + towns[i].currentPopulation;
                averageRainfall.textContent = 'The average rainfall each year in inches is ' + towns[i].averageRainfall;

                //Put elements in each
                card.appendChild(name);
                card.appendChild(photo);
                card.appendChild(motto);
                card.appendChild(yearFounded);
                card.appendChild(currentPopulation);
                card.appendChild(averageRainfall);
                document.querySelector('div.cards').appendChild(card);
            }
        }
    });


