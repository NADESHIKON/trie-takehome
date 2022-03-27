import TrieNode from "./node";

export default class Trie {
    private readonly root: TrieNode;

    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word: string): boolean {
        if (!word || !word.length) return false; // Don't insert if the word is empty

        let current = this.root;

        for (let i = 0; i < word.length; i++) { // Iterate over all characters in the given word
            const character = word[i];

            if (!current.find(character)) { // We create a children for this parent if there is no such node with given alphabet under current node's children
                current.createChildren(character);
            }

            current = current.find(character);

            if (i === word.length - 1) current.markLeaf();
        }

        return true;
    }

    includes(word: string): boolean {
        if (!word || !word.length) return false;

        let current = this.root;

        for (let i = 0; i < word.length; i++) { // Iterate over all characters in the given word
            const character = word[i];

            if (!current.find(character)) { // If there is no such children we simply say the word doesn't exist in given trie structure
                return false;
            } else {
                current = current.find(character);
            }
        }

        return current.leaf; // If the final node we traced at the end of word length is also the leaf node (end of trie structure), we can conclude this structure contains given word
    }

    search(prefix: string): string[] {
        if (!prefix || !prefix.length) return []; // Don't search if user literally just does not want to search peacefully..

        const nodes: string[] = [];

        let current = this.root;

        for (let i = 0; i < prefix.length; i++) {
            const character = prefix[i];

            if (!current.find(character)) return nodes;
            else current = current.find(character)
        }

        this.findRecursively(current, nodes);

        return nodes;
    }

    private findRecursively(node: TrieNode, words: string[]) {
        if (node.leaf) words.unshift(node.word);

        for (let key in node.children) {
            this.findRecursively(node.find(key), words);
        }
    }

    collect(): string[] {
        const words: string[] = [];

        let current = this.root;

        this.findRecursively(current, words);

        return words;
    }

    private removeRecursively(node: TrieNode, word: string) {
        if (node.leaf && node.word === word) {
            if (node.empty) node.unmarkLeaf();
            else node.clear();
        }

        for (let key in node.children) {
            this.removeRecursively(node.find(key), word);
        }
    }

    remove(word: string): boolean {
        if (!word || !word.length) return false;

        let current = this.root;

        this.removeRecursively(current, word);
        return true;
    }
}