## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Project integrates with MongoDB and uses the NestJS framework to create a REST API.
For that it was necessary to add the following dependencies:
```
@nestjs/mongoose mongoose
```

And add the database Module to the app.module.ts file:
```typescript
MongooseModule.forRoot('mongodb://localhost/nest')
```

For validatig the client Payload, the following dependency was added:
```
class-validator class-transformer
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

The Nest CLI provides an interesting tool we can use to generate files for us and thus make the development faster
```bash
cd src && nest g resource
```
The command above will prompt some options in the terminal.

nest g resource command not only generates all the NestJS building blocks (module, service, controller classes) but also an entity class, DTO classes as well as the testing (.spec) files


## Generating new modules

```bash
# development
$ nest generate module [name-of-module]
```

## Generating new Controllers

```bash
# development
$ nest generate controlelr [name-of-controller]
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```


## Stay in touch

- Author - [Filipe Andrade]()

## License

Nest is [MIT licensed](LICENSE).
