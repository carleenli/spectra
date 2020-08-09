const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = 'logo.png';
// const token = process.env.token;
const token = '6qpEhnsk8XnrZQ9nEW823QdbqYYPETFU9au8fPnPa5Wh';
const container = document.createElement('div');
container.setAttribute('class', 'container');

// app.appendChild(logo);
app.appendChild(container);
var request = new XMLHttpRequest();
request.open('GET', 'https://api.typeform.com/forms/RiISAHTb/responses', true);
request.setRequestHeader('Authorization', 'Bearer ' + token);
request.setRequestHeader('Access-Control-Allow-Origin', '*')
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;
      console.log(movie.title);
      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
