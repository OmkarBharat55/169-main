AFRAME.registerComponent("markerhandler", {
  init: async function() {
    this.el.addEventListener("markerFound",()=>{
      this.handleMarkerFound()
    })
    this.el.addEventListener("markerLost",()=>{
      this.handleMarkerLost()
    })
  },
  handleMarkerFound: function() {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div")

    buttonDiv.style.display = "flex"
    
//call the required buttons 

var orderButton = document.getElementById("order-button")
var orderSummaryButton = document.getElementById("order-summary-button")


    // Handling Click Events


    orderButton.addEventListener("click", function(){
      swal({
        icon:"warning",
        title:'Order!',
        text:'Work In Prograsse!'
      })      
  })
    orderSummaryButton.addEventListener("click", function(){
      swal({
        icon:"warning",
        title:'Order Summary ',
        text:'Work In Prograsse!'
      })            
  })
 

  
  },

  handleMarkerLost: function() {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div")

    buttonDiv.style.display="none"
  }
});
