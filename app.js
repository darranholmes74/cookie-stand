'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// let seattleStore = {
//     minCust: 23,
//     maxCust: 65,
//     avgSale: 6.3,
//     custPerHour: [],
//     cookieHour: [],
// sReturn: function () {
//     let sRange = (this.maxCust - this.minCust)
//     for (let i = 0; i < hours.length; i++){
//     this.custPerHour.push((Math.round(Math.random() * sRange) + this.minCust));
//     };
//         return this.custPerHour;
// },

//    cookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++){
//         this.cookieHour.push(Math.ceil(this.sReturn()[i] * this.avgSale));
//     };
//     console.log(this.cookieHour)
//     return this.cookieHour;
// },


// };
let storeGroup = [];

function Store(storeName, minCust, maxCust, avgSale) {
    this.custPerHour = [];
    this.cookieHour = [];
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    this.storeName = storeName;
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
        this.cookieHour.push(Math.ceil(this.sReturn()[i] * this.avgSale));
    }
    console.log(this.cookieHour)
    return this.cookieHour;
}

// create prototype set cookies total?

// prototype render function

new Store('seattle', 23, 65, 6.3);
console.table(storeGroup);



// let tokyoStore = {
//     minCust: 3,
//     maxCust: 24,
//     avgSale: 1.2,
//     custPerHour: [],
//     cookiesEachHour: [],
//     sReturn: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let sRange = (this.maxCust - this.minCust)
//             this.custPerHour.push((Math.round(Math.random() * sRange) + this.minCust));
//         };
//         console.log(custPerHour);
//     },

//     cookiesPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookieEachHour = Math.ceil(this.custPerHour[i] * this.avgSale)
//             this.cookiesEachHour.push(cookieEachHour)

//         };
//         console.log(this.cookiesPerHour())
//     },

// }

// let dubaiStore = {
//     minCust: 11,
//     maxCust: 38,
//     avgSale: 3.7,
//     custPerHour: [],
//     cookiesEachHour: [],
//     sReturn: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let sRange = (this.maxCust - this.minCust)
//             this.custPerHour.push((Math.round(Math.random() * sRange) + this.minCust));
//         };
//         console.log(custPerHour);
//     },

//     cookiesPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookieEachHour = Math.ceil(this.custPerHour[i] * this.avgSale)
//             this.cookiesEachHour.push(cookieEachHour)

//         };
//         console.log(this.cookiesPerHour())
//     },

// };




// let parisStore = {
//     minCust: 20,
//     maxCust: 38,
//     avgSale: 2.3,
//     custPerHour: [],
//     cookiesEachHour: [],
//     sReturn: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let sRange = (this.maxCust - this.minCust)
//             this.custPerHour.push((Math.round(Math.random() * sRange) + this.minCust));
//         };
//         console.log(custPerHour);
//     },

//     cookiesPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookieEachHour = Math.ceil(this.custPerHour[i] * this.avgSale)
//             this.cookiesEachHour.push(cookieEachHour)

//         };
//         console.log(this.cookiesPerHour())
//     },

// }

// let limaStore = {
//     minCust: 2,
//     maxCust: 16,
//     avgSale: 4.6,
//     custPerHour: [],
//     cookiesEachHour: [],
//     sReturn: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let sRange = (this.maxCust - this.minCust)
//             this.custPerHour.push((Math.round(Math.random() * sRange) + this.minCust));
//         };
//         console.log(custPerHour);
//     },

//     cookiesPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookieEachHour = Math.ceil(this.custPerHour[i] * this.avgSale)
//             this.cookiesEachHour.push(cookieEachHour)

//         };
//         console.log(this.cookiesPerHour())
//     },

// }
