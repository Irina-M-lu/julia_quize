var phraseOne = {
    beginning: "East or West...",
    ending:"...home is best."

};

var phraseTwo = {
  beginning: "Friend in need...",
  ending:"...is friend indeed"
};

var phraseThree = {
  beginning:"Too many cooks...",
  ending:"...spoil the broth."

};

var phraseFour= {
  beginning:"If at first you don't succeed...",
  ending:"...try try try again."

};

const arr=[phraseOne, phraseTwo, phraseThree, phraseFour];
var phrBeg;
var phrEnd;
var btnz;

arrBeg=[];
arrEnd=[];
arrBegBtnz=[];
arrEndBtnz=[];
const arrBegSchuffled=[];
const btnzEnd=[];
const clickedBtnzArr=[];
const btnIdArr=[];
const btnOne = (btnIdArr[0]);
const btnTwo = (btnIdArr[1]);
//arrEndSchuffled=[];


function splitPhrase(phrase){
for (i=0; i<arr.length; i++){
  phrase=arr[i];
  const phrBeg=phrase.beginning;
  const phrEnd = phrase.ending;
  arrBeg.push(phrBeg);
  arrEnd.push(phrEnd);
 
}
};

splitPhrase();  


console.log(arrBeg);
console.log(arrEnd);


Array.prototype.shuffle = function() {
  let input = this;
 
  for (let i = input.length-1; i >= 0; i--) {
 
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = input[randomIndex];
    //console.log(itemAtIndex)
   
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}


 for (var x=0; x<arrBeg.length; x++){
let btnz= document.createElement("BUTTON");
  btnz.className="buttonBlue";
  btnz.id=x;
  btnz.onclick = function() {clicked(this.id)};
  document.body.appendChild(btnz)+"<br>";
  var btnText = document.createTextNode(arrBeg[x]);
  btnz.appendChild(btnText);
  arrBegBtnz.push(btnz)
  //console.log(arrBegBtnz)
  //console.log(btnz.id)
}

let shuffledArrBeg = arrBegBtnz.shuffle();
console.log(shuffledArrBeg)



for (var x=0; x<arrEnd.length; x++){
 let btnzTwo= document.createElement("BUTTON");
  btnzTwo.className="buttonGreen";
  btnzTwo.id=x+10;
  btnzTwo.onclick = function() {clicked(this.id)};
  document.body.appendChild(btnzTwo)+"<br>";
  var btnTextTwo = document.createTextNode(arrEnd[x]);
  btnzTwo.appendChild(btnTextTwo);
  btnzEnd.push(btnzTwo);
  //console.log(btnzEnd);
  //console.log(btnz.id);
};

 let table = document.getElementById("phraseTable");
   for(let y = 0; y<arr.length; y++){
   let element=shuffledArrBeg[y];
    let elementTwo=btnzEnd[y];
      var row= table.insertRow();
       var cellOne = row.insertCell();
     var cellTwo = row.insertCell();
       cellOne.append(element);
     cellTwo.append(elementTwo);
  }

function clicked (btnclckd){
    let btnId = btnclckd;
    console.log(btnId);
   

    let btn = document.getElementById(btnId);
    btnIdArr.push(btn);
    console.log(btnIdArr);

    clickedBtnzArr.push(Number(btnId));
   
    console.log(clickedBtnzArr);
    let btnOne=(btnIdArr[0]);
    btnOne.className="buttonOrange";
    btnOne.disabled=true;

    if (btnIdArr.length == 2){
      let btnTwo=(btnIdArr[1]);
      btnTwo.className="buttonOrange"
   

    if (clickedBtnzArr.length == 2){
      let itemOne=(clickedBtnzArr[0]);
      //itemOne.style.backgroundColor = "orange";
      let itemTwo=(clickedBtnzArr[1]);
      //clickedBtnzArr[1].style.backgroundColor = "orange";
      let itemDif = Math.abs(itemOne - itemTwo);
        if(itemDif == 10){
          document.getElementById("feedback").innerHTML = "Correct!";
          clickedBtnzArr.length = 0;
          btnIdArr.length=0;
          btnTwo.disabled=true;

          //document.getElementById(btnId).disabled=true;
        }else{
          document.getElementById("feedback").innerHTML = "Try again!";
          clickedBtnzArr.length = 0;
          btnIdArr.length=0;
          btnOne.disabled=false;
          btnTwo.disabled=false;
          btnOne.className = "buttonBlue";
          btnTwo.className = "buttonGreen";
         
        }
    };
    };
  }

