class Port {
    constructor (name, countryOfOrigin){
    this.name = name;
    this.country = countryOfOrigin;
    this.dockedShips = [];
    this.awaitingPassengers = 0;
    };

    addShip(ship) {
        this.dockedShips.push(ship)
    };

    removeShip(ship) {
        this.dockedShips = this.dockedShips.filter(dockedShip => dockedShip !== ship);
    };
};

module.exports = Port;