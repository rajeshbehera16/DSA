/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const geneSet = new Set(bank);
    if (!geneSet.has(endGene) && startGene !== endGene) return -1;
    const visited = new Set([startGene]);
    const queue = [[startGene, 0]];

    while (queue.length > 0) {
        const [gene, steps] = queue.shift();
        if (gene === endGene) return steps;
        for (let i = 0; i < gene.length; i++) {
            for (const c of "ACGT") {
                if (gene[i] !== c) {
                    const mutated = gene.slice(0, i) + c + gene.slice(i + 1);
                    if (geneSet.has(mutated) && !visited.has(mutated)) {
                        visited.add(mutated);
                        queue.push([mutated, steps + 1]);
                    }
                }
            }
        }
    }

    return -1;
};