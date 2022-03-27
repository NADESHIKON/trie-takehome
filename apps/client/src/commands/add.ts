import { Command, CommandArgsProvider } from "func";
import { add } from "../lib/helper";
import { SearchKeywordReply } from "@nadeshikon/trie-server-dto";

@Command({
    name: "add",
    description: "Add a keyword to the trie state server"
})
export class AddCommand {
    constructor(private args: CommandArgsProvider) {
        const input = args.inputs;

        if (input.length != 2) {
            console.log("Please follow the command format `add [keyword]` to add a keyword to the trie state.");
        } else {
            const keyword = input[1];

            console.log(`Adding keyword ${keyword} to the server...`);
            add(keyword)
                .then(async response => {
                    const r = (await response.json()) as SearchKeywordReply;
                    console.log(r.message);
                });
        }
    }
}