/* ABOUT US 이미지 바꾸기 */
function change01(){
    var panda = document.getElementById("grizzly");
    panda.style.color = "#da5c45";
    var grizzly = document.getElementById("panda");
    var ice = document.getElementById("ice");
    grizzly.style.color = "#44382a";
    ice.style.color = "#44382a";

    var pandaO = document.getElementById("grizzly_o");
    pandaO.style.display = "block";
    var grizzlyO = document.getElementById("panda_o");
    var iceO = document.getElementById("ice_o");
    grizzlyO.style.display = "none";
    iceO.style.display = "none";

    var bear1 = document.getElementById("bear1");
    bear1.src = "./images/grizzly01.jpg"
    var bear2 = document.getElementById("bear2");
    bear2.src = "./images/grizzly02.jpg"
}

function change02(){
    var panda = document.getElementById("panda");
    panda.style.color = "#da5c45";
    var grizzly = document.getElementById("grizzly");
    var ice = document.getElementById("ice");
    grizzly.style.color = "#44382a";
    ice.style.color = "#44382a";

    var pandaO = document.getElementById("panda_o");
    pandaO.style.display = "block";
    var grizzlyO = document.getElementById("grizzly_o");
    var iceO = document.getElementById("ice_o");
    grizzlyO.style.display = "none";
    iceO.style.display = "none";

    var bear1 = document.getElementById("bear1");
    bear1.src = "./images/panda01.jpg"
    var bear2 = document.getElementById("bear2");
    bear2.src = "./images/panda02.jpg"
}

function change03(){
    var panda = document.getElementById("ice");
    panda.style.color = "#da5c45";
    var grizzly = document.getElementById("grizzly");
    var ice = document.getElementById("panda");
    grizzly.style.color = "#44382a";
    ice.style.color = "#44382a";

    var pandaO = document.getElementById("ice_o");
    pandaO.style.display = "block";
    var grizzlyO = document.getElementById("grizzly_o");
    var iceO = document.getElementById("panda_o");
    grizzlyO.style.display = "none";
    iceO.style.display = "none";

    var bear1 = document.getElementById("bear1");
    bear1.src = "./images/ice01.jpg"
    var bear2 = document.getElementById("bear2");
    bear2.src = "./images/ice02.jpg"
}


/* Info 토글 */
function clickInfo01(){
    var info01 = document.getElementById("info01");
    info01.style.display = "block";

    var info02 = document.getElementById("info02");
    var info03 = document.getElementById("info03");
    var info04 = document.getElementById("info04");
    info02.style.display = "none";
    info03.style.display = "none";
    info04.style.display = "none";
}

function clickInfo02(){
    var info02 = document.getElementById("info02");
    info02.style.display = "block";

    var info01 = document.getElementById("info01");
    var info03 = document.getElementById("info03");
    var info04 = document.getElementById("info04");
    info01.style.display = "none";
    info03.style.display = "none";
    info04.style.display = "none";
}

function clickInfo03(){
    var info03 = document.getElementById("info03");
    info03.style.display = "block";

    var info02 = document.getElementById("info02");
    var info01 = document.getElementById("info01");
    var info04 = document.getElementById("info04");
    info02.style.display = "none";
    info01.style.display = "none";
    info04.style.display = "none";
}

function clickInfo04(){
    var info04 = document.getElementById("info04");
    info04.style.display = "block";

    var info02 = document.getElementById("info02");
    var info03 = document.getElementById("info03");
    var info01 = document.getElementById("info01");
    info02.style.display = "none";
    info03.style.display = "none";
    info01.style.display = "none";
}


