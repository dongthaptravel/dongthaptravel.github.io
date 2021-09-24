//change light mode
function changeLight(){
    var lightbulb = document.getElementById("lightbulb");
    if(lightbulb.className == "fas fa-lightbulb")
        {
            //change light_on to light_off
            lightbulb.className = "far fa-lightbulb";
            var content = document.getElementById("content");
            content.style.backgroundColor = "black";
            var info = document.getElementById("info");
            info.style.color = "white";
            var pictures = document.getElementById("pictures");
            pictures.style.borderColor = "white";
        }
    else
        {
            //change light_off to light_on
            lightbulb.className = "fas fa-lightbulb";
            var content = document.getElementById("content");
            content.style.backgroundColor = "white";
            var info = document.getElementById("info");
            info.style.color = "black";
            var pictures = document.getElementById("pictures");
            pictures.style.borderColor = "black";
        }
}

//change info of text
function changeText(index){
    var text = document.getElementsByName("text");
    for(var i = 0; i < text.length; i++)
    {
        if(text[i].style.display == "block")
        {
            text[i].style.display = "none";
        }
    }
    text[index].style.display = "block";
}

var img_index = 0;

function previous_images(){
    var img = document.getElementsByName("tram-chim");
    if(img_index == 0){
        return;
    }
    else{
        
        img[img_index].style.display = "none";
        img[--img_index].style.display = "block";
    }
}

function next_images(){
    var img = document.getElementsByName("tram-chim")
    if(img_index == img.length - 1){
        return;
    }
    else{
        img[img_index].style.display = "none";
        img[++img_index].style.display = "block";
    }
}