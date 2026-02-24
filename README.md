# ng-packages

Remote @ng/ packages for Legion.

Each package under `packages/` is an @ng/ scoped package that can be
discovered, installed, and used by ResourceManager.

## Structure

```
packages/
  tools-echo/        # @ng/tools-echo - Simple echo handle for testing
    package.json
    src/
      index.js
      EchoDataSource.js
      EchoHandle.js
```
