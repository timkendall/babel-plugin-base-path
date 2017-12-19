# babel-plugin-base-path

**Note: This is still experimental! Use at your own risk.**

Adds first-class support for transforming relative asset paths to absolute one's. The goal of this plugin is to support native AST transforms for:

1. Object fields
2. String literals
3. Template strings

## Quickstart

Install the plugin:

`yarn add --dev babel-plugin-base-path`

Add it to your Babel configuration:

```json
{
  "plugins": [
    ["base-path", {
      "base": "https://foo.com"
    }]
  ]
}
```

## Documentation

TODO

## License

Licensed under the MIT License, Copyright © 2017 Tim Kendall.

See [LICENSE.md](./LICENSE.md) for more information.
