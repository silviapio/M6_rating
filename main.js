let isClicked = false;

document.getElementById("hearts-container").addEventListener("mouseover", (event) => {
    let strId = event.target.id;
    let id = parseInt(strId.charAt(4));
    if (isClicked == false) {
        changeHeartColor(id);
    } else {
    console.log("no change possible");
    }
}, true);

document.getElementById("hearts-container").addEventListener("click", (event) => {
    let strId = event.target.id;
    let id = parseInt(strId.charAt(4));
    changeHeartColor(id);
    isClicked = true;
}, true);

document.getElementById("hearts-container").addEventListener("mouseout", (event) => {
    if (!isClicked) {
        for (let i=1; i<=5; i++) {
        let elementId = `icon${i}`;
        document.getElementById(elementId).classList.remove("redOnHover");
        }
    }
}, true);

changeHeartColor = (heartId) => {
    for (let i = 1; i <=5; i++){
        const heart = document.getElementById(`icon${i}`);
        i <= heartId ?  heart.classList.add("redOnHover"): heart.classList.remove("redOnHover");
    }
}