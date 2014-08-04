function GetXmlHttp() {
    var xmlhttp = false;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject)// code for IE
    {
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
                xmlhttp = false;
            }
        }
    }
    return xmlhttp;
}

function PassAjaxResponseToFunction(url, callbackFunction) {
    var xmlhttp = new GetXmlHttp();
    if (xmlhttp) {
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp && xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    var res = xmlhttp.responseText;
                    var functionToCall = callbackFunction + "('" + res + "')";
                    eval(functionToCall);
                }
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    }
}

function SetInnerHTMLFromAjaxResponse(url, obj_id) {
    var xmlhttp = new GetXmlHttp();
    if (xmlhttp) {
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp && xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    if (typeof obj_id == 'object') {
                        obj_id.innerHTML = xmlhttp.responseText;
                    } else {
                        document.getElementById(obj_id).innerHTML = xmlhttp.responseText;
                    }
                }
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    }
}

function SetValueFromAjaxResponse(url, obj_id) {
    var xmlhttp = new GetXmlHttp();
    if (xmlhttp) {
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp && xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    if (typeof obj_id == 'object') {
                        obj_id.innerHTML = xmlhttp.responseText;
                    } else {
                        document.getElementById(obj_id).value = xmlhttp.responseText;
                    }
                }
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    }
}

/*
function getRandomStr()
{
var pstrSet = "abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWZYZ0123456789";
var intRnd = 0;
var i=0;
var len = 26;
var chrRet = "";
var intLimit = pstrSet.length;
	
intRnd = Math.floor((intLimit + 1) * Math.random() + 1);
while(i<len)
{
chrRet += pstrSet.charAt(intRnd);
intRnd = Math.floor((intLimit + 1) * Math.random() + 1);
i++;
}
return 	chrRet;	
//alert(chrRet);	
}
*/



