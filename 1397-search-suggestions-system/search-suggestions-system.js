/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */


var suggestedProducts = function(products, searchWord) {
    class TrieNode {
        constructor() {
            this.children = {};
            this.words = []; // up to 3 lexicographically smallest suggestions
        }
    }

    function insertProduct(root, product) {
        let node = root;
        for (const char of product) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];

            if (node.words.length < 3) {
                node.words.push(product);
            }
        }
    }

    function getSuggestions(root, searchWord) {
        const result = [];
        let node = root;

        for (const char of searchWord) {
            if (node && node.children[char]) {
                node = node.children[char];
                result.push(node.words);
            } else {
                node = null;
                result.push([]);
            }
        }

        return result;
    }


    products.sort(); // we ensures lexicographical order
    const root = new TrieNode();

    // we insert each product into the Trie
    for (const word of products) {
        insertProduct(root, word);
    }

    // we traverse the Trie to get suggestions for each prefix
    return getSuggestions(root, searchWord);
};