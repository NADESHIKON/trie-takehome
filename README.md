# Take-home Challenge - Trie

## Operation Requirements
1. [X] Add keyword to trie
2. [X] Delete a keyword from trie
3. [X] Search for a keyword in trie [True/False]
4. [X] Return list of autocomplete suggestion based on an input prefix
5. [X] Display the trie

## Application Requirements
1. [X] The trie must be hosted online (AWS, GCloud, Azure or similar) so that multiple concurrent clients from around the world can run the aforementioned operations on the trie.
2. [X] The trie must have one global state. All client operations must reflect changes in that one global state.
3. [X] A client interacts with the trie through a CLI (Command-Line Interface). There should be clear instructions on how to download/install this CLI and run operations. You can make this CLI available through distributions such as `npm` (if using JS) or equivalent.
4. [X] Your trie must maintain the integrity of the order of requested operations across multiple clients. If client A’s request is received before client B’s request, client A’s request must be processed first before B’s request is processed. Think about if/what data structure can help with this.
5. [X] The operations must be as algorithmically efficient as you can think of. 

## Instructions
- Client - Go to `apps/client/README.md` for setup instructions
- Server - Go to `apps/server/README.md` for setup instructions

## Library used
- [turborepo](https://turborepo.org/) - Monorepo management
- [vite](https://vitejs.dev/) - HMR server and bundling tool
- [vite-plugin-node](https://github.com/axe-me/vite-plugin-node) - Node.js plugin for vite
- [fastify](https://www.fastify.io/) - HTTP server framework
- [mocha](https://mochajs.org/) - Unit test framework for Node.js
- [Chai](https://www.chaijs.com/) - Unit test framework extension for Mocha
- [func](https://github.com/unix/func) - CLI framework
- [cross-fetch](https://github.com/lquixada/cross-fetch) - HTTP client `fetch` for Node.js
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript language