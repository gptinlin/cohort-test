var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();

let worker;
function startWorker() {
    worker = new Worker("worker.js");
    worker.onmessage = function(event) {
        document.getElementById("output").innerHTML += '<li>' + event.data + '</li>';
    };
}
function stopWorker() {
    worker.terminate();
}