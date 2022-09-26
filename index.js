const express = require("express");
const app = express();


app.use(express.static(__dirname + '/client'))

const port = process.env.PORT || 3000
app.get('/test', function(request, response) {
	response.type('text/plain')
	response.send('Node.js and Express running on port='+port)
})

app.listen(port, function() {
	console.log("Server is running at http://localhost:3000/")
})

//function playGame()
//{
//	var randNum1 = Math.floor(Math.random()*6)+1;
//	var playerOneRoll= "dice/die"+randNum1+".png";

//	var randNum2 =  Math.floor(Math.random()*6)+1;
//	var playerTwoRoll = "dice/die"+randNum2+".png"

//	var playerOne=document.querySelectorAll("img")[0];
//	playerOne.setAttribute("src",playerOneRoll);

//	var playerTwo=document.querySelectorAll("img")[1];
//	playerTwo.setAttribute("src", playerTwoRoll);

//	if (randNum1 > randNum2)
//	{
//		document.querySelector("h1").innerHTML="Player One Wins!"
//	}
//	else if (randNum1 < randNum2)
//	{
//		document.querySelector("h1").innerHTML="Player Two Wins!"
//	}
//	else
//	{
//		document.querySelector("h1").innerHTML="Its a draw"
//	}
//}

//document.querySelector("button").addEventListener("click",playGame);