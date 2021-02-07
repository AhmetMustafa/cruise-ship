class Ship {
    constructor (name, captain, port){
    this.captain = captain;
    this.name = name;
    this.startingPort = true;
    this.passengers = 0;
    this.destinationPort = null
    this.currentPort = port
    };

    get isOnVoyage() {
        if (this.destination){
            return true
        } else {
            return false
        }
    };

    boardTheShip(passengerNumber) {
        this.passengers += passengerNumber
    };

    arrayRemove(departure) {
        const x = departure.dockedShips; 
        return x.filter(function(ele) { 
            return ele != departure; 
        });
    };

    setSail(departure, destination) {
        if (this.startingPort == true){
        const x = this.startingPort
        this.startingPort = !x
    };
        this.destinationPort = destination
        return `${this.name} has set sail from ${this.currentPort} to ${destination}`
    };

    dock(dockingPort) {
        this.currentPort = dockingPort
        this.destinationPort = null
        dockingPort.dockedShips.push(this);
    };
};

module.exports = Ship;

/*
{"captain": "Gocmenkoylu Deli Memed", 
 "currentPort": {"awaitingPassengers": 0, "country": "KKTC", "dockedShips": [[Circular]], "name": "Gonyeli Baraji"}, 
 "destinationPort": {"awaitingPassengers": 0, "country": "China", "dockedShips": [], "name": "Port of Shanghai"}, 
 "name": "USS Gabira", "passengers": 0, "startingPort": false}
 */