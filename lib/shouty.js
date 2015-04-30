module.exports = {
	Network: function Network() {
		this.broadcast = function(message, callback) {
			callback();
		};
	},


  Person: function Person(network) {

    this.shout = function (message, callback) {
		network.broadcast
      callback();
    };
  }
};
