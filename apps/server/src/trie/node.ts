import { TrieChildrenKV } from "../types";

export default class TrieNode {
    private readonly character: string | null;
    private children0: TrieChildrenKV;
    private parent: TrieNode | null;
    private end: boolean;

    constructor(character: string | null) {
        this.character = character; // We mark key as character

        this.parent = null;
        this.children0 = {};
        this.end = false;
    }

    get children(): TrieChildrenKV {
        return this.children0;
    }

    createChildren(key: string): TrieNode {
        const node = new TrieNode(key);

        node.parent = this;
        this.children0[key] = node;

        return node;
    }

    get empty() {
        return Object.keys(this.children0).length <= 0;
    }

    clear() {
        this.children0 = {};
    }

    find(key: string): TrieNode {
        return this.children0[key];
    }

    get leaf() {
        return this.end;
    }

    markLeaf() {
        this.end = true;
    }

    unmarkLeaf() {
        this.end = false;
    }

    get word() { // We trace from the leaf node all the way back to main root so we can see a complete word
        const word: string[] = [];
        let root: TrieNode | null = this;

        while (root && root.character) {
            word.unshift(root.character);

            root = root.parent;
        }

        return word.join("");
    }
}