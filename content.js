// A $( document ).ready() block.
$( document ).ready(function() {
	// Log document ready to go!
	console.log("Hello from ScrapeBot! jQuery is ready.")
	$(window).load(function(){
	init();
	});	// end window.load	   
			   
function init(){
	//run function getData()
	getData();
};// end init()


function getData(){
	// Log ready to go!
	console.log("Ready to collect data");
	
//	collectInterval = setInterval(function(){
//			
//		$('#bids .glow').each(function(){
//			
//			sum = $(this).find('.sum').text();
//			value = $(this).find('.value').text();
//			amount = $(this).find('.amount').text();
//			price = $(this).find('.price').text();
//			
//			console.log("sum: "+sum);
//			console.log("value: "+value);
//			console.log("amount: "+amount);
//			console.log("price: "+price);
//			
//		});
//		
//	},100);
	
function sendData(elm,type) {
	
	// Get data as text from HTML element
	amount = elm.find('.amount').text();
	value = elm.find('.value').text();
	price = elm.find('.price').text();

	// Send data to remote php script
	$.ajax({
		'url': 'https://138.128.169.162/coinfleet/bitstampRT.php',
		'data': {
			'amount': amount,
			'value': value,
			'price': price
		},
		'complete' : function(transport){
			console.log(transport.responseText);
		}
	});

}	// end DoSomething(elm)
	
	//Listen for new #bids elements
	$('#bids').on('DOMNodeInserted', function(e) {
    if ($(e.target).is('.glow:not(.dark)')) {
       sendData($(e.target));
    }
	});
	
	//Listen for new #asks elements
	$('#asks').on('DOMNodeInserted', function(e) {
    if ($(e.target).is('.glow:not(.dark)')) {
       sendData($(e.target));
    }
	});
	
// Targets the data-id attribute
//	$('#bids').on('DOMNodeInserted', function(e) {
//    if ($(e.target).is("[data-id]")) {
//       DoSomething($(e.target));
//		}
//	});	
	
};// end getData()		
	

	
	// run getData()
	getData();


}); //end jQuery document ready

