import { Command, CommandArgsProvider } from "func";
import { search } from "../lib/helper";
import { SearchKeywordReply } from "@nadeshikon/trie-server-dto";

@Command({
    name: "search",
    description: "Search a specified keyword (case sensitive) in the trie state server"
})
export class SearchCommand {
    constructor(private args: CommandArgsProvider) {
        const input = args.inputs;

        if (input.length != 2) {
            console.log("Please follow the command format `search [keyword]` to search a keyword in the trie state.");
        } else {
            const keyword = input[1];

            console.log(`Searching keyword ${keyword} in the server...`);
            search(keyword)
                .then(async response => {
                    const r = (await response.json()) as SearchKeywordReply;
                    console.log(`The keyword ${keyword} does ${r.exists ? "" : "not"} exist in the trie state server`);
                });
        }
    }
}