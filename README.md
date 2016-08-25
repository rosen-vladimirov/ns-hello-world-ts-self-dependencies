# ns-hello-world-ts-self-dependencies
Sample project for NativeScript TypeScript support in AppBuilder with own .d.ts files

## Usage in AppBuilder
When the project is opened in AppBuilder, it should be automaticall migrated - `typings/tns-core-modules` directory must be removed.

* If you try to build and deploy the project directly, it will fail at runtime, as it has `.d.ts` file for `underscore` module, but the `underscore` itself is not declared as dependency.
* After adding `underscore` module, you will receive two entries in package.json - one in dependency section (`underscore`) and one in devDependencies (`@types/underscore`). Trying to transpile the project with such package.json should fail as the .d.ts file in `@types/underscore` is not correct.
* In order to transpile the project, remove the entry in devDependencies (`@types/underscore`) and try build and deploy again.

Whenever you TAP the button, a new message will be generated and a new item will be added to the Repeater control in the main page.

### TypeScript in the project
This project contains its own definition of the underscore module. This allows you to use the syntax:
```TypeScript
import * as _ from "underscore";
```

Also you'll find some very simple interfaces declared in the `app/definitions/animals.d.ts` file. One of them (`ICat`) is used in `app/animals/cat.ts` file, where the class `Cat` implements the interface.
The idea is that when the users have their own classes, they'll probably use the same way of declaring interfaces in a separate .d.ts files and use them later when implementing a class.
