const XMlFileLocation = "./data.xml";
var XMLFile = null;

function loadXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            XMLFile = xhttp.responseXML;
            displayXML();
        }
    }

    xhttp.open("GET", XMlFileLocation, true);
    xhttp.send();
}

function displayXML() {
    document.getElementById("disp-data").innerHTML = "";

    var students = XMLFile.getElementsByTagName("computer-science");
    
}