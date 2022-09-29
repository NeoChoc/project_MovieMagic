import express, { response } from 'express';

// Initializing the express and port number
const app = express();

const PORT = 9898;

// set view engine
app.set('view engine', 'ejs');

// shows a middleware function with no mount path. The function is executed every time the app receives a request.
app.use((request, _, next) => {
	next();
});

app.use(express.static('./public'));

app.get('/', (request, response) => {
	response.render('index', { data });
});

// App listening on the below port
app.listen(PORT);
