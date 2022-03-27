import { expect } from "chai";
import Trie from "./index";

describe("Trie structure test", () => {
    it("Trie structure should contain correct words without issues", () => {
        const trie: Trie = new Trie();

        trie.insert("Hello");

        expect(trie.includes("Hello")).to.be.true;
        expect(trie.includes("Hi")).to.be.false;
    });

    it("Trie structure should be able to search words with correct prefixes", () => {
        const trie: Trie = new Trie();

        trie.insert("Hello");

        expect(trie.search("H")).to.be.eql(["Hello"]);
    });

    it("Trie structure should be able to correctly delete words", () => {
        const trie: Trie = new Trie();

        trie.insert("Hello");
        expect(trie.includes("Hello")).to.be.true;

        trie.remove("Hello");
        expect(trie.includes("Hello")).to.be.false;
    });

    it("Trie structure should be able to collect all words", () => {
        const trie: Trie = new Trie();

        trie.insert("Hello");
        trie.insert("Hi");
        trie.insert("Word");

        expect(trie.collect()).to.be.eql(["Word", "Hi", "Hello"]);
    });
});