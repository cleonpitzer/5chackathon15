function clickCounter(dininghall) {
if(typeof(Storage) !== "undefined") {
if (localStorage[dininghall]) {
localStorage[dininghall] = Number(localStorage[dininghall])+1;
} else {
localStorage[dininghall] = 1;
}
//document.getElementById("result").innerHTML = "Number of people in this dining hall so far: " + localStorage[dininghall];
$("#result").text("Number of people in this dining hall so far: " + localStorage[dininghall]);
} else {
//document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
$("#result").text("Sorry, your browser does not support web storage...");
}
return Number(localStorage[dininghall])
}
function trafficTime(dininghall){
    var x = clickCounter(dininghall)

    $('#traffic').text('approx wait time is: ' + 2 * x  + ' minutes');

}
$(document).ready(function(){ //waits for the document to load

    $('.btn').click(function(e) {
        e.preventDefault();
        var post = $('.status-box').val();
        console.debug(post);
        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val('');
        
    });
});