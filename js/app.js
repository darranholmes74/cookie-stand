'use strict'

let tableSection = document.getElementById('table');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let tHeader = document.getElementById('headerrow')
let tBody = document.getElementById('salesdata')
let tFooter = document.getElementById('footerrow');

let formEl = document.getElementById('cookie-form');
// let minEl = document.getElementById('add-minimum-customers');
// let maxEl = document.getElementById('add-maximum-customers');
// let newStoreEl = document.getElementById('newStorName');



let storeGroup = [];

function Store(storeName, minCust, maxCust, avgSale) {
    this.cookieSales = [];
    this.dailySalesTotal = 0;
    this.storeName = storeName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    storeGroup.push(this);
    this.dailySalesTotal
}

Store.prototype.setCustPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        let custPerHour = Math.round((Math.random() * (this.maxCust - this.minCust) + this.minCust));

        let cookieSales = Math.round(custPerHour * this.avgSale)
        console.log(cookieSales);
        this.cookieSales.push(cookieSales);
        this.dailySalesTotal += cookieSales

    }

};
Store.prototype.render = function () {
    let row = document.createElement('tr');
    tBody.appendChild(row);
    let cell = document.createElement('td');
    cell.textContent = this.storeName;
    row.appendChild(cell);

    for (let i = 0; i < this.cookieSales.length; i++) {
        let cell = document.createElement('td');
        cell.textContent = this.cookieSales[i];
        row.appendChild(cell);
    }
    cell = document.createElement('td');
    cell.textContent = this.dailySalesTotal;
    row.appendChild(cell);
}




new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

console.table(storeGroup);

for (let store of storeGroup) {
    store.setCustPerHour();
    store.render();
    
}

function renderTableHeader() {
let tHeaderEl = document.createElement('th');
tHeader.appendChild(tHeaderEl);
tHeaderEl.textContent = 'Hours';

for (let i = 0; i < hours.length; i++){
    let tHeaderEl = document.createElement('td');
    tHeaderEl.textContent = hours[i];
    tHeader.appendChild(tHeaderEl);
}
// let lastHeaderEl = document.createElement('th');
// tHeader.appendChild(lastHeaderEl);
// finalTotalEl.textContent = 'Daily Totals';
};


renderTableHeader();
renderTableFooter(storeGroup);

function renderTableFooter(storeGroupArray) {
    let elementTotal = document.createElement('th')
    tFooter.appendChild(elementTotal);
    elementTotal.textContent = 'Cookie Totals';
    let finalTotal = 0;
    for (let i = 0; i < hours.length; i++) {
        let totalAtHour = 0;
        let cell = document.createElement('td');
        tFooter.appendChild(cell);
        for (let j = 0; j < storeGroupArray.length; j++) {
            totalAtHour += storeGroupArray[j].cookieSales[i];
            finalTotal += storeGroupArray[j].cookieSales[i];
        }
        console.log(storeGroupArray);
        cell.textContent = totalAtHour;
    }


    let finalTotalEl = document.createElement('td');
    tFooter.appendChild(finalTotalEl);
    finalTotalEl.textContent = finalTotal;

}

formEl.addEventListener('submit', function (event){
    event.preventDefault();
    let storeName = event.target.storeName.value;
    let minCust = event.target.minCust.value;
    let maxCust = event.target.maxCust.value;
    let avgSale = event.target.avgSale.value;
    new Store(storeName, minCust, maxCust, avgSale);
    formEl.reset();
    storeGroup[storeGroup.length - 1].setCustPerHour();
    storeGroup[storeGroup.length - 1].render();
    tFooter.innerHTML = "";
    renderTableFooter(storeGroup);
});


