# Eleventy Boilerplate

Basic starter for the [Eleventy](https://www.11ty.io/) static site generator created by [Zach Leatherman](https://www.zachleat.com/), based off the [Static Starter](https://github.com/jmegs/static-starter) by [John Meguerian](https://johnmeguerian.com/). It's called Eleventy Boilerplate because all the other names were taken already. ¯\\\_(ツ)_/¯

## Local development

1. Clone a clean copy of the repository without its history.

    ```sh
     # clone the repo without its full history.
     git clone --depth 1 https://github.com/huijing/eleventy-bp.git PROJECT_NAME
     
     cd PROJECT_NAME
     
     # remove existing git information and create a new repository.
     rm -rf .git && git init
    ```

2.  Install dependencies.

    ```sh
    npm install
    ```

3.  Start the development server. All changes will be processed and your site will automatically reload on http://localhost:3000

    ```sh
    npm start
    ```

- Built output lives in `dist`
- Pages and content live in `src/views` where they will be compiled by the static site generator.
- CSS, JS, images, favicons and fonts can be found in their own folders in `src/` where they will be processed by gulp into `dist/assets`.

## Helpful links

- [Why Are There So Many Static Site Generators](https://www.zachleat.com/web/eleventy/)
- [Eleventy documentation](https://www.11ty.io/docs/)