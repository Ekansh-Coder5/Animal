function start() {
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/NpDubTcCR/model.json', modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)

var r = Math.floor(Math.random() * 225) + 1;
var g = Math.floor(Math.random() * 225) + 1;
var b = Math.floor(Math.random() * 225) + 1;

document.getElementById("item").innerHTML = "I can hear " + results[0].label;
document.getElementById("accu").innerHTML = "Accuracy " + (results[0].confidence * 100).toFixed(2) + " %";
document.getElementById("item").style.color = "rgb("+r+","+g+","+b+")";
document.getElementById("accu").style.color = "rgb("+r+","+g+","+b+")"; 

img1 = document.getElementById("ali1")


if (results[0].label == "Meow") {
    img1.src="cat.jfif"
}

else if (results[0].label == "Barking") {
    img1.src="dog.jpg"
}

else {
    img1.src="R.png"

}

    }
}