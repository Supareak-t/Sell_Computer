var cards = [
	{
		type: "visa",
		number: "Cost: 15,840 Bath",
		expiration: "2021",
		transactions: [
			{
				name: "AMD Ryzen 3 3100",
				category: "CPU",
				ID: "S1",
				date: "2021",
			},
			{
				name: "GIGABYTE B450M S2H",
				category: "Mainboard",
				ID: "S1",
				date: "2021",
			},
			{
				name: "KINGSTON HyperX FURY DDR4 8GB (8GBx1) 3200 Black",
				category: "RAM",
				ID: "S1",
				date: "2021",
			},
			{
				name: "Seagate Barracuda Q1 540GB",
				category: "SSD/HDD",
				ID: "S1",
				date: "2021",
			},
				{
				name: "MSI GTX 1650 Ventus",
				category: "GPU",
				ID: "S1",
				date: "2021",
			},
			{
				name: "Coolermaster Elite V3 600W",
				category: "Power Supply",
				ID: "S1",
				date: "2021",
			},
			{
				name: "Corsair Carbide 03",
				category: "Case",
				ID: "S1",
				date: "2021",
			}
		]
	},
	{
		type: "amex",
		number: "Cost: 20,000 Bath",
		expiration: "2021",
		transactions: [
			{
				name: "Intel Core i5-10400F",
				category: "CPU",
				ID: "S2",
				date: "2021",
			},
			{
				name: "GIGABYTE B460M DS3H",
				category: "Mainboard",
				ID: "S2",
				date: "2021",
			},
			{
				name: "T-Force Dark-Z DDR4 3200 16GB",
				category: "RAM",
				ID: "S2",
				date: "2021",
			},
			{
				name: "WD Blue 2TB",
				category: "SSD/HDD",
				ID: "S2",
				date: "2021",
			},
				{
				name: "GIGABYTE GTX 1650 Windforce",
				category: "GPU",
				ID: "S2",
				date: "2021",
			},
			{
				name: "Silverstone ST60F-ES230 600W",
				category: "Power Supply",
				ID: "S2",
				date: "2021",
			},
			{
				name: "Thermaltake S100 TG",
				category: "Case",
				ID: "S2",
				date: "2021",
			}
		]
	},
	{
		type: "mc",
		number: "Cost: 40,000 Bath",
		expiration: "2021",
		transactions: [
			{
				name: "AMD Ryzen 7 3700X",
				category: "CPU",
				ID: "S3",
				date: "2021",
			},
			{
				name: "MSI X570-A Pro",
				category: "Mainboard",
				ID: "S3",
				date: "2021",
			},
			{
				name: "	Corsair DDR4 3200 16GB",
				category: "RAM",
				ID: "S3",
				date: "2021",
			},
			{
				name: "Corsair MP510 480GB",
				category: "SSD/HDD",
				ID: "S3",
				date: "2021",
			},
				{
				name: "GALAX GeForce RTX 2060 SUPER",
				category: "GPU",
				ID: "S3",
				date: "2021",
			},
			{
				name: "ANTEC VP700",
				category: "Power Supply",
				ID: "S3",
				date: "2021",
			},
			{
				name: "Corsair 4000D TG",
				category: "Case",
				ID: "S3",
				date: "2021",
			}
		]
	}
];

//Print Cards
function generateCards() {
	var output = "";
	cards.forEach(function(cards, index) {
		output += "<div class='credit-card " + cards.type + "'>";
		output += "<div class='card-image'></div>";
		output += "<div class='credit-card_number'>" + cards.number + "</div>";
		output += "<div class='credit-card_expiration'>Valid Thru:" + cards.expiration + "</div>";
		output += "</div>"
	});
	return output;
}
//Display Cards on Page
document.querySelector('.cards').innerHTML = generateCards();
//Add initial active class
document.querySelector('.credit-card.visa').classList.add('active');;

//Print Cards
function showTransactions(creditCards, card) {
	var output = "";
	var total = 0;
  //if card is active print its transactions from cards data 
	for (var i = 0; i < creditCards.length; i++) {
		if (creditCards[i] === card) {
			for (var n = 0; n < cards[i].transactions.length; n++) {
				output += "<div class='transaction-item " + cards[i].transactions[n].type + "'>";
				output += "<div class='transaction-item_details'>";
				output += "<h3>"+ cards[i].transactions[n].name +"</h3>";
				output += "<span class='details'>"+ cards[i].transactions[n].category + " " + cards[i].transactions[n].ID +" - " + cards[i].transactions[n].date + "</span>";
				output += "</div>";
				output += "</div>";
				//for transaction length add amounts to total 
			}
			document.querySelector('.transactions').innerHTML = output;
		} 
	}
}

//Grab cardList
var cardsList = document.querySelectorAll('.credit-card');
//Grab single card
var creditCard = document.querySelector( '.credit-card' );
//Grab activeCard
var activeCard = document.querySelector('.credit-card.active');
//Grab transaction
var transaction = document.querySelector('.transactions');

//Show transactions
showTransactions(cardsList, activeCard);

//add class show to transaction div for animation
transaction.classList.add('show')

//Toggle Active class on Cards and show class on transactions
for(let i = 0; i < cardsList.length; i++) {
	cardsList[i].addEventListener("click", function(e) {
		e.preventDefault;
		for(let n = 0; n < cardsList.length; n++) {
			if(cardsList[n].classList.contains('active')) {
				cardsList[n].classList.remove('active');
			}
		}
		this.classList.add('active');
		showTransactions(cardsList, this);

		transaction.classList.remove("show");
		//triggering reflow
		void transaction.offsetWidth;

		transaction.classList.add("show");		
  });
}

//simple modal
var modalControl = document.querySelector('.modal-control');
var modalClose = document.querySelector('.modal-close');
var modal = document.querySelector('.modal');

modalControl.addEventListener('click', function() {
	document.querySelector('.modal').classList.add('open');
}, false);

//click anywhere to close example modal
modal.addEventListener('click', function() {
	document.querySelector('.modal').classList.remove('open');
}, false);