var gifs = ["cats" , "dogs" , "apples" , 'trex']


function displayGif(){
    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=10" + gif ;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {  
    console.log(response);
    var gifDiv = $("<div class='gifs'>")

    // var rating = response.Rated;

    var p = $("<p>").text("Rating: ");
    
    gifDiv.append(p);

    $("#gif-view").prepend(gifDiv);
  });
};
displayGif();

function renderButtons() {
$("#buttons-view").empty();

for (var i = 0; i < gifs.length; i++){
    var a = $("<button>");

    a.addClass("gif-btn")

    a.attr("data-name" , gifs[i])

    a.text(gifs[i]);

    $("#buttons-view").text(a);
}
}

$("#add").on("click" , function(event){
    
    event.preventDefault();

    var userGif = $("#user-input").val().trim();

    gifs.push(userGif)

    renderButtons();

})
renderButtons();