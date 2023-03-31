function convert () {
    let feet = document.getElementById("feet").value;
    let centimeters = feet / 0.032808;
    let inches = feet * 12;
    let yards = feet / 3;
    let meters = feet * .3048; 
    let millimeters = feet * 304.80; 
    let micrometers = feet * 304800; 

    document.getElementById("centimeters").innerHTML = centimeters;
    document.getElementById("inches").innerHTML = inches;
    document.getElementById("yards").innerHTML = yards;
    document.getElementById("meters").innerHTML = meters;
    document.getElementById("millimeters").innerHTML = millimeters;
    document.getElementById("micrometers").innerHTML = micrometers;
}
