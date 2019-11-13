const express = require('express');
const app = express();

app.use(express.json());

const handleRequest = (req, res) => {

  const request = {
	  method: req.method,
	  baseUrl: req.baseUrl,
	  uri: req.url,
	  host: req.hostname,
	  headers: {
		  ... req.headers
	  },
	  body: req.body
  };
  
  console.log( request );
  
  
  res.send(request);
}

app.all('*', handleRequest);

const port = process.env.PORT || 3002;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});