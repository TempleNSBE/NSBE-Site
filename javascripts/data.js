function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

function printName(){
  var fileDisplayArea = document.getElementById('names');
  readTextFile("file:///Users/Isaiah/Documents/Github/NSBE-Site/eboard.txt", function(text){
    console.log(text);
    });
}

$(document).ready(function(){

    printName();

});