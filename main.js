menuListArray = ["Pizza Vegetariana", 
"pizza frango","pizza portuguesa","pizza quatro queijo","pizza de calabresa","pizza frango com catupiry"
                    ];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
      htmldata=htmldata+ menuListArray[i] + '<br>'

}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
//Completar o código
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
      htmldata=htmldata+ menuListArray[i] + '<br>'
}

document.getElementById("displayAddedMenu").innerHTML = htmldata;

}

function getMenu(){
    var htmldata="";
    menuListArray.sort();
    for(var i=0;i<menuListArray.length;i++){
      htmldata=htmldata+ menuListArray[i] + '<br>'
}

document.getElementById("displayAddedMenu").innerHTML = htmldata;




}






function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();

}



