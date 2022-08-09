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
    
    for(let i=1;i<xmlDoc.childNodes[0].childNodes.length;i+=2) {
      let winnersPrize = (xmlDoc.childNodes[0].childNodes[i].childNodes[5]);
      
      if(winnersPrize) {
        //WINNER DOCUMENT


        
      }
  }

  for(let i=0;i<=allPrizes.length;i++) {
    //CREATE NEW ARRAY ONLY WITH ODS NUMBERS TO SEARCH FOR VALUES
    let counter= new Array;
    for(let ii=0;ii<xmlDoc.childNodes[0].childNodes.length;ii++) {
      if(ii%2) {
        counter.push(ii);
      }
    }
      
    //SELECTING WINNER
    let winnersPrize = (xmlDoc.childNodes[0].childNodes[counter[i]].childNodes[5]);
    let prize = allPrizes[i]
    let prizeValue = allPrizes[i].childNodes[1].textContent;
    let prizeNumbersString = allPrizes[i].childNodes[3].textContent;
  
    console.log(winnersPrize);

    //CREATE ARRAY WITH ALL NUMBERS
    if(winnersPrize) {
      let prizeNumbers = prizeNumbersString.split(' ');
      numberQuantity[i].innerHTML=prizeNumbers.length -1;
      prizeValueText[i].innerHTML=prizeValue;

      let documento = winnersPrize.childNodes[1].childNodes[1].textContent;
      winnerDocument[i].innerHTML=documento;

      //IF THE LAST NUMBER IS EMPTY REMOVE IT 
      if((prizeNumbers[prizeNumbers.length-1])=== ''){
        prizeNumbers.pop();
      }
  
      //LOOP TO PRINT EVERY ELEMENT FROM NUMBER ARRAY
      for(let ii=0;ii<prizeNumbers.length;ii++) {
        numbers[i].innerHTML+=prizeNumbers[ii] + ' ';
        
      }
    }


    //let prizeQuantityOfNumbers = prizeNumbers.length;

  }



        
      
    
      /*
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
    */
}