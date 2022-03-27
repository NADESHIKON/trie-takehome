# Trie Client

## Setup
1. Install the package `@nadeshikon/trie-client` from npm by doing `npm i -g @nadeshikon/trie-client`
2. Run the command with `npx @nadeshikon/trie-client`

## Commands
1. `@nadeshikon/trie-client -h` - Display the help menu
2. `@nadeshikon/trie-client add <keyword>` - Add a keyword to the trie state server
3. `@nadeshikon/trie-client list`  |  List all keywords in the trie server
4. `@nadeshikon/trie-client search <keyword>`  |  Search a specified keyword (case sensitive) in the trie state server
5. `@nadeshikon/trie-client suggest <prefix>`  |  Suggest possible keywords with a specified prefix (case sensitive) in the trie server
6. `@nadeshikon/trie-client remove <keyword>`  |  Remove a keyword from the trie state server