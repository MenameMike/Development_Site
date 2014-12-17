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
        for (i = 0; i < len; i++) {
			container.getElementsByClassName("class1")[0].remove();
        }
		
        //each case will add elements to the site.container var according to each page layout
		 var element = document.getElementById('container');
        switch (page) {

            case this.games:
//create game menu panel
                var newDiv = document.createElement("div");
                newDiv.className = "class1";
                newDiv.id = "gamemenu";
               
                element.appendChild(newDiv);
//create game info panel
                var newDiv = document.createElement("div");
                newDiv.className = "class1";
                newDiv.id = "info";
				var newEle = document.createElement("h3");
				var newEle_p = document.createElement("p");
				var newNode = document.createTextNode("~ Description ~");
				var newNode_p = document.createTextNode("Description Here");
				newEle_p.appendChild(newNode_p);
				newEle.appendChild(newNode);
				newDiv.appendChild(newEle);
				newDiv.appendChild(newEle_p);
             
                element.appendChild(newDiv);
//create canvas panal
                var newDiv = document.createElement("div");
                newDiv.className = "class1";
                newDiv.id = "canvas";
              
                element.appendChild(newDiv);

                break;

            case this.home:
//create home panel
                var newDiv = document.createElement("div");
                newDiv.className = "class1";
                newDiv.id = "homeMenu";
             
                element.appendChild(newDiv);
				
                break;

            case this.contact:
//create contact panel
                var newDiv = document.createElement("div");
                newDiv.className = "class1";
                newDiv.id = "contact";
				
//create link
				var newLink = document.createElement('a');
				
				newLink.setAttribute("href", "www.yahoo.com");
				
				var linkText = document.createTextNode("www.yahoo.com Email");
				
				newLink.appendChild(linkText);
			
				
//put the contact panel on the container 
				newDiv.appendChild(newLink);
                element.appendChild(newDiv);
                break;


            default:
                console.log("working");
        }
    }
}