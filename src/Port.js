class Port {
    constructor (name, countryOfOrigin){
    this.name = name;
    this.country = countryOfOrigin;
    this.dockedShips = [];
    this.awaitingPassengers = 0;
    };
};

module.exports = Port;