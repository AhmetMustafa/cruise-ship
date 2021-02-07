const Port = require("../src/Port.js");

describe('Create a port object with a name, country, docked ships and awaiting passenger number', () => {
    test('If the port is an object', () => {
        const port = new Port('Port of Shanghai', 'China');
        expect(port).toBeInstanceOf(Object);
    });
    test('If the port has a name', () => {
        const port = new Port('Port of Shanghai', 'China');
        expect(port.name).toBe('Port of Shanghai');
    });
    test('If the port has a country', () => {
        const port = new Port('Port of Shanghai', 'China');
        expect(port.country).toBe('China');
    });
    test('If the port has a place for ships to dock', () => {
        const port = new Port('Port of Shanghai', 'China');
        expect(port.dockedShips).toEqual([]);
        expect(port.dockedShips[0]).toBeFalsy();
    });
});

