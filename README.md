# Eleventy Boilerplate

Basic starter for the [Eleventy](https://www.11ty.io/) static site generator created by [Zach Leatherman](https://www.zachleat.com/). It's called Eleventy Boilerplate because all the other names were taken already. ¯\\\_(ツ)\_/¯

## Local development

1. Clone a clean copy of the repository without its history.

   ```sh
    # clone the repo without its full history.
    git clone --depth 1 https://github.com/huijing/eleventy-bp.git PROJECT_NAME

    cd PROJECT_NAME

    # remove existing git information and create a new repository.
    rm -rf .git && git init
   ```

2. Install dependencies with your package manager of choice (doesn't necessarily have to be `npm`)

   ```sh
   npm install
   ```

3. Start the development server. All changes will be processed and your site will automatically reload on http://localhost:8080

   ```sh
   npx @11ty/eleventy --serve
   ```

4. Remember to replace the information in the site.json file and put in your own favicon.

## Potential questions on `src` folder structure

If you look closely, it might be weird that the Javsacript folder is inside _\_includes_ while the rest of the assets are outside. Honestly, it's because I wanted to use [@5t3ph](http://github.com/5t3ph)'s [eleventy-plugin-sass-lightningcss](https://github.com/5t3ph/eleventy-plugin-sass-lightningcss) to process my Sass files as well as use Terser for JS minification.

The guide for JS minification was found
[here](https://github.com/pdehaan/11ty-transform-async), which structured the asset folder within _\_includes_. I'm not smart enough to rewrite it all, so I just combined both. At least the output is all in the same place. ¯\\\_(ツ)\_/¯

## Helpful links

- [Why Are There So Many Static Site Generators](https://www.zachleat.com/web/eleventy/)
- [Eleventy documentation](https://www.11ty.io/docs/)
- [Process CSS or Sass With LightningCSS](https://11ty.rocks/posts/process-css-with-lightningcss/)
- [Minify Javascript - But as a separate file](https://github.com/11ty/eleventy/issues/1425)
