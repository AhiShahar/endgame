# A basic chess game

## Recreating the endgame of Karpov vs Kasparov at Tilburg, 1991

## Status:

- supports PvP only
- only 60% tests
- win conditions are only a taken king ATM
- move logics and possible paths highlighted, no validation to king movement into a suicide yet.

## Next steps:

- turns
- king movement validation
- draw conditions

## Install and build:

- git clone https://github.com/AhiShahar/endgame.git
- cd endgame
- npm install
- npm run build
- open index.html in the browser

### you can run the dev server with:

- npm run dev

### and access it on

- http://localhost:8080/

### or run the tests coverage and test server

- npm run test
- npm run test-watch
