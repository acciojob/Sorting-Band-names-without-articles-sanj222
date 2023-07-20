//your code here

 let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

        
        function removeArticles(name) {
            return name.replace(/^The\s|^A\s|^An\s/i, '');
        }

        // Sorting the band names without articles in lexicographic order
        bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

        // Displaying the sorted band names inside the ul tag with li tags
        const ulElement = document.getElementById('band');
        bandNames.forEach(band => {
            const liElement = document.createElement('li');
            liElement.textContent = band;
            ulElement.appendChild(liElement);
        });