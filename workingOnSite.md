# Working on the Chronicle

The Chronicle of Mobile Gaming is developed with a number of tools, especially TailwindCSS, used to write the CSS for the front-end. Thus, to properly update the CSS, you must install TailwindCSS as follows:

1. Install node.js (it will install npm, which is a pre-requisite for installation)
2. Install tailwindcss package:
   `npm install tailwindcss -D`
3. Run tailwindcss CLI:
   `npx tailwindcss -i ./src/input.css -o ./css/style.css/ --watch`
