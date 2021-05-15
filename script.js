
// Make a timer that reads the current day 
var today = moment();
$('#today').text(today.format('LLLL'));

var savedEvent = "click"

$(".btn").on("click",function(){

    var clickedButtonNumber = $(this).attr("data-time");

    var myText = $("#description-" + clickedButtonNumber).val();

    console.log(myText)
 
})