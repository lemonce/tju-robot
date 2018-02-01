const SerialPort = require('serialport');

const connectionPool = {};

exports.new = function (comName, options, openCallback) {
	connectionPool[comName] = new SerialPort(comName, options, openCallback);
	return connectionPool[comName];
};

exports.getPortList = async function () {
 return await SerialPort.list();
};

SerialPort.list();

const robot = new SerialPort('COM4', {
	baudRate: 115200
});

robot.open(err => {
	if (err) {
		return console.log('Error opening port: ', err.message);
	}
});

setInterval(() => {
	const angle = Math.floor(Math.random() * 170) + 100;

	robot.write(`{116,S10,2,${angle},20}`, 'ascii');

}, 1000);