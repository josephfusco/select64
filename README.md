# select64

Custom base64 icons for native select elements.

## Icon Contribution

Drop your `.svg` icons inside of `_icons/`. Be sure to add YAML front matter to the individual svg files with an icon name assigned.

```
---
name: icon-name
---

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
<path d="M13.148 6.312l-5.797 5.789q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.789q-0.148-0.148-0.148-0.355t0.148-0.355l1.297-1.289q0.148-0.148 0.352-0.148t0.352 0.148l4.148 4.148 4.148-4.148q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.289q0.148 0.148 0.148 0.355t-0.148 0.355z"></path>
</svg>
```

That's it! Jekyll will add automatically add it to the collection.