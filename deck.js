/*

unpacked cards

0000 0 0 0 0 0 0 000000

0000 card value 
  0x01 Ace
  0x02 Two
  0x03 Three
  0x04 Four
  0x05 Five
  0x06 Six
  0x07 Seven
  0x08 Eight
  0x09 Nine
  0x0A Pawn
  0x0B Court
  0x0C Crown
  0x0F Excuse

  0 0 0 0 0 0 suit(s)

  100000 Moon
  010000 Sun
  001000 Waves
  000100 Leaves
  000010 Wyrms
  000001 Knots

  000000 unused

*/


var cards = 

  [
    /* 0 */   {"name":"The Excuse",           "rank":0,   "moon":false,   "sun":false,  "waves":false,  "leaves":false, "wyrms":false,  "knots":false   , "personality": false, "location":false, "event": false },

    /* 1 */   {"name":"Ace of Moons",         "rank":1,   "moon":true,    "sun":false,  "waves":false,  "leaves":false, "wyrms":false,  "knots":false   , "personality": false, "location":false, "event": false },
    /* 2 */   {"name":"Ace of Suns",          "rank":1,   "moon":false,   "sun":true,   "waves":false,  "leaves":false, "wyrms":false,  "knots":false   , "personality": false, "location":false, "event": false },
    /* 3 */   {"name":"Ace of Waves",         "rank":1,   "moon":false,   "sun":false,  "waves":false,  "leaves":false, "wyrms":false,  "knots":false   , "personality": false, "location":false, "event": false },
    /* 4 */   {"name":"Ace of Leaves",        "rank":1,   "moon":false,   "sun":false,  "waves":false,  "leaves":true,  "wyrms":false,  "knots":false   , "personality": false, "location":false, "event": false },
    /* 5 */   {"name":"Ace of Wyrms",         "rank":1,   "moon":false,   "sun":false,  "waves":false,  "leaves":false, "wyrms":true,   "knots":false   , "personality": false, "location":false, "event": false },
    /* 6 */   {"name":"Ace of Knots",         "rank":1,   "moon":false,   "sun":false,  "waves":false,  "leaves":false, "wyrms":false,  "knots":true    , "personality": false, "location":false, "event": false },


    /* 7 */   {"name":"The Author",           "rank":2,   "moon":true,    "sun":false,  "waves":false,  "leaves":false, "wyrms":false,  "knots":true    , "personality": true , "location":false, "event": false },
    /* 8 */   {"name":"The Desert",           "rank":2,   "moon":false,   "sun":true,   "waves":false,  "leaves":false, "wyrms":true,   "knots":false   , "personality": false, "location":true , "event": false },
    /* 9 */   {"name":"The Origin",           "rank":2,   "moon":false,   "sun":false,  "waves":true,   "leaves":true,  "wyrms":false,  "knots":false   , "personality": false, "location":true , "event": true  },

    /* 10 */  {"name":"The Painter",          "rank":3,   "moon":false,   "sun":true,   "waves":false,  "leaves":false, "wyrms":false,  "knots":true    , "personality": true , "location":false, "event": false },
    /* 11 */  {"name":"The Savage",           "rank":3,   "moon":false,   "sun":false,  "waves":false,  "leaves":true,  "wyrms":true,   "knots":false   , "personality": true , "location":false, "event": false },
    /* 12 */  {"name":"The Journey",          "rank":3,   "moon":true,    "sun":false,  "waves":true,   "leaves":true,  "wyrms":true,   "knots":false   , "personality": false, "location":false, "event": true  },

    /* 13 */  {"name":"The Battle",           "rank":4,   "moon":false,   "sun":false,  "waves":false,  "leaves":false,  "wyrms":true,   "knots":true   , "personality": false, "location":false, "event": true  },
    /* 14 */  {"name":"The Sailor",           "rank":4,   "moon":false,   "sun":false,  "waves":true,   "leaves":true,   "wyrms":false,  "knots":false  , "personality": true , "location":false, "event": false },
    /* 15 */  {"name":"The Mountain",         "rank":4,   "moon":true,    "sun":true,   "waves":false,  "leaves":false,  "wyrms":false,  "knots":false  , "personality": false, "location":true , "event": false },

    /* 16 */  {"name":"The Discovery",        "rank":5,   "moon":false,   "sun":true,   "waves":true,   "leaves":false,  "wyrms":false,  "knots":false  , "personality": false, "location":false, "event": true  },
    /* 17 */  {"name":"The Soldier",          "rank":5,   "moon":false,   "sun":false,  "waves":false,  "leaves":false,  "wyrms":true,   "knots":true   , "personality": true , "location":false, "event": false },
    /* 18 */  {"name":"The Forest",           "rank":5,   "moon":true,    "sun":false,  "waves":false,  "leaves":true,   "wyrms":false,  "knots":false  , "personality": false, "location":true , "event": false },

    /* 19 */  {"name":"The Penitent",         "rank":6,   "moon":false,   "sun":true,   "waves":false,  "leaves":false,  "wyrms":true,   "knots":false  , "personality": true , "location":false, "event": false },
    /* 20 */  {"name":"The Lunatic",          "rank":6,   "moon":true,    "sun":false,  "waves":true,   "leaves":false,  "wyrms":false,  "knots":false  , "personality": true , "location":false, "event": false },
    /* 21 */  {"name":"The Market",           "rank":6,   "moon":false,   "sun":false,  "waves":false,  "leaves":false,  "wyrms":false,  "knots":true   , "personality": false, "location":true , "event": true  },

    /* 22 */  {"name":"The Castle",           "rank":7,   "moon":false,   "sun":true,   "waves":false,  "leaves":false,  "wyrms":false,  "knots":true   , "personality": false, "location":true , "event": false },
    /* 23 */  {"name":"The Chance Meeting",   "rank":7,   "moon":true,    "sun":false,  "waves":false,  "leaves":true,   "wyrms":false,  "knots":false  , "personality": false, "location":false, "event": true  },
    /* 24 */  {"name":"The Cave",             "rank":7,   "moon":false,   "sun":false,  "waves":true,   "leaves":false,  "wyrms":true,   "knots":false  , "personality": false, "location":true , "event": false },

    /* 25 */  {"name":"The Betrayal",         "rank":8,   "moon":false,   "sun":false,  "waves":false,  "leaves":false,  "wyrms":true,   "knots":true   , "personality": false, "location":false, "event": true  },
    /* 26 */  {"name":"The Diplomat",         "rank":8,   "moon":true,    "sun":true,   "waves":false,  "leaves":false,  "wyrms":false,  "knots":false  , "personality": true , "location":false, "event": false },
    /* 27 */  {"name":"The Mill",             "rank":8,   "moon":false,   "sun":false,  "waves":true,   "leaves":true,   "wyrms":false,  "knots":false  , "personality": false, "location":true , "event": false },

    /* 28 */  {"name":"The Pact",             "rank":9,   "moon":true,    "sun":true,   "waves":false,  "leaves":false,  "wyrms":false,  "knots":false  , "personality": false, "location":false, "event": true  },
    /* 29 */  {"name":"The Merchant",         "rank":9,   "moon":false,   "sun":false,  "waves":false,  "leaves":true,   "wyrms":false,  "knots":true   , "personality": true , "location":false, "event": false },
    /* 30 */  {"name":"The Darkness",         "rank":9,   "moon":false,   "sun":false,  "waves":true,   "leaves":false,  "wyrms":true,   "knots":false  , "personality": false, "location":true , "event": false },

    /* 31 */  {"name":"The Watchman",         "rank":10,   "moon":true,    "sun":false, "waves":false,  "leaves":false,  "wyrms":true,   "knots":true   , "personality": true , "location":false, "event": false },
    /* 32 */  {"name":"The Borderland",       "rank":10,   "moon":false,   "sun":false, "waves":true,   "leaves":true,   "wyrms":true,   "knots":false  , "personality": false, "location":true , "event": false },
    /* 33 */  {"name":"The Harvest",          "rank":10,   "moon":true,    "sun":true,  "waves":false,  "leaves":true,   "wyrms":false,  "knots":false  , "personality": false, "location":false, "event": true  },
    /* 34 */  {"name":"The Light Keeper",     "rank":10,   "moon":false,   "sun":true,  "waves":true,   "leaves":false,  "wyrms":false,  "knots":true   , "personality": true , "location":false, "event": false },

    /* 35 */  {"name":"The Consul",           "rank":11,   "moon":true,    "sun":false,  "waves":true,   "leaves":false,  "wyrms":false,  "knots":true  , "personality": true , "location":false, "event": false },
    /* 36 */  {"name":"The Rite",             "rank":11,   "moon":true,    "sun":false,  "waves":false,  "leaves":true,   "wyrms":true,   "knots":false , "personality": false, "location":false, "event": true  },
    /* 37 */  {"name":"The Window",           "rank":11,   "moon":false,   "sun":true,   "waves":false,  "leaves":true,   "wyrms":false,  "knots":true  , "personality": false, "location":true , "event": false },
    /* 38 */  {"name":"The Island",           "rank":11,   "moon":false,   "sun":true,   "waves":true,   "leaves":false,  "wyrms":true,   "knots":false , "personality": false, "location":true , "event": false },

    /* 39 */  {"name":"The Huntress",         "rank":12,   "moon":true,    "sun":false,  "waves":false,  "leaves":false,  "wyrms":false,  "knots":false , "personality": true , "location":false, "event": false },
    /* 40 */  {"name":"The Bard",             "rank":12,   "moon":false,   "sun":true,   "waves":false,  "leaves":false,  "wyrms":false,  "knots":false , "personality": true , "location":false, "event": false },
    /* 41 */  {"name":"The Sea",              "rank":12,   "moon":false,   "sun":false,  "waves":true,  "leaves":false,   "wyrms":false,  "knots":false , "personality": false, "location":true , "event": false },

    /* 42 */  {"name":"The End",              "rank":12,   "moon":false,   "sun":false,  "waves":false,  "leaves":true,   "wyrms":false,  "knots":false , "personality": false, "location":true , "event": true  },
    /* 43 */  {"name":"The Calamity",         "rank":12,   "moon":false,   "sun":false,  "waves":false,  "leaves":false,  "wyrms":true,   "knots":false , "personality": false, "location":false, "event": true  },
    /* 44 */  {"name":"The Windfall",         "rank":12,   "moon":false,   "sun":false,  "waves":false,  "leaves":false,  "wyrms":false,  "knots":true  , "personality": false, "location":false, "event": true  }
  ];
var ranks =
  [
  /* 0 */   {"name": "The Excuse"},
  /* 1 */   {"name": "Ace"},
  /* 2 */   {"name": "Two"},
  /* 3 */   {"name": "Three"},
  /* 4 */   {"name": "Four"},
  /* 5 */   {"name": "Five"},
  /* 6 */   {"name": "Six"},
  /* 7 */   {"name": "Seven"},
  /* 8 */   {"name": "Eight"},
  /* 9 */   {"name": "Nine"},
  /* 10 */  {"name": "Pawn"},
  /* 11 */  {"name": "Court"},
  /* 12 */  {"name": "Crown"}
  ];

// a clean, unshuffled deck of decktet cards

var deck = 
[
  0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44
];

var maxDecksPerSet = 100;

// fisher-yates shuffle

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

// make one shuffled deck and return it
function genDeck()
{
  var a = deck.slice(0);
  shuffle(a);
  return a;
}


// make 1000 decks, and generate provably fair package for public dissemination.
function genDeckSet()
{

// generate a name for this deck
  try {
    var deckid = crypto.randomBytes(32);
    // console.log('Have %d bytes of random data: %s', buf.length, buf);
  } catch (ex) {
    console.log("Error with crypto.randomBytes",ex);
    // handle error
    // most likely, entropy sources are drained
  }


// generate a secret for this deck
  try {
    var key = crypto.randomBytes(256);
    // console.log('Have %d bytes of random data: %s', buf.length, buf);
  } catch (ex) {
    console.log("Error with crypto.randomBytes",ex);
    // handle error
    // most likely, entropy sources are drained
  }

  var newDeckSet = {};
  newDeckSet.key = key;
  newDeckSet.Decks = [];
  for(var i=0; i < maxDecksPerSet; i++)
  {
    newDeckSet.Decks[i] = genDeck();
  }


  var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL

  var newDeckSetString  = JSON.stringify(newDeckSet);

  var cipher = crypto.createCipher(algorithm, newDeckSet.key);  
  var encrypted = cipher.update(newDeckSetString, 'utf8', 'hex') + cipher.final('hex');

  var decipher = crypto.createDecipher(algorithm, newDeckSet.key);
  var decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');

  // console.log(encrypted)
  newDeckSet.encrypted = encrypted;
  newDeckSet.decrypted = decrypted;
  newDeckSet.deckid = deckid.toString('hex');

  newDeckSetString  = JSON.stringify(newDeckSet);

  // if there is a currentDeck.json file already, archive it and begin crash recovery.



  // write the deck to the currentDeck.json file

  fs.writeFile("logs/currentDeck.json", JSON.stringify(newDeckSet), function (err) {
    if (err) return console.log(err);
  });

  // write the encrypted deck to the deck-UUID.json file 

  fs.writeFile('logs/deck-' + newDeckSet.deckid + ".hex", encrypted, function (err) {
    if (err) return console.log(err);
  });

  // write the secret to the secrets.json file

  fs.appendFile("logs/secrets.json", "deck " + newDeckSet.deckid + " = " + newDeckSet.key.toString('hex'), function (err) {
    if (err) return console.log(err);
  });

  console.log("Deckset " + newDeckSet.deckid + " generated.");

  return (newDeckSet);

}

var http = require('http');
var crypto = require('crypto');
var assert = require('assert');
var qs = require('querystring');
var url = require('url');
var fs = require('fs');




var server = http.createServer(function(req, res) 
{
  if (req.url === '/favicon.ico') 
  {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    // console.log('favicon requested');
    return;
  }

  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;

  // we expect 2 params: tableID and deckKey

  if(query.tableID)
  {
    // verify tableID is valid
  }

  if(query.deckKey)
  {
    // verify this is a current deckKey
  }

  console.log("query ", query.foo );

  //res.writeHead(200);
  if(global.currentDeck == maxDecksPerSet) // need to gen a new deckSet
  {
    global.currentDeckSet = genDeckSet();
    global.currentDeck = 0;
  }

  // append to currentDeck.log that we claimed this deck with provided tableID

  fs.appendFile('logs/deck-' + global.currentDeckSet.deckid + ".log", 'Deck # ' + global.currentDeck + " used for table " + query.tableID + "\r\n", function (err) {
    if (err) return console.log(err);
  });


  //var reply = ;
  // reply.currentDeck = global.currentDeck;
  //global.currentDeck++;

  var resp = {};
  resp.deck = global.currentDeckSet.Decks[global.currentDeck];
  resp.deckIx = global.currentDeck;
  resp.deckId = global.currentDeckSet.deckid;

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(resp));

  //res.end(global.currentDeckSet.Decks[global.currentDeck].toString() + " -- " + global.currentDeck);

  console.log("current deck ", global.currentDeck);
  global.currentDeck++;

});

// INIT HERE

global.currentDeckSet = genDeckSet();
global.currentDeck = 0;

// console.log("I generated a deckSet at ", global.currentDeck);

server.listen(8080);
























