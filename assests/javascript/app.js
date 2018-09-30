var gifs = ["cats", "dragons", "funny", " Lion"];


function displayInfo() {

  var gif = $(this).attr("data-name");
  var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + gif +  '&api_key=dc6zaTOxFJmzC&limit=10 ' ;

 
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  var results = response.data
  console.log(response.data);
  for (var i = 0; i < results.length; i++) {
    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

    var gifDiv = $('<div class ="text-center rounded ">');

    var rating = results[i].rating

    var p = $("<p>").text("Rating: " + rating);

    // Creating an image tag
    var personImage = $('<img class = "" >');

   
    // Giving the image tag an src attribute of a proprty pulled off the
    // result item
    personImage.attr("src", results[i].images.fixed_height.url);

    // Appending the paragraph and personImage we created to the "gifDiv" div we created
    gifDiv.append(p);
    gifDiv.append(personImage);

    
 

  $("#gif-view").prepend(gifDiv);
    }
  }

  });
  
}


function renderButtons() {


  $("#buttons-view").empty();


  for (var i = 0; i < gifs.length; i++) {


    var a = $("<button>");
    
    a.addClass("btn");
   
    a.attr("data-name", gifs[i]);
    
    a.text(gifs[i]);
    
    $("#buttons-view").append(a);
  }
}

// This function handles events where a movie button is clicked
$("#add").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var gifInput = $("#input").val().trim();

  // Adding movie from the textbox to our array
  gifs.push(gifInput);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".btn", displayInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();