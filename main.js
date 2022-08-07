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
    
    let prize1 = allPrizes[0]
    let prize1Value = allPrizes[0].childNodes[1]

    let prize1NumbersString = allPrizes[0].childNodes[3].textContent
    let prize1Numbers = prize1NumbersString.split(' ')
      if((prize1Numbers[prize1Numbers.length-1])=== ''){
        prize1Numbers.pop();
      }
    let prize1QuantityOfNumbers = prize1Numbers.length;
    
      
    //PERSONAL INFO FROM WINNER
    let winners1Prize = (xmlDoc.childNodes[0].childNodes[1].childNodes[5])
    let winner1 = winners1Prize.childNodes[1]
    let winner1Document = winners1Prize.childNodes[1].childNodes[1].textContent
    let winner1Name = winners1Prize.childNodes[1].childNodes[3].textContent
    let winner1City = winners1Prize.childNodes[1].childNodes[5].textContent
    let winner1Seller = winners1Prize.childNodes[1].childNodes[7].textContent;



    //PRIZES
    let prize2 = allPrizes[1]
    let prize3 = allPrizes[2]
    let prize4 = allPrizes[3]
    let prize5 = allPrizes[4]

}