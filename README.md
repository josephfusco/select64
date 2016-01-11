# select64

Quickly generate variations of common `<select>` backgrounds.

## Contributing

### Icons

Drop your `.svg` icons inside of `_icons/`. Be sure to add YAML front matter to the individual svg files with an icon name assigned. It's basically just a namespace right now as front matter is required for Jekyll collections. Once there is a substantial amount of icons the front matter will be used for tagging icons to allow filters.

```
---
name: icon-name
---

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
<path d="M13.148 6.312l-5.797 5.789q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.789q-0.148-0.148-0.148-0.355t0.148-0.355l1.297-1.289q0.148-0.148 0.352-0.148t0.352 0.148l4.148 4.148 4.148-4.148q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.289q0.148 0.148 0.148 0.355t-0.148 0.355z"></path>
</svg>
```

This will automatically be added to the collection.

### Development

Any help whatsoever would be greatly appreciated! Feel free to submit a pull request or [open an issue](https://github.com/josephfusco/select64/issues/new) for any other feedback.

### Overiew On How It Works

By utilizing Jekyll collections, we can loop through all of the svg icons from the `_icons/` directory. The user manipulates the svg width, height, and fill with jQuery. We are using [canvg](https://github.com/gabelerner/canvg) to render the svg on Canvas, and then get the base64 encoded png from there.

## License

MIT © [Joseph Fusco](http://josephfus.co)
