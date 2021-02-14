const Ship = require("../src/Cruise-ship.js");
const Port = require("../src/Port.js");
const Itenerary = require("../src/Itenerary.js");

describe('Create a ship object with a name, captain, starting port and passenger number', () => {
    let port;
    let port2;
    let itenerary;
    let ship;

    beforeEach(() => {
        port = new Port('Gonyeli Baraji', 'KKTC');
        port2 = new Port('Van Golu', 'Turkiye');
        itenerary = new Itenerary([port, port2]); 
        ship = new Ship('USS Gabira', 'Gocmenkoylu Deli Memed', itenerary);
    });
    test('If the ship is an object', () => {
        expect(ship).toBeInstanceOf(Object);
    });
    test('If the ship has a captain', () => {
        expect(ship.captain).toBe('Gocmenkoylu Deli Memed');
    });
    test('If the ship has a name', () => {
        expect(ship.name).toBe('USS Gabira');
    });
    test('If the ship is at its starting port and its starting port is its current port', () => {
       expect(ship.startingPort).toBe(true);
       expect(ship.currentPort).toEqual(port);
    });
    test('If the ship has no passengers', () => {
        expect(ship.passengers).toBe(0);
    });
    test('If the ship has a previous port property set to nothing', () => {
        expect(ship.previousPort).toBe(null);
    });
    test('If the ship has a previous port property set to nothing', () => {
        expect(ship.destinationPort).toBe(null);
    });
    test('If the isOnVoyage property works as intended', () => {
        expect(ship.isOnVoyage).toBe(false);
        ship.setSail(port2);
        expect(ship.isOnVoyage).toBe(true);
    });
    test('If the ship is added to its current ports Docked Ships on initiation', () => {
        expect(port.dockedShips).toContain(ship);
    });
});

describe('The ship methods', () => {
    let port;
    let port2;
    let itenerary;
    let ship;

    beforeEach(() => {
        port = new Port('Gonyeli Baraji', 'KKTC');
        port2 = new Port('Van Golu', 'Turkiye');
        itenerary = new Itenerary([port, port2]); 
        ship = new Ship('USS Gabira', 'Gocmenkoylu Deli Memed', itenerary);
    });

    test('If the ship can have passengers board it', () => {
        ship.boardTheShip(10)
        expect(ship.passengers).toBe(10);
        ship.boardTheShip(55)
        expect(ship.passengers).toBe(65);
        ship.destinationPort = port2;
        expect(() => ship.boardTheShip(23)).toThrowError('Can not board the ship while it is travelling')
    });

    test('If it can set sail', () => {
        port.dockedShips = [ship];
        ship.setSail(port2);
        expect(ship.destinationPort).toBeTruthy();
        expect(ship.destinationPort).toBe(port2);
        /*expect(port.dockedShips[0]).toBeFalsy();*/
    });

    test('If set sail makes starting point false', () => {
        ship.setSail(port2);
        expect(ship.startingPort).toBeFalsy();
        expect(ship.startingPort).toBe(false);
    });

    test('If set sail sets the departure port as the previous port', () => {
        ship.setSail(port2);
        expect(ship.previousPort).toEqual(port);
    });

    test('If set sail sets the current port as null', () => {
        ship.setSail(port2);
        expect(ship.currentPort).toBeFalsy();
        expect(ship.currentPort).toBe(null);
    });

    test('If set sail sets the previous port', () => {
        ship.setSail(port2);
        expect(ship.previousPort).toBe(port);
    });

    test('If set sail removes the ship from the Docked ships of the previous port', () => {
        ship.setSail(port2);
        expect(port.dockedShips).not.toContain(ship);
    });

    test('That it can\'t sail further than its itenerary', () => {
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itenerary reached');
    });

    test('If it can dock with a different port', () => {
        ship.setSail(port2);
        ship.dock();
        expect(ship.destinationPort).toBe(null);
        expect(ship.currentPort).toBe(port2);
        expect(ship.currentPort.dockedShips).toContain(ship);
        expect(port2.dockedShips).toContain(ship);
    });
});