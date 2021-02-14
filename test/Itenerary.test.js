const Itenerary = require("../src/Itenerary.js");
const Port = require("../src/Port.js");

describe('Create an itenerary object with a ports property', () => {
    let port;
    let itenerary;
    let port2;
    beforeEach(() => {
        port = jest.fn();
        port2 = jest.fn();
        itenerary = new Itenerary([port, port2]);
    });

    test('If the itenerary is an object', () => {
        expect(itenerary).toBeInstanceOf(Object);
    });

    test('If the itenerary has a ports property', () => {
        expect(itenerary.ports).toBeTruthy();
        expect(itenerary.ports).toContain(port, port2);
        port3 = jest.fn();
        itenerary2 = new Itenerary([port, port2, port3]);
        expect(itenerary2.ports).toContain(port, port2, port3);
    });
});