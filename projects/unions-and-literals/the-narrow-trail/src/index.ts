type AvailableResource = "Food" | "Water";
type Action = "Resupply" | AvailableResource;

export function runCommands() {
	let resourceToResupply: AvailableResource | undefined;
	let action: Action;

	let food = 5;
	let water = 5;

	for (let day = 1; day <= 7; day++) {
		let roll = rollDice();

		switch (roll) {
			case 1: {
				action = "Food";
				break;
			}
			case 2: {
				action = "Water";
				break;
			}
			default: {
				action = "Resupply";
				break;
			}
		}

		switch (action) {
			case "Resupply": {
				if (!resourceToResupply) {
					resourceToResupply = isEven(roll) ? "Food" : "Water";
					break;
				}
				if (resourceToResupply) {
					if (resourceToResupply === "Water") {
						water += roll;
					}

					if (resourceToResupply === "Food") {
						food += roll;
					}
					resourceToResupply = undefined;
					break;
				}
			}
			case "Water": {
				resourceToResupply = "Water";
				break;
			}
			case "Food": {
				resourceToResupply = "Food";
				break;
			}
		}

		[food, water] = oneMoreDay(food, water);
		if (hasLost(food, water)) return false;
	}

	return true;
}

const rollDice = () => Math.floor(Math.random() * 6) + 1;
const oneMoreDay = (food: number, water: number) => [food - 1, water - 1];
const isEven = (n: number) => n % 2 === 0;
const hasLost = (food: number, water: number) => food === 0 || water === 0;
