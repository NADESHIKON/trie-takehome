import { Command, CommandArgsProvider } from "func";
import { remove } from "../lib/helper";
import { RemoveKeywordReply } from "@nadeshikon/trie-server-dto";

@Command({
    name: "remove",
    description: "Remove a keyword from the trie state server"
})
export class RemoveCommand {
    constructor(private args: CommandArgsProvider) {
        const input = args.inputs;

        if (input.length != 2) {
            console.log("Please follow the command format `remove [keyword]` to remove a keyword from the trie state.");
        } else {
            const keyword = input[1];

            console.log(`Removing keyword ${keyword} from the server...`);
            remove(keyword)
                .then(async response => {
                    const r = (await response.json()) as RemoveKeywordReply;
                    console.log(r.message);
                });
        }
    }
}