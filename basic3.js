 Math.random();
            random = Math.round(Math.random() * 50) - 6;
            console.log(random);
            var img ;
            var src;
            if (random <= 10) {
                document.write('<div class = "text"><b>The temperature is cold</b></div>');
                document.write(`<div class="text"><b>${random}°C</b>`);
                 img = document.createElement("img");
                img.src = "cold.jpg";
                src = document.getElementById("x");
                src.appendChild(img)

            } else if (random >= 11 && random < 32) {
                document.write('<div class = "text"><b>The temperature is moderate</b></div>');
                document.write(`<div class="text"><b>${random}°C</b>`);
                img = document.createElement("img");
                img.src = "moderate.jpg";
                src = document.getElementById("x");
                src.appendChild(img)


            } else {
                document.write('<div class = "text"><b>The temperature is hot</b></div>');
                document.write(`<div class="text"><b>${random}°C</b>`);
                img = document.createElement("img");
                img.src = "hot.jpg";
                src = document.getElementById("x");
                src.appendChild(img)


            }