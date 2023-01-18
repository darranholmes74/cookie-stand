'use strict'

let tableSection = document.getElementById('table');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



let storeGroup = [];

function Store(storeName, minCust, maxCust, avgSale) {
    this.custPerHour = [];
    this.cookieHour = [];
    this.totalLocationCookies = 0;
    this.storeName = storeName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    storeGroup.push(this);

}

Store.prototype.setCustPerHour = function () {
    let sRange = (this.maxCust - this.minCust)
    for (let i = 0; i < hours.length; i++) {
        this.custPerHour.push((Math.round(Math.random() * sRange) + this.minCust));
    }
    return this.custPerHour;
}

Store.prototype.setCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookieHour.push(Math.ceil(this.setCustPerHour()[i] * this.avgSale));
    }
    return this.cookieHour;
}


Store.prototype.renderTableBody = function () {
    // tbody
    let tbodyElement = document.createElement('tbody');
    tbodyElement.setAttribute('id', 'tableBody');
    tableSection.appendChild(tbodyElement);
    // tr
    // for loop with th td

}


// create prototype set cookies total?


let seattleStore = new Store('Seattle', 23, 65, 6.3);
console.log()
let tokyoStore = new Store('Tokyo', 3, 24, 1.2);
let dubaiStore = new Store('Dubai', 11, 38, 3.7);
let parisStore = new Store('Paris', 20, 38, 2.3);
let limaStore = new Store('Lima', 2, 16, 4.6);

console.table(storeGroup);

function renderTableHeader(locationHours) {
    // thead
    let tHeadElement = document.createElement('thead');
    tHeadElement.setAttribute('id', 'tableHead');
    tableSection.appendChild(tHeadElement);
    //tr
    let trElement = document.createElement('tr');
    tHeadElement.appendChild(trElement);
    // th
    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    for (let i = 0; i < locationHours.length; i++) {
        thElement = document.createElement('th');
        thElement.textContent = locationHours[i];
        trElement.appendChild(thElement);
    }
    thElement = document.createElement('th');
    thElement.textContent = 'Location Total';
    trElement.appendChild(thElement);
}

function renderSeattle () {

    let tBodyElement = document.createElement('tbody');
    tBodyElement.setAttribute('id', 'tableBody');
    tableSection.appendChild(tBodyElement);
    // tr
    let trElement = document.createElement('tr');
    trElement.textContent = storeGroup[0].storeName;
    tBodyElement.appendChild(trElement);
    // for loop with th td
    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    for (let i = 0; i < storeGroup.length; i++) {
        console.log(storeGroup)
        thElement = document.createElement('th');
        thElement.textContent = storeGroup[i].setCookiesPerHour();
        trElement.appendChild(thElement);
    }
    
}

function renderTokyo () {
    
    let trElement = document.createElement('tr');
    trElement.textContent = storeGroup[1].storeName;
    tBodyElement.appendChild(trElement);
    // for loop with th td
    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    for (let i = 0; i < storeGroup.length; i++) {
        console.log(storeGroup)
        thElement = document.createElement('th');
        thElement.textContent = storeGroup[i].setCookiesPerHour();
        trElement.appendChild(thElement);
    }

}

// function renderAllLocations() {
//     for (let i = 0; i < storeGroup.length; i++) {
//         storeGroup[i].setCustPerHour();
//         storeGroup[i].setCookiesPerHour();

//         //create prototype set cookies total?
//     }
// renderTableHeader(hours);
// renderSeattle();
// // renderTableFooter();
// }
renderTableHeader(hours);
renderSeattle();
renderAllLocations();
