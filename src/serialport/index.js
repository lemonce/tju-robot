const SerialPort = require('serialport');

const connectionPool = {};

exports.new = function (comName, options, openCallback) {
	connectionPool[comName] = new SerialPort(comName, options, openCallback);
	return connectionPool[comName];
};

exports.getPortList = async function () {
 return await SerialPort.list();
};