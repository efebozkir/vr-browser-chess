import Game from "./Game";

/**
 * App is the main module
 */
class App {
    constructor() {
        let game = new Game();
        game.initiate().then(() => {
                console.log(game);
                game.startGame();
                game.DoRender();
            }
        ).catch(error => {
            console.log(error)
        })
    }
}

new App();