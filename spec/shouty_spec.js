var chai = require('chai');
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var Shouty = require("../lib/shouty");
var Person = Shouty.Person;

describe("Shouty", function () {

  describe("Person", function () {
    var person;

    beforeEach(function () {
      var network = Network();
		person = new Person(network);
		network.
    });

    it ("can be instantiated", function () {
      expect(person).to.be.instanceof(Person);
    });

    describe("#shout", function () {
      it ("is a method", function () {
        expect(person).to.respondTo('shout');
      });

	  it ("tells network", function () {
		  var callback = sinon.spy();
		  network.broadcast = sinon.spy();
		  person.shout("a msg", callback);
		  expect(network.broadcast).to.have.been.calledWith("a msg",callback);
	  })

      it ("calls back", function () {
        var callback = sinon.spy();
        person.shout("a message", callback);
        expect(callback).to.have.been.called;
      });
    });
  });
});
