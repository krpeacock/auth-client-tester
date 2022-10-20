# Auth Client Tester

This package registers a testing utility for `@dfinity/auth-client`.

Peer dependencies include:

- `@dfinity/agent`
- `@dfinity/principal`
- `@dfinity/auth-client`
- `lit-html`
- `haunted`

To install, run

```shell-script
npm install --save @dfinity/agent @dfinity/principal @dfinity/auth-client lit-html haunted
```

In your code, you can import with

```js
import "@pavus/auth-client-tester";
```

And use it in your html with

```html
<auth-client-tester></auth-client-tester>
```
