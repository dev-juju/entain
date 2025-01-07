## ASSUMPTIONS
- I quickly skimmed the TMDB API documentation, so I may have missed some details. My implementation is based on the assumption that there are two separate endpoints for listing and searching movies.
- I used [Next.js](https://nextjs.org/) on the frontend. I assume that the `React` requirement is also met by using the `Next.js` framework.

## TIPS
As mentioned in this [README](web/README.md), I use `xstate` to manage the state of the `Web` application. One of the benefits of `xstate` is the ability to visualize the state machine and manually trigger events and see the state changes. You will need to install the official [XState VSCode](https://marketplace.cursorapi.com/items?itemName=statelyai.stately-vscode) extension to take advantage of this feature. Below is an example of how to visualize the `Movies` state machine.

![Movies State Machine](./web/public/movies-state.png)

You can also see unit tests for the `Movies` state machine in the [state.test.ts](web/src/app/movies/state.test.ts) file. The tests are far from exhaustive, but you get the idea.

## NOTES
In addition to using `Nextjs` on the frontend, I also used [Nest.js](https://nestjs.com/) on the backend and prefer [Docker](https://www.docker.com/). For these reasons, deploying all modules on AWS seemed like the best option as opposed to deploying the Web module on GitHub Pages.

See more notes in the following `README.md` files

- [Base](README.md)
- [Web](web/README.md)
- [API](api/README.md)
