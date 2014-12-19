/*
Global Object for page changing functions

pages: 
Home
Games
Contact

function:

 site.load(page)
*/
site = {

    container: document.getElementById('container'),

    home: {


    },

    games: {



    },

    contact: {


    },

// removes all elements from the container element - some bug need to run twice to remove [FIXED]

    load: function(page) {

        var elementArray = new Array();

        var len = container.getElementsByClassName("class1").length;
        for (var i = 0; i < len; i++) {
            container.getElementsByClassName("class1")[0].remove();
        }

//each case will add elements to the site.container var according to each page layout
        var element = document.getElementById('container');
        switch (page) {

//load game screen
            case this.games:
//create game menu panel
                var newDiv = document.createElement("div");
                newDiv.className = "class1";
                newDiv.id = "gamemenu";
                var gameMenuList = document.createElement('ul');
                var games = ["Game1", "Game2", "Game3", "Game4"];
                for (var i = 0; i < games.length; i++) {

                    var newLI = document.createElement("li");

                    var newButton = document.createElement("button");
                    console.log(games[i]);
                
                    newButton.className = "class3";
                    newLI.appendChild(newButton);
                    gameMenuList.appendChild(newLI);

	
                }
                newDiv.appendChild(gameMenuList);
				
//bind game panel to the container
                element.appendChild(newDiv);
                for (var i = 0; i < games.length; i++) {
			document.getElementsByClassName("class3")[i].innerText = games[i];	
			}
//create game info panel
                var gameInfo = document.createElement("div");
                gameInfo.className = "class1";
                gameInfo.id = "info";
                var newEle = document.createElement("h3");
                var newEle_p = document.createElement("p");

                newEle_p.appendChild(document.createTextNode("Description Here"));
                newEle.appendChild(document.createTextNode("~ Description ~"));
                gameInfo.appendChild(newEle);
                gameInfo.appendChild(newEle_p);

                element.appendChild(gameInfo);
//create canvas panal
                var newDiv = document.createElement("div");
                newDiv.className = "class1";
                newDiv.id = "canvas";

                element.appendChild(newDiv);

                break;
//load home screen
            case this.home:
//create home panel
                var newDiv = document.createElement("div");
                newDiv.className = "class1";
                newDiv.id = "homeMenu";
				
//bind homeMenu too the container 
				element.appendChild(newDiv);

                break;

//load contact screen
            case this.contact:
//create contact panel
                var contactPanel = document.createElement("div");
                contactPanel.className = "class1";
                contactPanel.id = "contact";
				var newHeading = document.createElement("h3");
				newHeading.className = "";
				
//create link
                var newLink = document.createElement('a');

                var linkText = document.createTextNode("www.yahoo.com");

                newLink.href = linkText;

                newLink.innerHTMl = "Hello";


//put the contact panel on the container 
                contactPanel.appendChild(newLink);
                element.appendChild(contactPanel);
                break;


            default:
                console.log("working");
        }
    }
}