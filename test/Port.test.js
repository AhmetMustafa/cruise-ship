const Ship = require("../src/Cruise-ship.js");
const Port = require("../src/Port.js");
const Itenerary = require("../src/Itenerary.js");

describe('Create a port object with a name, country, docked ships and awaiting passenger number', () => {
    let port;
    beforeEach(() => {
        port = new Port('Port of Shanghai', 'China');
    });

    test('If the port is an object', () => {
        expect(port).toBeInstanceOf(Object);
    });

    test('If the port has a name', () => {
        expect(port.name).toBe('Port of Shanghai');
    });

    test('If the port has a country', () => {
        expect(port.country).toBe('China');
    });

    test('If the port has a place for ships to dock', () => {
        expect(port.dockedShips).toEqual([]);
        expect(port.dockedShips[0]).toBeFalsy();
    });

});

describe('Port can add or remove ships from its Docked Ships property', () => {
    let port;
    let itenerary;
    beforeEach(() => {
        port = new Port('Port of Shanghai', 'China');
        port2 = new Port('Gonyeli Baraji', 'KKTC');
        itenerary = new Itenerary([port, port2]);
    });

    test('If the port can add ships', () => {
        const ship = jest.fn();
        const ship2 = jest.fn();
        port.addShip(ship);
        expect(port.dockedShips).toContain(ship);
        port.addShip(ship2);
        expect(port.dockedShips).toContain(ship, ship2);
        port2.addShip(ship2)
        expect(port2.dockedShips).toContain(ship2);
    });

    test('If the port can remove ships', () => {
        const ship = jest.fn();
        const ship2 = jest.fn();
        port.addShip(ship);
        port.addShip(ship2);
        port.removeShip(ship);
        expect(port.dockedShips).toContain(ship2);
    });
});
