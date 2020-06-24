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
            if (towns[i].name == "Preston" //towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs"
            ) {
               
                let box = document.createElement('eventbox');
                let event1 = document.createElement('p');
                let event2 = document.createElement('p');
                let event3 = document.createElement('p');



                //Create content
                event1.textContent = towns[i].events[0];
                event2.textContent = towns[i].events[1];
                event3.textContent = towns[i].events[2];



                //Put elements in section
                box.appendChild(event1);
                box.appendChild(event2);
                box.appendChild(event3);
                document.querySelector('div.prestonEvents').appendChild(box);
            }
            
        }
    });

    