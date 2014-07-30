// Mumblebot!
// by Falcon and Eru and Kingles
(function () {
'use strict';

    var leagueApi = require('./leagueApi');
    var mumble = require('mumble');

    // Set the MUMBLE_URL env variable: `export MUMBLE_URL="erulabs.com"`
    mumble.connect( 'mumble://' + process.env.MUMBLE_URL, {}, function (error, connection) {
        if (error) { throw new Error( error ); }

        // This should be a database or something.
        // Have some sort of linking function /lol summonerset <summoner name>
        var users = [
            {
                // Summoner Name
                leagueName: '',
                // Mumble session ID
                session: '',
                // Other mumble state stuff
                state: {},
                // The current mumble user (or most recent login from this peroson)
                name: ''
            }
        ];
        // Find a user by mumble session ID
        function getUserBySession (sessionId) {
            var found = false;
            for (var i, _len = users.length; i < _len; i++) {
                if (users[i].session === sessionId) {
                    found = users[i];
                }
            }
            return found;
        }
        function getUserByLeagueName (leagueName) {
            var found = false;
            for (var i, _len = users.length; i < _len; i++) {
                if (users[i].leagueName === leagueName) {
                    found = users[i];
                }
            }
            return found;
        }

        // Username here
        connection.authenticate( 'Mumblebot' );

        connection.on( 'userState', function (state) {
            // something about a user has changed or we're getting the info as we login
            // todo: update a database?
            // For each user in users...
            var found = false;
            for (var i, _len = users.length; i < _len; i++) {
                var user = users[i];
                if (user.name === state.name) {
                    user.session = state.session;
                    user.state = state;
                    found = true;
                }
            }
            // No such user exists - add them to the users list.
            if (!found) {
                users.push({
                    session: state.session,
                    name: state.name,
                    state: state
                });
            }
        });
        // register new league summoner (to be refactored..)

        connection.on( 'textMessage', function(messageData){
            function setLeagueName(user, summonerName){
                if(user){
                    user.leagueName = summonerName;
                    connection.outputStream().pipe("Okay cool. Your new lol summoner name is set to " + matchData[1]);
                }
            };

            var matchData = messageData.message.match(/^\/lol reg(?:ister)? (.*)/);
            if(matchData){
                var talkingTo = getUserBySession(messageData.actor);
                if(talkingTo.leagueName !== ''){
                    // should be a whisper..
                    connection.outputStream().pipe("yo " + talkingTo.name + ", so like. you've already registered a league of legends summoner name under this account as "+ talkingTo.leagueName +". message with /lol override to replace your currently registered league name");
                    //register new listener for override
                    function overrideListener(overrideMessage){
                        if(overrideMessage.actor === messageData.actor && overrideMessage === "/lol override"){
                            setLeagueName(talkingTo, matchData[1])
                        }
                        connection.removeListener('textMessage', overrideListener);
                    }

                    connection.on('textMessage', overrideListener);
                } else {
                    setLeagueName(talkingTo, matchData[1])
                }
             }; 
        };

        function newListener(regex, action){
            connection.on('textMessage', function(textMessage){
                var talkingTo = getUserBySession(messageData.actor);
                if(typeof regex.test === "function"){
                    var matchData = messageData.message.match(regex);
                } else {
                    throw new Error("didn't provide a regex when creating a new listener");
                }

                action(talkingTo, matchData);
            })
        }

        //league api listener
        newListener(/\/lol /)

        connection.on( 'textMessage', function (data) {
            // Find the user based on the active session
            var user = getUserBySession(data.actor);
            var message = user.name + ':', data.message;
            console.log(message);
            connection.outputStream().pipe(message);
        });

    });


}).call(this);
