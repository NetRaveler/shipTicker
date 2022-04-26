let myShipments = [];
let tickerBox = document.getElementById("tickerBox");
let submit = document.getElementById("submit");

submit.addEventListener("click", addToArray);
submit.addEventListener("click", displayContents);

function Shipment(customer, trip, location, zip, pallets, weight, racked, carrier, date, scheduled, bol, shipped, closed) {
    // The Shipment Constructor
    // Create an object factory with the following information
    // Customer, Trip ID, Location, Zip, Pallet Count, Total Weight, is it in a rack?, Carrier, Date, Scheduled?, BOL, Shipped, Closed
    this.customer = customer;
    this.trip = trip;
    this.location = location;
    this.zip = zip;
    this.pallets = pallets;
    this.weight = weight;
    this.racked = racked;
    this.carrier = carrier;
    this.date = date;
    this.scheduled = scheduled;
    this.bol = bol;
    this.shipped = shipped;
    this.closed = closed;
}

function addToArray() {
    // pulls this information from form and adds it do Array
    let customer = document.getElementById("customer").value;
    let trip = document.getElementById("trip").value;
    let location = document.getElementById("location").value;
    let zip = document.getElementById("zip").value;
    let pallets = document.getElementById("pallets").value;
    let weight = document.getElementById("weight").value;
    let racked = document.getElementById("racked").value;
    let carrier = document.getElementById("carrier").value;
    let date = document.getElementById("date").value;
    let scheduled = document.getElementById("scheduled").value;
    let bol = document.getElementById("bol").value;
    let shipped = document.getElementById("shipped").value;
    let closed = document.getElementById("closed").value;
    // Maybe a closed function that once triggered selects itself for deletion
    // Can an object find its own position in the array? lets see


    let newShip = new Shipment(customer, trip, location, zip, pallets, weight, racked, carrier, date, scheduled, bol, shipped, closed);
    myShipments.push(newShip);

}

function deleteFromArray(given) {
    let index = myShipments.findIndex(x => x.trip == given);
    console.log(index);
    myShipments.splice(index, 1);
    displayContents();
}

function displayContents() {
    tickerBox.textContent = "";

    for (i = 0; i < myShipments.length; i++) {
        let div = document.createElement("div");
        let pCustomer = document.createElement("p");
        let pTrip = document.createElement("p");
        let pLocation = document.createElement("p");
        let pZip = document.createElement("p");
        let pPallets = document.createElement("p");
        let pWeight = document.createElement("p");
        let pRacked = document.createElement("p");
        let pCarrier = document.createElement("p");
        let pDate = document.createElement("p");
        let pScheduled = document.createElement("p");
        let pBol = document.createElement("p");
        let pShipped = document.createElement("p");
        let pClosed = document.createElement("p");

        if (i % 2 == 0) {
            div.classList.add("cellOrange");
        } else {
            div.classList.add("cellGrey");
        }

        pCustomer.innerHTML = myShipments[i].customer;
        div.appendChild(pCustomer);
        pTrip.innerHTML = myShipments[i].trip;
        div.appendChild(pTrip);
        pLocation.innerHTML = myShipments[i].location;
        div.appendChild(pLocation);
        pZip.innerHTML = myShipments[i].zip;
        div.appendChild(pZip);
        pPallets.innerHTML = myShipments[i].pallets;
        div.appendChild(pPallets);
        pWeight.innerHTML = myShipments[i].weight;
        div.appendChild(pWeight);
        pRacked.innerHTML = myShipments[i].racked;
        div.appendChild(pRacked);

        pCarrier.innerHTML = myShipments[i].carrier;
        div.appendChild(pCarrier);
        pDate.innerHTML = myShipments[i].date;
        div.appendChild(pDate);
        pScheduled.innerHTML = myShipments[i].scheduled;
        div.appendChild(pScheduled);
        pBol.innerHTML = myShipments[i].bol;
        div.appendChild(pBol);
        pShipped.innerHTML = myShipments[i].shipped;
        div.appendChild(pShipped)
        pClosed.innerHTML = myShipments[i].closed;
        div.appendChild(pClosed);

        tickerBox.appendChild(div);



    }
}

function clearForm() {

}
// Testing Function
function test() {
    let test1 = new Shipment('Meyer', '1354232', 'GA', '30542', '3', '1400', 'n', 'TBD', '4 / 25 / 22', 'N', 'N', 'N', 'N');
    let test2 = new Shipment('Honda', '5552221', 'CA', '90224', '14', '7000', 'y', 'OFDL', '4 - 25 - 22', 'y', 'y', 'n', 'n');
    myShipments.push(test1);
    myShipments.push(test2);
    displayContents();
}