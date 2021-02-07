const Ship = require("../src/Cruise-ship.js");
const Port = require("../src/Port.js");

describe('Create a ship object with a name, captain, starting port and passenger number', () => {
    test('If the ship is an object', () => {
        const port = new Port('Gonyeli Baraji', 'KKTC');
        const ship = new Ship('USS Gabira', 'Gocmenkoylu Deli Memed', port);
        expect(ship).toBeInstanceOf(Object);
    });
    test('If the ship has a captain', () => {
        const port = new Port('Gonyeli Baraji', 'KKTC');
        const ship = new Ship('USS Gabira', 'Gocmenkoylu Deli Memed', port);
        expect(ship.captain).toBe('Gocmenkoylu Deli Memed');
    });
    test('If the ship has a name', () => {
        const port = new Port('Gonyeli Baraji', 'KKTC');
        const ship = new Ship('USS Gabira', 'Gocmenkoylu Deli Memed', port);
        expect(ship.name).toBe('USS Gabira');
    });
    test('If the ship has a starting port', () => {
        const port = new Port('Gonyeli Baraji', 'KKTC');
        const ship = new Ship('USS Gabira', 'Gocmenkoylu Deli Memed', port);
        expect(ship.startingPort).toBe(true);
    });
    test('If the ship has no passengers', () => {
        const port = new Port('Gonyeli Baraji', 'KKTC');
        const ship = new Ship('USS Gabira', 'Gocmenkoylu Deli Memed', port);
        expect(ship.passengers).toBe(0);
    });
});

describe('The ship methods', () => {
    test('If the ship can has passengers board it', () => {
        const port = new Port('Gonyeli Baraji', 'KKTC');
        const ship = new Ship('USS Gabira', 'Gocmenkoylu Deli Memed', port);
        ship.boardTheShip(10)
        expect(ship.passengers).toBe(10);
    });
    test('If it can set sail', () => {
        const port = new Port('Gonyeli Baraji', 'KKTC');
        const ship = new Ship('USS Gabira', 'Gocmenkoylu Deli Memed', port);
        const port2 = new Port('Port of Shanghai', 'China');
        expect(port.dockedShips[0]).toBeFalsy();
        port.dockedShips = [ship];
        ship.setSail(port, port2);
        expect(ship.startingPort).toBeFalsy();
        expect(ship.destinationPort).toBeTruthy();
        expect(ship.destinationPort).toBe(port2);
        expect(port.dockedShips[0]).toBeFalsy();
    });
    test('If it can dock with a new port', () => {
        const port = new Port('Gonyeli Baraji', 'KKTC');
        const ship = new Ship('USS Gabira', 'Gocmenkoylu Deli Memed', port);
        const port2 = new Port('Port of Shanghai', 'China');
        ship.setSail(port2);
        ship.dock(port2);
        expect(ship.destinationPort).toBe(null);
        expect(ship.currentPort).toBe(port2);
        expect(port2.dockedShips[0]).toBe(ship);
    });
});