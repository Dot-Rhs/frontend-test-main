var navBtn = document.getElementById('hamburger');

// navBtn.addEventListener('click', function (e) {
// 	document.body.classList.toggle('is-active');
// })

// This is fine, can swap to ES6 syntax though, not really an issue though:

navBtn.addEventListener('click', e => {
  document.body.classList.toggle('is-active');
});

// You *could* swap the event listener for an onClick in the html, then moving the eventlistener logic in your own function, thats called onclick.
// I think they picked the eventListener intentionally though, some benefits of using the eventListener route is that you can tie multiple listeners to a single target, where as onclick can only ever have one function.
// Using the eventlistener helps keep code separate, HTML in HTML (no onClick) and JS in JS etc.
