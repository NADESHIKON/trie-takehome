import { Command, CommandArgsProvider } from "func";
import { suggest } from "../lib/helper";
import { SuggestKeywordReply } from "@nadeshikon/trie-server-dto";

@Command({
    name: "suggest",
    description: "Suggest possible keywords with a specified prefix (case sensitive) in the trie server"
})
export class SuggestCommand {
    constructor(private args: CommandArgsProvider) {
        const input = args.inputs;

        if (input.length != 2) {
            console.log("Please follow the command format `suggest [prefix]` to auto-complete possible keywords given the prefix in the trie state.");
        } else {
            const prefix = input[1];

            console.log(`Searching keywords with prefix ${prefix} in the server...`);
            suggest(prefix)
                .then(async response => {
                    const r = (await response.json()) as SuggestKeywordReply;
                    console.log(`All keywords with given prefix ${prefix} in the trie state server:`);
                    r.keywords.forEach(keyword => console.log(` - ${keyword}`));
                });
        }
    }
}