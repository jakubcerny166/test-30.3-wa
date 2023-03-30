$(document).ready(function() {

});

function generateFacts() {
    $.ajax({
        url: 'http://dog-api.kinduff.com/api/facts',
        method: 'GET',
        success: function(data, text) {
           render(data);
        },
        error: function(status, error){
            console.log('problem occured: ' + data + status)
        }
    })
}

$('#newFact').click(function() {
    generateFacts(); 
    $("#newFact").click(function(){
        $("#newFact").fadeIn();
        $("#newFact").fadeOut();
});

$('#like').click(function() {
});

$('#dislike').click(function() {
});
})