var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    getXML(this);
    }
};
xhttp.open("GET", "List_XML_Extracao_4.XML", true);
xhttp.send();

function getXML(xml) {
    var xmlDoc = xml.responseXML;

  //HEADER INFO
    let headerNumber = document.querySelector('.header__info__edition__number');
    let headerDate = document.querySelector('.header__info__draw__date');

    let editionNumber = (xmlDoc.childNodes[0].attributes[0].value);
    let editionDate = (xmlDoc.childNodes[0].attributes[1].value);

    headerNumber.innerHTML = parseInt(editionNumber);
    headerDate.innerHTML = editionDate;


    //PRIZE HEADERS
    let allPrizes = xmlDoc.getElementsByTagName("Premio");

  for(let i=0;i<allPrizes.length-1;i++) {
    //CREATE WINNER BODY
    let winnerBody=document.querySelectorAll('#winnerContainer');
    createWinnerBody(winnerBody[i],i);

    //SEARCH FOR EACH ELEMENT
    let prizeValueText=document.querySelectorAll('#prizeValue');
    let numberQuantity=document.querySelectorAll('#numbersQuantity');
    let numbers=document.querySelectorAll('#numbers');
    let winnerDocument=document.querySelectorAll('#winnerDocument');
    let winnerName=document.querySelectorAll('#winnerName');
    let winnerCity=document.querySelectorAll('#city');
    let winnerSeller=document.querySelectorAll('#seller');

    //SELECTING WINNER
    let winnersPrize = (xmlDoc.children[0].children[i].children[2]);
    let prizeValue = allPrizes[i].childNodes[1].textContent;
    let prizeNumbersString = allPrizes[i].childNodes[3].textContent;
    
    //CHECK FOR MULTIPLES WINNERS FOR 4 FIRST PRIZES 
    if(winnersPrize.children.length > 1 ) {
      for(let ii=0; ii<=(winnersPrize.children.length -1 ); ii++){
        //WINNER INFO 
        let coupleWinnerName = winnersPrize.children[ii].children[1].textContent;
        let coupleWinnerDocument=winnersPrize.children[ii].children[0].textContent;
        let coupleWinnerCity=winnersPrize.children[ii].children[2].textContent;
        let coupleWinnerSeller=winnersPrize.children[ii].children[3].textContent;
        coupleWinners(winnerName[i],coupleWinnerName,winnerDocument[i],coupleWinnerDocument,winnerCity[i],coupleWinnerCity,winnerSeller[i],coupleWinnerSeller);
      }
      let prizeNumbers = prizeNumbersString.split(' ');
      numberQuantity[i].innerHTML=prizeNumbers.length -1;
      prizeValueText[i].innerHTML=prizeValue;


      if((prizeNumbers[prizeNumbers.length-1])=== ''){
        prizeNumbers.pop();
      }
      
      //LOOP TO PRINT EVERY ELEMENT FROM NUMBER ARRAY
      for(let ii=0;ii<prizeNumbers.length;ii++) {
        numbers[i].innerHTML+=prizeNumbers[ii] + ' ';
        
      }
    }

    //CREATE ARRAY WITH ALL NUMBERS AND ONLY ONE WINNER PER PRIZE
    if(winnersPrize.children.length == 1) {
      
      let prizeNumbers = prizeNumbersString.split(' ');
      numberQuantity[i].innerHTML=prizeNumbers.length -1;
      prizeValueText[i].innerHTML=prizeValue;

      let documento = winnersPrize.children[0].children[0].textContent;
      winnerDocument[i].innerHTML=documento;
      winnerName[i].innerHTML = winnersPrize.children[0].children[1].textContent
      winnerCity[i].innerHTML = winnersPrize.children[0].children[2].textContent
      winnerSeller[i].innerHTML = winnersPrize.children[0].children[3].textContent;
     
      //IF THE LAST NUMBER IS EMPTY REMOVE IT 
      if((prizeNumbers[prizeNumbers.length-1])=== ''){
        prizeNumbers.pop();
      }
      
      //LOOP TO PRINT EVERY ELEMENT FROM NUMBER ARRAY
      for(let ii=0;ii<prizeNumbers.length;ii++) {
        numbers[i].innerHTML+=prizeNumbers[ii] + ' ';
        
      }
    }
  }
  
  let giroWinner=xmlDoc.childNodes[0].childNodes[9].childNodes[3];
  let giro=giroWinner.getElementsByTagName('Ganhador');

  for(let i=0;i<giro.length;i++) {
    //SEARCH P TAG LOCATION
    let doc=document.querySelector('#giroWinnerDoc');
    let sqe=document.querySelector('#giroWinnerNumber');
    let name=document.querySelector('#giroWinnerName');
    let city=document.querySelector('#giroWinnerCity');
    let seller=document.querySelector('#giroWinnerSeller');
  
    createGiroWinners(sqe,name,city,seller,doc);

   //SEARCH EACH TAG FOR OUTPUT RESULT
    let giroWinnerDocument=document.querySelectorAll('#winnerDocumentGiro');
    let giroNumber=document.querySelectorAll('#giroNumber');
    let giroName=document.querySelectorAll('#giroName');
    let giroCity=document.querySelectorAll('#giroCity');
    let giroSeller=document.querySelectorAll('#giroSeller');

    giroNumber[i].innerHTML=i+1;
    let giroPrize=xmlDoc.children[0];
    //document
    giroWinnerDocument[i].innerHTML=giroPrize.children[4].children[1].children[i].children[0].textContent;
    //SELECTING GIRO WINNERS
    giroName[i].innerHTML=giroPrize.children[4].children[1].children[i].children[1].textContent;
    //city 
    giroCity[i].innerHTML=giroPrize.children[4].children[1].children[i].children[2].textContent;
    //seller
    giroSeller[i].innerHTML=giroPrize.children[4].children[1].children[i].children[3].textContent;
  }
}

//**** FUNCTION AREA BELOW ******

//FOR THE FIRST 4 PRIZES WITH MULTIPLES WINNERS
function coupleWinners(nameLocation,name,documentLocation,document,cityLocation,city,sellerLocation,seller) {
  createP(nameLocation,'winners__name__text','coupleWinnerName',name);
  createP(documentLocation,'winners__document__text','coupleWinnerDocument',document);
  createP(cityLocation, 'winners__city__text','coupleCity',city);
  createP(sellerLocation,'winners__seller__text','coupleSeller',seller);
}

function createGiroWinners(seqLocation,nameLocation,cityLocation,sellerLocation,docLocation) {
  createP(docLocation.children[0],'giro__winners__document__text','winnerDocumentGiro');
  createP(seqLocation.children[0],'giro__winners__seq_text','giroNumber');
  createP(nameLocation.children[0],'giro__winners__name__text','giroName');
  createP(cityLocation.children[0],'giro__winners__city__text','giroCity');
  createP(sellerLocation.children[0],'giro__winner__seller__text','giroSeller');

}

//RUN ONLY 1 TIME FOR EACH PRIZE
function createWinnerBody(location,i) {
  
  //WINNER DOCUMENT NUMBER
  createDiv(location,'winners__document__container');
  let documentDiv = document.querySelectorAll('#winners__document__container');
  createH4(documentDiv[i],'winners__document__tittle winners__tittle','Doc.');
  createP(documentDiv[i],'winners__document__text','winnerDocument');
  //WINNER NAME
  createDiv(location,'winners__name__container');
  let nameDiv = document.querySelectorAll('#winners__name__container');
  createH4(nameDiv[i],'winners__name__tittle winners__tittle','Nome do Ganhador');
  createP(nameDiv[i],'winners__name__text','winnerName');
  //WINNER CITY
  createDiv(location,'winners__city__container');
  let cityContainer = document.querySelectorAll('#winners__city__container');
  createH4(cityContainer[i],'winners__city__tittle winners__tittle','Bairro/Cidade');
  createP(cityContainer[i],'winners__city__text','city');
  //TICKET SELLER
  createDiv(location,'winners__seller__container');
  let sellerContainer = document.querySelectorAll('#winners__seller__container');
  createH4(sellerContainer[i],'winners__seller__tittle winners__tittle','Revendedor');
  createP(sellerContainer[i],'winners__seller__text','seller')
}
//CREATE DIV
function createDiv(location,className,idName) {
  if(idName===undefined) {
    idName=className;
  }
  let div = document.createElement('div');
  div.setAttribute('class',className);
  div.setAttribute('id',idName);
  location.appendChild(div);
}
//CREATE H4 ELEMENT
function createH4(location,className,content) {
  let h4 = document.createElement('h4');
  h4.setAttribute('class',className);
  h4.textContent = content;
  location.appendChild(h4);
}
//CREATE P ELEMENT
function createP(location,className,idName,content){
  let p = document.createElement('p');
  p.setAttribute('class',className);
  p.setAttribute('id',idName);
  if(content != undefined) {
    p.textContent = content;
  }
  location.appendChild(p);
}
