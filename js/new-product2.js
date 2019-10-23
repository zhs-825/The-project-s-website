var tabsLeft = document.getElementById('tabsleft');
var tabsRight = document.getElementById('tabsright');

tabsLeft.onclick = function() {
    this.parentElement.parentElement.style.backgroundImage = 'url(../img/New-productTwo/ia_1800000062.jpg)';
}
tabsRight.onclick = function() {
    this.parentElement.parentElement.style.backgroundImage = 'url(../img/New-productTwo/t2.jpg)';
}