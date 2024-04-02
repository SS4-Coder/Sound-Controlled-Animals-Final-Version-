function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6ghGecEX9/model.json',{ probabilityThreshold: 0.7 } ,modelReady);
}
function modelReady(){
    classifier.classify(got_results);
}
var cow=0;
var cat=0;
var dog=0;
var lion=0;
function got_results(error,results){
    if (error){
    console.error(error);
}
else{
    console.log(results);
    r=Math.floor(Math.random()*255) + 1;
    g=Math.floor(Math.random()*255) + 1;
    b=Math.floor(Math.random()*255) + 1;
    document.getElementById("result_label").innerHTML="Detected voice is of- "+results[0].label;
    document.getElementById("result_count").innerHTML="detected dog - "+dog+" detected cat - "+cat+" detected cow - "+cow+" detected lion - "+lion;
    document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
    img=document.getElementById("image");

    if(results[0].label=="Meowing"){
        img.src="Cat.jpg";
        cat=cat+1;
    }
    else if(results[0].label=="Barking"){
        img.src="Dog.jpg";
        dog=dog+1;
    }
    else if(results[0].label=="Mooing"){
        img.src="Cow.jpg";
        cow=cow+1;
    }
    else if(results[0].label=="Roaring"){
        img.src="Lion.jpg";
        lion=lion+1;
    }
    else{
        img.src="Ear.jpg";
    }
}
}

