# Anime.club - Translations 🌐

This repository contains all translations for the [Anime.club](https://anime.club) website 😉

Thank you for taking a look at the translations ❣️
By making our translations available to everyone, we hope you could kindly help us to improve our translation efforts 🙏

## Project structure

- all languages are available in `/src` directory
- if a translation phrase is **not translated yet**:
  - it has a prefix `"(en) "`
    - for example if you see in `/src/japanese.ts`:

      ```ts
      deleteArt: `(en) Delete art`,
      ```

      - it means we have **not** translated this phrase yet

- the translation phrase might be either:
  - a static value:

    ```ts
    addBlog: `Add blog`,
    ```

  - or a value that changes (`n` will be replaced on the website):

    ```ts
    addedNAgo: (n) => `Added ${n} ago`,
    ```

## How to correct a translation

*Instructions to be added...*

## Use of translations from this repository in your project

If you place the following link to our website somewhere in your project where your visitors can see it, for example in your About page:

```md
We use translations from <a href="https://anime.club">Anime.club</a>
```

- if you do so, you are welcome to use our translations from this repository
