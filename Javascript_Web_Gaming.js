var cards = [
	{
		type: "visa",
		number: "Cost: 25,855 Bath",
		expiration: "2021",
		transactions: [
			{
				name: "Intel Core i5 10400F",
				category: "CPU",
				ID: "S1",
				date: "2021",
			},
			{
				name: "MSI B460-A Pro",
				category: "Mainboard",
				ID: "S1",
				date: "2021",
			},
			{
				name: "Corsair Vengeance LPX DDR4 3200 16GB (8GB x2)",
				category: "RAM",
				ID: "S1",
				date: "2021",
			},
			{
				name: "WD Blue SSD M.2 500GB",
				category: "SSD/HDD",
				ID: "S1",
				date: "2021",
			},
				{
				name: "Gigabyte RTX 2060 SUPER WINDFORCE OC 8GB",
				category: "GPU",
				ID: "S1",
				date: "2021",
			},
			{
				name: "SilverStone ST60F-E230 600W",
				category: "Power Supply",
				ID: "S1",
				date: "2021",
			},
			{
				name: "Tsunami Galaxy G12",
				category: "Case",
				ID: "S1",
				date: "2021",
			}
		]
	},
	{
		type: "amex",
		number: "Cost: 21,370 Bath",
		expiration: "2021",
		transactions: [
			{
				name: "Intel Core i3 10100F",
				category: "CPU",
				ID: "S2",
				date: "2021",
			},
			{
				name: "Gigabyte H410M S2",
				category: "Mainboard",
				ID: "S2",
				date: "2021",
			},
			{
				name: "Corsair Vengeance LPX DDR4 3200 16GB (8GB x2)",
				category: "RAM",
				ID: "S2",
				date: "2021",
			},
			{
				name: "GALAX GAMER L 960GB SSD",
				category: "SSD/HDD",
				ID: "S2",
				date: "2021",
			},
				{
				name: "GALAX GTX 1660 SUPER EX 6GB",
				category: "GPU",
				ID: "S2",
				date: "2021",
			},
			{
				name: "SilverStone ST70F-E230 700W",
				category: "Power Supply",
				ID: "S2",
				date: "2021",
			},
			{
				name: "Antec NX220",
				category: "Case",
				ID: "S2",
				date: "2021",
			}
		]
	},
	{
		type: "mc",
		number: "Cost: 25,155 Bath",
		expiration: "2021",
		transactions: [
			{
				name: "AMD Ryzen 5 2600",
				category: "CPU",
				ID: "S3",
				date: "2021",
			},
			{
				name: "ASUS TUF B450M-Plus",
				category: "Mainboard",
				ID: "S3",
				date: "2021",
			},
			{
				name: "Corsair Vengeance LPX DDR4 3200 16GB (8GB x2)",
				category: "RAM",
				ID: "S3",
				date: "2021",
			},
			{
				name: "Seagate Barracuda Q1 480GB",
				category: "SSD/HDD",
				ID: "S3",
				date: "2021",
			},
				{
				name: "ASUS Dual RX 5700 OC EVO 8GB",
				category: "GPU",
				ID: "S3",
				date: "2021",
			},
			{
				name: "Antec B650 650W",
				category: "Power Supply",
				ID: "S3",
				date: "2021",
			},
			{
				name: "Tsunami Galaxy G7 TG",
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