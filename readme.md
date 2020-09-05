# Anime.club - Translations 🌐

This repository contains all translations for the [Anime.club](https://anime.club) website 😉

Thank you for taking a look at the translations ❣️
By making our translations available to everyone, we hope you could kindly help us to improve our translation efforts 🙏

## Quick links (Contents)

- [How to edit translation](#how-to-edit-a-translation)
- [Project structure](#project-structure)
- [Use of translations from this repository in your project](#use-of-translations-from-this-repository-in-your-project)

## How to edit a translation

The process is easy as 1-2-3:

1. Press on the language you would like to edit below
2. Another page would open, make changes there
3. Submit changes by pressing a green button at the bottom of the page where you edit

- [🇸🇦 Arabic (Modern standard)](https://github.com/anime-club/translations/edit/master/src/arabic-standard.ts)
- [🇨🇳 Chinese (Simplified)](https://github.com/anime-club/translations/edit/master/src/chinese-simplified.ts)
- [🇺🇸 English](https://github.com/anime-club/translations/edit/master/src/english.ts)
- [🇫🇷 French](https://github.com/anime-club/translations/edit/master/src/french.ts)
- [🇩🇪 German](https://github.com/anime-club/translations/edit/master/src/german.ts)
- [🇮🇳 Hindi](https://github.com/anime-club/translations/edit/master/src/hindi.ts)
- [🇮🇩 Indonesian](https://github.com/anime-club/translations/edit/master/src/indonesian.ts)
- [🇯🇵 Japanese](https://github.com/anime-club/translations/edit/master/src/japanese.ts)
- [🇰🇷 Korean](https://github.com/anime-club/translations/edit/master/src/korean.ts)
- [🇵🇹 Portuguese](https://github.com/anime-club/translations/edit/master/src/portuguese.ts)
- [🇷🇺 Russian](https://github.com/anime-club/translations/edit/master/src/russian.ts)
- [🇪🇸 Spanish](https://github.com/anime-club/translations/edit/master/src/spanish.ts)
- [🇻🇳 Vietnamese](https://github.com/anime-club/translations/edit/master/src/vietnamese.ts)

## Project structure

- all languages are available in [/src](/src) directory
- if a translation phrase is **not translated yet**:
  - it has a prefix `"(en) "`
    - for example if you see in [/src/japanese.ts](/src/japanese.ts):

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

## Use of translations from this repository in your project

If you place the following link to our website somewhere in your project where your visitors can see it, for example in your About page:

```md
We use translations from <a href="https://anime.club">Anime.club</a>
```

- if you do so, you are welcome to use our translations from this repository
