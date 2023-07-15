$(document).ready(function() {
    // Submit form event
    $("#feedbackForm").submit(function(event) {
      event.preventDefault();
  
      // Get form values
      var name = $("#name").val();
      var email = $("#email").val();
      var rating = $("#rating").val();
      var comment = $("#comment").val();
  
      // Create feedback object
      var feedback = {
        name: name,
        email: email,
        rating: rating,
        comment: comment
      };
  
      // Save feedback in localStorage
      var feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
      feedbacks.push(feedback);
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  
      // Show success message
      $("#feedbackForm").html("<p class='success'>Thank you for your feedback!</p>");
    });
  });
   
  document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var rating = document.querySelector('input[name="rating"]:checked').value;
    // You can perform additional actions with the rating value, such as sending it to a server
    console.log("Rating: " + rating);
    // Reset the form
    this.reset();
  });
  