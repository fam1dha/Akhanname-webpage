
var dayName= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];                          

(d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
var  YY = parseInt(document.getElementById("yearbirth").value);
var MM= parseInt(document.getElementById("monthbirth").value);
var DD= parseInt(document.getElementById("datebirth").value);


    var CC = (YY- 1) / 100 + 1;
    var result = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY/ 4)) + ((26 * (MM+ 1) / 10)) + DD) % 7;
    console.log(d)


