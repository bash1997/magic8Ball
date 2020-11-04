$(document).ready(function(){

var magic8Ball = {};
magic8Ball.listOfAnswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don''t count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
	

magic8Ball.askQUESTION = function(question) {
	
	var random = Math.random();
	random = random * magic8Ball.listOfAnswers.length;
	random = Math.floor(random);
	var randomAnswer =
		this.listOfAnswers[random];
	setTimeout (
		function() {
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		}, 500);
	$("#answer").fadeIn(4000);
	$("#answer").text(randomAnswer);
	console.log(question);
	console.log(randomAnswer);

};
$("#answer").hide();
var ask = function (){
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout (
		function() {
			var question = prompt("Ask a yes/no question!");
			$("#8ball").effect("shake");
			magic8Ball.askQUESTION(question);
			}, 500);
};
$("#questionButton").click(ask);
});