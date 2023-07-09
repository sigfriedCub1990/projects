function announceMachines(announce, ...args) {
	let labelsCount = 0;

	for (let machine of args) {
		let label;
		if (machine.label) {
			label = machine.label;
			labelsCount += 1;
		} else {
			label = `Make: ${machine.make}; Model: ${machine.model}`;
		}

		announce(label);
	}

	return labelsCount;
}

module.exports.announceMachines = announceMachines;
