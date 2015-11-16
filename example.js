// Update the size monitor with current width:
$( "#size" ).html( window.innerWidth );

// On window resize:
$( window ).resize(function() {
  // Update the size monitor:
  $( "#size" ).html( window.innerWidth );
});