import { Command } from "func";
import { list } from "../lib/helper";
import { ListKeywordReply } from "@nadeshikon/trie-server-dto";

@Command({
    name: "list",
    description: "List all keywords in the trie server"
})
export class ListCommand {
    constructor() {
        console.log(`Listing all keywords in the server...`);
        list()
            .then(async response => {
                const r = (await response.json()) as ListKeywordReply;
                console.log("All keywords in the trie server:");
                r.keywords.forEach(keyword => console.log(` - ${keyword}`));
            });
    }
}