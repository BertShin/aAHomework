console.log("Hello from the JavaScript console!");

$.ajax({
  type: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather' +
  	'?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b',
  success(data) {
    console.log("The Weather for today is:  ");
    console.log(data);
  },
  error() {
    console.error("ERROR ERROR ERROR");
  },
});

console.log("AJAX in full effect!");
