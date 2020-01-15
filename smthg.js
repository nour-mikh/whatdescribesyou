var nickName = document.getElementById("nickName").value
var name = document.getElementById("name").value
var certificate = document.getElementById("certificate");


var generate = document.getElementById("generate");


document.getElementById("reset").addEventListener( "click", function resetCer(){
	certificate.innerText = "";
})


generate.addEventListener( "click", function generateQuality(){
	var nickName = document.getElementById("nickName").value
	var name = document.getElementById("name").value
	var qualities = ["cute", "sweet", "funny","unique","Sincere","Honest","Understanding",
	"Loyal","Truthful","Trustworthy","Intelligent","Dependable","Open-Minded",
	"Thoughtful","Wise","Considerate","Good-Natured","Reliable","Mature","Warm","Earnest","Kind","Friendly"
,"Kind-Hearted","Happy","Clean","Interesting","Unselfish","Good-Humored","Honorable","Humorous","Responsible",
"Cheerful","Trustful","Warm-Hearted","Broad-Minded","Gentle"
,"Well-Spoken"
,"Educated"
,"Reasonable"
,"Companionable"
,"Likable"
,"Trusting"
,"Clever"
,"Pleasant"
,"Courteous"
,"Quick-Witted"
,"Tactful"
,"Helpful"
,"Appreciative"
,"Imaginative"
,"Outstanding"
,"Self-Disciplined"
,"Brilliant"
,"Enthusiastic"
,"Level-Headed"
,"Polite"
,"Original"
,"Smart"
,"Forgiving"
,"Sharp-Witted"
,"Well-Read"
,"Ambitious"
,"Bright"
,"Respectful"
,"Efficient"
,"Good-Tempered"
,"Grateful"
,"Conscientious"
,"Resourceful"
,"Alert"
,"Good"
,"Witty"
,"Clear-Headed"
,"Kindly"
,"Admirable"
,"Patient"
,"Talented"
,"Perceptive"
,"Spirited"
,"Sportsmanlike"
,"Well-Mannered"
,"Cooperative"
,"Ethical"
,"Intellectual"
,"Versatile"
,"Capable"
,"Courageous"
,"Constructive"
,"Productive"
,"Progressive"
,"Individualistic"
,"Observant"
,"Ingenious"
,"Lively"
,"Neat"
,"Punctual"
,"Logical"
,"Prompt"
,"Accurate"
,"Sensible"
,"Creative"
,"Self-Reliant",
"Tolerant"];
	var idek = qualities[Math.floor(Math.random()*qualities.length)];
	certificate.insertAdjacentHTML( 'beforeend', 'Oh! Dear ' + name + " (also known as " + nickName + ') it seems like you are a ' + idek + " person, we like that !");
	var chosenColor = document.getElementById("chosenColor").value
	certificate.style.backgroundColor = chosenColor;

});



	