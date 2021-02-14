class Ship {
    constructor (name, captain, itenerary){
    this.captain = captain;
    this.name = name;
    this.itenerary = itenerary;
    this.startingPort = true;
    this.passengers = 0;
    this.previousPort = null;
    this.destinationPort = null;
    this.currentPort = itenerary.ports[0];
    itenerary.ports[0].addShip(this);
    };

    get isOnVoyage() {
        if (this.destinationPort) {
            return true
        } else {
            return false
        };
    };

    boardTheShip(passengerNumber) {
        if (!this.isOnVoyage) {
            this.passengers += passengerNumber
        } else {
            throw new Error('Can not board the ship while it is travelling');
        };
    };

    setSail(destination) {
        if (this.startingPort == true){
        this.startingPort = false
    };  
        const itenerary = this.itenerary;
        const currentPortIndex = itenerary.ports.indexOf(this.currentPort);
        if (currentPortIndex === (itenerary.ports.length - 1)) {
            throw new Error('End of itenerary reached');
    };
        this.previousPort = this.currentPort;
        this.currentPort.removeShip(this);
        this.currentPort = null;
        this.destinationPort = destination;
        return `${this.name} has set sail from ${this.currentPort} to ${destination}`;
    };

    dock() {
        const itenerary = this.itenerary;
        const previousPortIndex = itenerary.ports.indexOf(this.previousPort);
        this.currentPort = itenerary.ports[previousPortIndex + 1];
        this.destinationPort = null;
        this.currentPort.addShip(this);
    };
};

module.exports = Ship;

/*
{"captain": "Gocmenkoylu Deli Memed", 
 "currentPort": {"awaitingPassengers": 0, "country": "KKTC", "dockedShips": [[Circular]], "name": "Gonyeli Baraji"}, 
 "destinationPort": {"awaitingPassengers": 0, "country": "China", "dockedShips": [], "name": "Port of Shanghai"}, 
 "name": "USS Gabira", "passengers": 0, "startingPort": false}
 */