/* 
 *ajax.js
 */


function post(url, data, callback) {
    let request = new XMLHttpRequest();
    request.addEventListener("load", ()=>callback(request.responseText));
    request.open("POST", url, true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    request.send(data);
}
