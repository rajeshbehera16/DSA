class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        const dfs = (node, i) => {
            if (i === word.length) return node.isEndOfWord;
            const char = word[i];
            if (char === '.') {
                for (let child of Object.values(node.children)) {
                    if (dfs(child, i + 1)) return true;
                }
                return false;
            } else {
                if (!node.children[char]) return false;
                return dfs(node.children[char], i + 1);
            }
        };
        return dfs(this.root, 0);
    }
}