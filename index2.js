exports.getLyrics = require('./lib/getLyrics');
exports.getAlbumArt = require('./lib/getAlbumArt');
exports.getSong = require('./lib/getSong');
exports.searchSong = require('./lib/searchSong');
exports.getSongById = require('./lib/getSongById');

// const h1 = document.querySelector('h1');

// import { getLyrics, getSong } from 'genius-lyrics-api';
const { getLyrics, getSong } = require('genius-lyrics-api');

// const getLyrics = require('./lib/getLyrics');
// const getSong = require('./lib/getSong');   

const options = {
	apiKey: 'Ok-8KtmtmQKX79dcDK4DbOrC3oMZAIUsl6974Bw7F0ayvS6sZ8lOTpy0vSnx9j9V',
	title: 'Elle pleut',
	artist: 'Nekfeu',
	optimizeQuery: true
};
console.log('hello');
getLyrics(options).then(
	(lyrics) => {
		console.log(lyrics)
	})
	.catch((error) => {
		console.log(error);
	});

getSong(options).then(
	(song) =>{ 
		console.log(`${song.id} - ${song.title} - ${song.url} - ${song.albumArt} - ${song.lyrics}`);
		// h1.innerHTML = (`${song.title}`)});
	})
	.catch((error) => {
		console.log(error);
	});
	

// const express = require('express');
// const app = express();
// const path = require('path');

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.listen(3000, function () {
//   console.log('App listening on port 3000!');
// });

