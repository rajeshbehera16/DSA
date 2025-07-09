// Gas Station
// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.

/** * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;
    let totalGas = 0, totalCost = 0, currentGas = 0, startIndex = 0;

    for (let i = 0; i < n; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        currentGas += gas[i] - cost[i];

        // If current gas is negative, reset the start index
        if (currentGas < 0) {
            startIndex = i + 1;
            currentGas = 0;
        }
    }

    // If total gas is less than total cost, return -1
    return totalGas < totalCost ? -1 : startIndex;
}
// Example usage:
const gasStations = [5, 8, 3, 4];
const fuelCosts = [6, 5, 7, 9];
const result = canCompleteCircuit(gasStations, fuelCosts);
console.log(result); // Output: -1 (not enough gas to complete the circuit)