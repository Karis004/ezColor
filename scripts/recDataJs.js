chrome.storage.sync.get(['username'], function (items) {
    if(items.username != null){
        document.getElementById('name').placeholder = items.username;

    }
})

var save = document.getElementById('save');
save.addEventListener('click', function () {
    chrome.storage.sync.set({ username: document.getElementById('name').value }, function () {
    });
})

var createBtn = document.getElementById("createBtn");
var createDiv = document.getElementById("createDiv");
createBtn.addEventListener('click', function () {
    createDiv.style.display = 'block';
})

var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");

var slider = document.getElementById("slider");
var sliderVal;
addEventListener('input', function () {
    sliderVal = slider.value;
    if (sliderVal == 1) {
        c2.style.display = 'none';
        c3.style.display = 'none';
        c4.style.display = 'none';
    } else if (sliderVal == 2) {
        c2.style.display = 'block';
        c3.style.display = 'none';
        c4.style.display = 'none';
    } else if (sliderVal == 3) {
        c2.style.display = 'block';
        c3.style.display = 'block';
        c4.style.display = 'none';
    } else if (sliderVal == 4) {
        c2.style.display = 'block';
        c3.style.display = 'block';
        c4.style.display = 'block';
    }
})

var colorOk = document.getElementById("createOk");
colorOk.addEventListener('click', function () {
    colorList = [c1.value, c2.value, c3.value, c4.value];
    chrome.storage.sync.set({ colorList: colorList.slice(0, sliderVal) }, function () {
    });

})

var info = document.getElementById("info");
var infoDiv = document.getElementById("div2");
info.addEventListener("mouseenter", function () {
    infoDiv.style.display = "block";
})
info.addEventListener("mouseleave", function () {
    infoDiv.style.display = "none";
})

