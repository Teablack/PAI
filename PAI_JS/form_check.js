function validate(formularz){
    if(
        checkStringAndFocus(formularz.elements["f_imie"],"Wpisz imie",isWhiteSpaceOrEmpty )
        && checkStringAndFocus(formularz.elements["f_nazwisko"],"Wpisz nazwisko",isWhiteSpaceOrEmpty)
        && checkStringAndFocus(formularz.elements["f_kod"],"Wpisz kod",isWhiteSpaceOrEmpty)
        && checkStringAndFocus(formularz.elements["f_ulica"],"Wpisz ulica",isWhiteSpaceOrEmpty)
        && checkStringAndFocus(formularz.elements["f_miasto"],"Wpisz miasto",isWhiteSpaceOrEmpty)
        && checkStringAndFocus(formularz.elements["f_email"],"Podaj wlasciwy email",isEmailInvalid)
    )
        return true;
    else
        return false;
}

function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);
}


function isEmailInvalid(str) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str))
        return false;
    else {
        return true;
    }
}


function checkStringAndFocus(obj, msg, funkcja) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (funkcja(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
    else {
        document.getElementById(errorFieldName).innerHTML = "";
        return true;
    }
}

function showElement(e) {
    document.getElementById(e).style.visibility = 'visible';
}
function hideElement(e) {
    document.getElementById(e).style.visibility = 'hidden';
}

function alterRows(i, e) {  //i = licznik wierszy , e -wiersz
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }
        e = e.nextSibling;
        while (e && e.nodeType != 1) {
            e = e.nextSibling;
        }
        alterRows(++i, e);
    }
}

function nextNode(e) {
    while (e && e.nodeType != 1) {
        e = e.nextSibling;
    }
    return e;
}
function prevNode(e) {
    while (e && e.nodeType != 1) {
        e = e.previousSibling;
    }
    return e;
}
function swapRows(b) {
    let tab = prevNode(b.previousSibling);
    let tBody = nextNode(tab.firstChild);
    let lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    let firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
        form.value = form.value.substring(0, maxSize);
    else
        msg.innerHTML = maxSize - form.value.length;
}