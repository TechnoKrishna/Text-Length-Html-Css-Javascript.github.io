setInterval(() => {

    var text = document.getElementById("text");

    var str = document.getElementById("string").value;

    var Length = str.length;

    text.innerHTML = "TEXT LENGTH : " + Length;

}, 1000);
