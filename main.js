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

    //PRIZE HEADERS
    let allPrizes = xmlDoc.getElementsByTagName("Premio")



    let prizeValueText=document.querySelectorAll('#prizeValue');
    let numberQuantity=document.querySelectorAll('#numbersQuantity');
    let numbers=document.querySelectorAll('#numbers');
    let winnerDocument=document.querySelectorAll('#winnerDocument');
  for(let i=0;i<allPrizes.length;i++) {
    //VARIABLES FOR SEARCHING DOM CONTENT
    let counterIncrease = 1;
    
    //SELECTING WINNER
    let winnersPrize = (xmlDoc.childNodes[0].childNodes[i+counterIncrease].childNodes[5]);
    let prize = allPrizes[i]
    let prizeValue = allPrizes[i].childNodes[1].textContent;
    let prizeNumbersString = allPrizes[i].childNodes[3].textContent;
  
    console.log(winnersPrize)

    //WINNER DOCUMENT
    let documento = winnersPrize.childNodes[1].childNodes[2].textContent;

    //CREATE ARRAY WITH ALL NUMBERS
    let prizeNumbers = prizeNumbersString.split(' ');
    numberQuantity[i].innerHTML=prizeNumbers.length -1;
    prizeValueText[i].innerHTML=prizeValue;

    //IF THE LAST NUMBER IS EMPTY REMOVE IT 
    if((prizeNumbers[prizeNumbers.length-1])=== ''){
      prizeNumbers.pop();
    }

    //LOOP TO PRINT EVERY ELEMENT FROM NUMBER ARRAY
    for(let ii=0;ii<prizeNumbers.length;ii++) {
      numbers[i].innerHTML+=prizeNumbers[ii] + ' ';
     
    }


    let prizeQuantityOfNumbers = prizeNumbers.length;

  }



        
      
    
      
    //PERSONAL INFO FROM WINNER
   
    let winner1 = winnersPrize.childNodes[1]
    
    let winner1Name = winnersPrize.childNodes[1].childNodes[3].textContent
    let winner1City = winnersPrize.childNodes[1].childNodes[5].textContent
    let winner1Seller = winnersPrize.childNodes[1].childNodes[7].textContent;

  

    //PRIZES
    let prize2 = allPrizes[1]
    let prize3 = allPrizes[2]
    let prize4 = allPrizes[3]
    let prize5 = allPrizes[4]
}