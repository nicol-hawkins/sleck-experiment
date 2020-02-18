const http = require('http');

const contents = [
];

const stars = [
];

const server = http.createServer();

function handleGetContents(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(contents));
    response.end();
}

function handleGetContents(request, response) {
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.write(JSON.stringify(contents));
  response.end();
}

function handlePostContent(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});

    // This is what is required to read data that was sent from
    // the client
    let requestBody = '';
    request
      .on('data', (data) => requestBody += data.toString())
      .on('end', () => {

        // The data has been fully read at this point, let's store it somewhere
        contents.push(requestBody);
        response.write(JSON.stringify(contents));
        response.end();
      });
}


function handleGetStars(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(stars));
    response.end();
}

function handlePostToggleStar(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});

    // Get the star index number from the URL
    const url = request.url.replace(/\/$/, '');
    const urlParts = url.split('/');
    const indexOfCard = Number(urlParts[urlParts.length - 1]);

    // Check if the stars array is listing this Card as starred
    if (stars.includes(indexOfCard)) {
      // Presently starred, remove from array
      stars.splice(stars.indexOf(indexOfCard), 1);

    } else {
      // Not presently starred, add to array
      stars.push(indexOfCard);
    }

    response.write(JSON.stringify(stars));
    response.end();
}



function handle404(request, response) {
    response.writeHead(404, {'Content-Type': 'application/json'});
    response.write('{"error": "404"}');
    response.end();
}

server.on('request', (request, response) => {
  const { method, url }  = request;
  console.log(method, url);

  if (url === '/get-contents/') {
    handleGetContents(request, response);
  } else if (url === '/send-content/') {
    handlePostContent(request, response);
  } else if (url.startsWith('/toggle-star/')) {
    handlePostToggleStar(request, response);
  } else if (url === '/get-stars/') {
    handleGetStars(request, response);
  } else {
    handle404(request, response);
  }
});

server.listen(3001, () => {
  console.log('Backend server listening on http://localhost:3001/');
});

