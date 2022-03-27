# Trie Server

## How to Setup
1. Clone the source code.
2. Run `npm i -g pnpm` to install `pnpm`, the package manager this application uses to manage dependencies.
3. Run `pnpm i` to install dependencies.
4. Run `pnpm run build` to build the application in production mode.
5. Run `pnpm run start` to start the application in production mode.

## REST Endpoints
- `GET /` - List all keywords in the trie state
- `PUT /` - Add a keyword to the trie state where the keyword is raw request body
- `DELETE /` - Remove a keyword from the trie state where the specified keyword is request body
- `GET /search/:keyword` - Search for whether a keyword (that is, specified as path parameter `keyword`) exists or not
- `GET /suggest/:prefix` - Find all keywords that have a specified prefix (case-sensitive), specified as path parameter `prefix`

## How CLI Interacts with it?
The CLI sends different HTTP(S) requests depending on the user and server responds with mainly 3 fields:
1. `code` - The response code, which corresponds to the server response code in HTTP standards
2. `message` - The response message, which gives more information about how server responded the request
3. `payload` (field name varies and might not present in some responses) - The generated response payload from the server depending on the client request