export const allChallenges = [
  // --- Basics ---
  {
    id: "html-h1",
    type: "html",
    title: "The Main Heading",
    description: "Create a top-level heading.",
    objectives: [
      {
        id: "html",
        text: 'Create an `<h1>` element with the text "Main Title".',
      },
    ],
    answer: { html: "<h1>Main Title</h1>" },
  },
  {
    id: "html-p",
    type: "html",
    title: "Write a Paragraph",
    description: "Create a paragraph of text.",
    objectives: [
      { id: "html", text: "Create a `<p>` element with any text inside." },
    ],
    answer: { html: "<p>This is a sample paragraph.</p>" },
  },
  {
    id: "html-button",
    type: "html",
    title: "Forge a Simple Button",
    description: "Create a standard clickable button.",
    objectives: [
      {
        id: "html",
        text: 'Create a `<button>` element with the text "Click Me".',
      },
    ],
    answer: { html: "<button>Click Me</button>" },
  },
  {
    id: "html-a",
    type: "html",
    title: "Link to a Website",
    description: "Create a hyperlink.",
    objectives: [
      {
        id: "html",
        text: 'Create an `<a>` tag that links to "https://google.com" with the text "Go to Google".',
      },
    ],
    answer: { html: '<a href="https://google.com">Go to Google</a>' },
  },
  {
    id: "html-img",
    type: "html",
    title: "Display an Image",
    description: "Show an image on the page.",
    objectives: [
      {
        id: "html",
        text: 'Create an `<img>` tag with the `src` "https://via.placeholder.com/150".',
      },
    ],
    answer: { html: '<img src="https://via.placeholder.com/150">' },
  },
  // --- Lists ---
  {
    id: "html-ul",
    type: "html",
    title: "Make an Unordered List",
    description: "Create an unordered list with three items.",
    objectives: [
      {
        id: "html",
        text: "Create a `<ul>` with three `<li>` elements inside it.",
      },
    ],
    answer: { html: "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>" },
  },
  {
    id: "html-ol",
    type: "html",
    title: "Make an Ordered List",
    description: "Create a numbered list with three steps.",
    objectives: [
      {
        id: "html",
        text: "Create an `<ol>` with three `<li>` elements inside it.",
      },
    ],
    answer: { html: "<ol><li>Step 1</li><li>Step 2</li><li>Step 3</li></ol>" },
  },
  // --- Structure & Semantics ---
  {
    id: "html-div",
    type: "html",
    title: "Create a Container",
    description: "Use a `<div>` to group two paragraphs together.",
    objectives: [
      {
        id: "html",
        text: "Create a `<div>` that contains two separate `<p>` elements.",
      },
    ],
    answer: {
      html: "<div><p>First paragraph.</p><p>Second paragraph.</p></div>",
    },
  },
  {
    id: "html-header",
    type: "html",
    title: "Semantic Header",
    description: "Create a semantic header for a page section.",
    objectives: [
      {
        id: "html",
        text: "Create a `<header>` element containing an `<h1>` and a `<p>`.",
      },
    ],
    answer: { html: "<header><h1>Blog Post</h1><p>By Saanvi</p></header>" },
  },
  {
    id: "html-footer",
    type: "html",
    title: "Semantic Footer",
    description: "Create a semantic footer for a page section.",
    objectives: [
      {
        id: "html",
        text: "Create a `<footer>` element with a copyright paragraph inside.",
      },
    ],
    answer: { html: "<footer><p>&copy; 2025 My Site</p></footer>" },
  },
  // --- Forms ---
  {
    id: "html-input",
    type: "html",
    title: "Get User Input",
    description: "Create a simple text input field.",
    objectives: [
      {
        id: "html",
        text: 'Create an `<input>` element with the `type` "text".',
      },
    ],
    answer: { html: '<input type="text">' },
  },
  {
    id: "html-label",
    type: "html",
    title: "Label Your Inputs",
    description: "Properly label an input field for accessibility.",
    objectives: [
      {
        id: "html",
        text: "Create a `<label>` for a text input. The `for` attribute of the label should match the `id` of the input.",
      },
    ],
    answer: {
      html: '<label for="username">Username:</label><input type="text" id="username">',
    },
  },
  {
    id: "html-textarea",
    type: "html",
    title: "A Larger Text Box",
    description: "Create a multi-line text area for comments.",
    objectives: [{ id: "html", text: "Create a `<textarea>` element." }],
    answer: { html: "<textarea></textarea>" },
  },
  {
    id: "html-select",
    type: "html",
    title: "Dropdown Selection",
    description: "Create a dropdown menu with three options.",
    objectives: [
      {
        id: "html",
        text: "Create a `<select>` element with three `<option>` elements inside.",
      },
    ],
    answer: {
      html: "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
    },
  },
  {
    id: "html-form",
    type: "html",
    title: "Build a Simple Form",
    description: "Create a form with a text input and a submit button.",
    objectives: [
      {
        id: "html",
        text: 'Create a `<form>` containing an `<input type="text">` and a `<button type="submit">`.',
      },
    ],
    answer: {
      html: '<form><input type="text"><button type="submit">Submit</button></form>',
    },
  },
  {
    id: "html-table",
    type: "html",
    title: "Create a Simple Table",
    description: "Build a table with a header row and one data row.",
    objectives: [
      {
        id: "html",
        text: "Create a `<table>` with a `<thead>`, a `<tbody>`, one `<tr>` in each, and two cells (`<th>` or `<td>`) per row.",
      },
    ],
    answer: {
      html: "<table><thead><tr><th>Name</th><th>Age</th></tr></thead><tbody><tr><td>Saanvi</td><td>25</td></tr></tbody></table>",
    },
  },
  {
    id: "html-image-alt",
    type: "html",
    title: "Accessible Images",
    description: "Add alternative text to an image for screen readers.",
    objectives: [
      {
        id: "html",
        text: "Create an `<img>` tag with an `alt` attribute describing the image.",
      },
    ],
    answer: {
      html: '<img src="https://via.placeholder.com/100" alt="A placeholder image">',
    },
  },
  // --- More Form Elements ---
  {
    id: "html-radio",
    type: "html",
    title: "Radio Buttons",
    description:
      "Create a set of radio buttons where only one can be selected.",
    objectives: [
      {
        id: "html",
        text: 'Create two `<input type="radio">` elements with the same `name` attribute.',
      },
    ],
    answer: {
      html: '<input type="radio" name="choice"><input type="radio" name="choice">',
    },
  },
  {
    id: "html-checkbox",
    type: "html",
    title: "Checkbox Input",
    description: "Create a checkbox that can be toggled on or off.",
    objectives: [
      {
        id: "html",
        text: 'Create a single `<input type="checkbox">` element.',
      },
    ],
    answer: { html: '<input type="checkbox">' },
  },
  {
    id: "html-placeholder",
    type: "html",
    title: "Input Placeholder",
    description: "Add a helpful hint inside a text input.",
    objectives: [
      {
        id: "html",
        text: 'Create an `<input>` with a `placeholder` attribute set to "Enter your name...".',
      },
    ],
    answer: { html: '<input type="text" placeholder="Enter your name...">' },
  },
  // --- Media ---
  {
    id: "html-video",
    type: "html",
    title: "Embed a Video",
    description: "Add a video player to the page.",
    objectives: [
      {
        id: "html",
        text: "Create a `<video>` tag with a `src` attribute. Add the `controls` attribute to show the player controls.",
      },
    ],
    answer: { html: '<video src="movie.mp4" controls></video>' },
  },
  {
    id: -"html-audio",
    type: "html",
    title: "Embed Audio",
    description: "Add an audio player to the page.",
    objectives: [
      {
        id: "html",
        text: "Create an `<audio>` tag with a `src` attribute and the `controls` attribute.",
      },
    ],
    answer: { html: '<audio src="audio.mp3" controls></audio>' },
  },
  // --- Advanced Structure ---
  {
    id: "html-nav",
    type: "html",
    title: "Navigation Bar",
    description: "Create a semantic navigation section.",
    objectives: [
      {
        id: "html",
        text: "Create a `<nav>` element containing an unordered list `<ul>` of links `<a>`.",
      },
    ],
    answer: {
      html: '<nav><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li></ul></nav>',
    },
  },
  {
    id: "html-article",
    type: "html",
    title: "Article Content",
    description: "Use an `<article>` tag for self-contained content.",
    objectives: [
      {
        id: "html",
        text: "Wrap an `<h1>` and two `<p>` tags inside an `<article>` element.",
      },
    ],
    answer: {
      html: "<article><h1>My Trip</h1><p>It was great.</p><p>The end.</p></article>",
    },
  },
  {
    id: "html-comment",
    type: "html",
    title: "Leave a Comment",
    description:
      "Add a comment to your HTML code that is not visible on the page.",
    objectives: [{ id: "html", text: "Write an HTML comment." }],
    answer: { html: "<!-- This is a comment -->" },
  },

  //--CSS Challenges
  // --- Basics ---
  {
    id: "css-color",
    type: "css",
    title: "Color a Heading",
    description: "Change the text color of an element.",
    startingCode: { html: "<h1>Color Me</h1>" },
    objectives: [
      {
        id: "css",
        text: "Use CSS to make the `<h1>` element have the color `tomato`.",
      },
    ],
    answer: { css: "h1 { color: tomato; }" },
  },
  {
    id: "css-bg",
    type: "css",
    title: "Set a Background",
    description: "Change the background color of the page.",
    objectives: [
      {
        id: "css",
        text: "Use CSS to give the `<body>` a `background-color` of `lightblue`.",
      },
    ],
    answer: { css: "body { background-color: lightblue; }" },
  },
  {
    id: "css-fontsize",
    type: "css",
    title: "Adjust Font Size",
    description: "Make text larger.",
    startingCode: { html: "<p>Make me bigger!</p>" },
    objectives: [
      { id: "css", text: "Give the `<p>` element a `font-size` of `24px`." },
    ],
    answer: { css: "p { font-size: 24px; }" },
  },
  {
    id: "css-font-family",
    type: "css",
    title: "Change the Font",
    description: "Change the font of the entire page.",
    objectives: [
      { id: "css", text: "Give the `<body>` a `font-family` of `sans-serif`." },
    ],
    answer: { css: "body { font-family: sans-serif; }" },
  },
  {
    id: "css-text-align",
    type: "css",
    title: "Center Text",
    description: "Center the text inside a heading.",
    startingCode: { html: "<h1>Center Me</h1>" },
    objectives: [
      { id: "css", text: "Give the `<h1>` a `text-align` of `center`." },
    ],
    answer: { css: "h1 { text-align: center; }" },
  },
  // --- Box Model ---
  {
    id: "css-border",
    type: "css",
    title: "Add a Border",
    description: "Put a solid border around a div.",
    startingCode: { html: '<div id="box"></div>' },
    objectives: [
      {
        id: "css",
        text: "Give the element with the ID `box` a `border` of `2px solid black`.",
      },
    ],
    answer: { css: "#box { border: 2px solid black; }" },
  },
  {
    id: "css-dimensions",
    type: "css",
    title: "Set a Div's Size",
    description: "Control the width and height of a container.",
    startingCode: {
      html: '<div class="box"></div>',
      css: ".box { background-color: dodgerblue; }",
    },
    objectives: [
      {
        id: "css",
        text: "Give the element with the class `box` a `width` of `100px` and a `height` of `100px`.",
      },
    ],
    answer: { css: ".box { width: 100px; height: 100px; }" },
  },
  {
    id: "css-padding",
    type: "css",
    title: "Add Some Space Inside",
    description: "Use padding to give an element some breathing room.",
    startingCode: {
      html: '<div class="padded">I need space.</div>',
      css: ".padded { border: 1px solid white; }",
    },
    objectives: [
      { id: "css", text: "Give the `.padded` div a `padding` of `20px`." },
    ],
    answer: { css: ".padded { padding: 20px; }" },
  },
  {
    id: "css-margin",
    type: "css",
    title: "Add Some Space Outside",
    description: "Use margin to push an element away from others.",
    startingCode: {
      html: '<div class="box"></div><div class="box"></div>',
      css: ".box { width: 50px; height: 50px; background: orange; }",
    },
    objectives: [
      {
        id: "css",
        text: "Give the `.box` elements a `margin` of `10px` to space them apart.",
      },
    ],
    answer: { css: ".box { margin: 10px; }" },
  },
  // --- Selectors & Pseudo-classes ---
  {
    id: "css-class",
    type: "css",
    title: "Style a Class",
    description: "Use a class selector to style a specific element.",
    startingCode: {
      html: '<p class="highlight">Highlight me!</p><p>Not me.</p>',
    },
    objectives: [
      {
        id: "css",
        text: "Select the element with the class `highlight` and give it a `background-color` of `yellow`.",
      },
    ],
    answer: { css: ".highlight { background-color: yellow; }" },
  },
  {
    id: "css-hover",
    type: "css",
    title: "Interactive Hover",
    description: "Change a button's color when the mouse is over it.",
    startingCode: { html: "<button>Hover me</button>" },
    objectives: [
      {
        id: "css",
        text: "Use the `:hover` pseudo-class to change the button's `background-color` to `gold`.",
      },
    ],
    answer: { css: "button:hover { background-color: gold; }" },
  },
  {
    id: "css-descendant",
    type: "css",
    title: "Descendant Selector",
    description: "Style an element that is inside another element.",
    startingCode: {
      html: '<div class="container"><p>Style me!</p></div><p>Not me.</p>',
    },
    objectives: [
      {
        id: "css",
        text: "Select only the `<p>` that is inside the `.container` and make its color `red`.",
      },
    ],
    answer: { css: ".container p { color: red; }" },
  },
  // --- Layout ---
  {
    id: "css-display-inline-block",
    type: "css",
    title: "Side-by-Side",
    description: "Make two block elements sit next to each other.",
    startingCode: {
      html: '<div class="box">A</div><div class="box">B</div>',
      css: ".box { background: #50fa7b; padding: 10px; }",
    },
    objectives: [
      {
        id: "css",
        text: "Change the `display` property of the `.box` elements so they sit side-by-side.",
      },
    ],
    answer: { css: ".box { display: inline-block; }" },
  },
  {
    id: "css-flexbox-row",
    type: "css",
    title: "Layout with Flexbox",
    description: "Use flexbox to arrange items in a row.",
    startingCode: {
      html: '<div class="container"><div>1</div><div>2</div><div>3</div></div>',
      css: ".container div { padding: 10px; background: #bd93f9; }",
    },
    objectives: [
      {
        id: "css",
        text: "Make the `.container` a flex container to align its children in a row.",
      },
    ],
    answer: { css: ".container { display: flex; }" },
  },
  {
    id: "css-flexbox-center",
    type: "css",
    title: "Center with Flexbox",
    description: "Use flexbox to center an item inside a container.",
    startingCode: {
      html: '<div class="container"><div class="item">Center me</div></div>',
      css: ".container { border: 1px solid white; height: 150px; } .item { background: #ff79c6; padding: 10px; }",
    },
    objectives: [
      {
        id: "css",
        text: "Make the `.container` a flex container and use it to center the `.item` both vertically and horizontally.",
      },
    ],
    answer: {
      css: ".container { display: flex; justify-content: center; align-items: center; }",
    },
  },

  //--JS Challenges
  // --- Basics & DOM Interaction ---
  {
    id: "js-alert",
    type: "js",
    title: "Click Alert",
    description: "Show an alert message when a button is clicked.",
    startingCode: { html: '<button id="alertBtn">Show Alert</button>' },
    objectives: [
      {
        id: "js",
        text: 'Use JavaScript to show an `alert` with the message "Hello!" when the button with ID `alertBtn` is clicked.',
      },
    ],
    answer: {
      js: `document.getElementById('alertBtn').addEventListener('click', () => { alert('Hello!'); });`,
    },
  },
  {
    id: "js-consolelog",
    type: "js",
    title: "Log to the Console",
    description: "Print a message to the browser console.",
    objectives: [
      {
        id: "js",
        text: 'Write a line of JavaScript that logs the message "Learning is fun!" to the console.',
      },
    ],
    answer: { js: 'console.log("Learning is fun!");' },
  },
  {
    id: "js-textchange",
    type: "js",
    title: "Change Text Content",
    description: "Change the text inside an element with a click.",
    startingCode: { html: '<h2 id="changer">Initial Text</h2>' },
    objectives: [
      {
        id: "js",
        text: 'When the `<h2>` with ID `changer` is clicked, change its `textContent` to "Text Changed!".',
      },
    ],
    answer: {
      js: `document.getElementById('changer').addEventListener('click', (e) => { e.target.textContent = "Text Changed!"; });`,
    },
  },
  {
    id: "js-hide",
    type: "js",
    title: "Hide an Element",
    description: "Make an element disappear.",
    startingCode: { html: '<p id="vanish">Hide me!</p>' },
    objectives: [
      {
        id: "js",
        text: "When the paragraph with ID `vanish` is clicked, set its `style.display` to `none`.",
      },
    ],
    answer: {
      js: `document.getElementById('vanish').addEventListener('click', (e) => { e.target.style.display = 'none'; });`,
    },
  },
  {
    id: "js-show",
    type: "js",
    title: "Show an Element",
    description: "Make a hidden element appear.",
    startingCode: {
      html: '<p id="reveal" style="display: none;">Tada!</p><button id="showBtn">Show Me</button>',
    },
    objectives: [
      {
        id: "js",
        text: "When the button is clicked, change the `style.display` of the paragraph to `block`.",
      },
    ],
    answer: {
      js: `document.getElementById('showBtn').addEventListener('click', () => { document.getElementById('reveal').style.display = 'block'; });`,
    },
  },
  // --- Classes & Attributes ---
  {
    id: "js-toggleclass",
    type: "js",
    title: "Toggle a CSS Class",
    description: "Add or remove a CSS class to change styling.",
    startingCode: {
      html: '<div id="highlightDiv">Click to highlight</div>',
      css: ".highlight { background-color: yellow; color: black; }",
    },
    objectives: [
      {
        id: "js",
        text: 'When the `div` with ID `highlightDiv` is clicked, `toggle` the "highlight" class on it.',
      },
    ],
    answer: {
      js: `document.getElementById('highlightDiv').addEventListener('click', (e) => { e.target.classList.toggle('highlight'); });`,
    },
  },
  {
    id: "js-add-class",
    type: "js",
    title: "Add a CSS Class",
    description: "Add a class to an element to style it.",
    startingCode: {
      html: '<p id="styler">Style me on click</p>',
      css: ".styled { color: deeppink; font-weight: bold; }",
    },
    objectives: [
      {
        id: "js",
        text: 'When the paragraph is clicked, `add` the class "styled" to it.',
      },
    ],
    answer: {
      js: `document.getElementById('styler').addEventListener('click', (e) => { e.target.classList.add('styled'); });`,
    },
  },
  {
    id: "js-change-attribute",
    type: "js",
    title: "Change an Attribute",
    description: "Change the `src` attribute of an image with a button click.",
    startingCode: {
      html: '<img id="myImage" src="https://via.placeholder.com/150/0000FF"><button id="changeBtn">Change Image</button>',
    },
    objectives: [
      {
        id: "js",
        text: 'When the button is clicked, change the `src` of the image to "https://via.placeholder.com/150/FF0000".',
      },
    ],
    answer: {
      js: `document.getElementById('changeBtn').addEventListener('click', () => { document.getElementById('myImage').src = "https://via.placeholder.com/150/FF0000"; });`,
    },
  },
  // --- Creating Elements ---
  {
    id: "js-create-element",
    type: "js",
    title: "Create a New Element",
    description:
      "Use JavaScript to create a new element and add it to the page.",
    startingCode: { html: '<div id="container"></div>' },
    objectives: [
      {
        id: "js",
        text: 'Create a `<p>` element with the text "I was made with JS!" and append it to the `div` with the ID `container`.',
      },
    ],
    answer: {
      js: `const newP = document.createElement('p'); newP.textContent = "I was made with JS!"; document.getElementById('container').appendChild(newP);`,
    },
  },
  // --- Input & Variables ---
  {
    id: "js-variable",
    type: "js",
    title: "Declare a Variable",
    description: "Declare a variable and log its value.",
    objectives: [
      {
        id: "js",
        text: "Create a variable named `score` with a value of `100` and `console.log` it.",
      },
    ],
    answer: { js: "const score = 100; console.log(score);" },
  },
  {
    id: "js-get-input",
    type: "js",
    title: "Use Input Value",
    description: "Get the value from a text box and display it.",
    startingCode: {
      html: '<input id="nameInput" placeholder="Enter your name"><button id="greetBtn">Greet</button>',
    },
    objectives: [
      {
        id: "js",
        text: 'When the button is clicked, `alert` a message saying "Hello, " followed by the text from the input box.',
      },
    ],
    answer: {
      js: `document.getElementById('greetBtn').addEventListener('click', () => { const name = document.getElementById('nameInput').value; alert("Hello, " + name); });`,
    },
  },
  // --- Logic & Conditionals ---
  {
    id: "js-conditional",
    type: "js",
    title: "Simple Counter",
    description: "Increase a number when a button is clicked, but stop at 5.",
    startingCode: {
      html: '<p>Count: <span id="count">0</span></p><button id="incBtn">Increase</button>',
    },
    objectives: [
      {
        id: "js",
        text: "When the button is clicked, increase the number in the `span`. If the count is 5 or more, do not increase it further.",
      },
    ],
    answer: {
      js: `let count = 0; const countSpan = document.getElementById('count'); document.getElementById('incBtn').addEventListener('click', () => { if (count < 5) { count++; countSpan.textContent = count; } });`,
    },
  },
  {
    id: "js-if-else",
    type: "js",
    title: "Check a Value",
    description: "Check the value of an input and alert a different message.",
    startingCode: {
      html: '<input id="pw" type="password"><button id="checkBtn">Check</button>',
    },
    objectives: [
      {
        id: "js",
        text: 'When the button is clicked, check if the input value is "123". If it is, alert "Welcome!". If it is not, alert "Wrong password!".',
      },
    ],
    answer: {
      js: `document.getElementById('checkBtn').addEventListener('click', () => { const pw = document.getElementById('pw').value; if (pw === '123') { alert('Welcome!'); } else { alert('Wrong password!'); } });`,
    },
  },
  {
    id: "js-change-style",
    type: "js",
    title: "Change an Element's Style",
    description: "Directly change the CSS style of an element.",
    startingCode: {
      html: '<h3 id="colorChanger">Click me to change my color</h3>',
    },
    objectives: [
      {
        id: "js",
        text: 'When the `<h3>` is clicked, change its `style.color` property to `"magenta"`.',
      },
    ],
    answer: {
      js: `document.getElementById('colorChanger').addEventListener('click', (e) => { e.target.style.color = "magenta"; });`,
    },
  },
  {
    id: "js-inner-html",
    type: "js",
    title: "Add HTML Content",
    description: "Use `innerHTML` to add content with HTML tags.",
    startingCode: { html: '<div id="content"></div>' },
    objectives: [
      {
        id: "js",
        text: 'Set the `innerHTML` of the div to be `"<p>This is a <strong>bold</strong> statement.</p>"`.',
      },
    ],
    answer: {
      js: `document.getElementById('content').innerHTML = "<p>This is a <strong>bold</strong> statement.</p>";`,
    },
  },
  // --- PASTE THESE NEW CHALLENGES AT THE END OF THE cssChallenges ARRAY ---

  // --- Text & Font Styling ---
  {
    id: "css-text-decoration",
    type: "css",
    title: "Remove Underline",
    description: "Remove the default underline from a link.",
    startingCode: { html: '<a href="#">No Underline</a>' },
    objectives: [
      {
        id: "css",
        text: "Give the `<a>` element a `text-decoration` of `none`.",
      },
    ],
    answer: { css: "a { text-decoration: none; }" },
  },
  {
    id: "css-font-weight",
    type: "css",
    title: "Bold Text",
    description: "Make a paragraph of text bold.",
    startingCode: { html: '<p class="bold">Make me bold.</p>' },
    objectives: [
      {
        id: "css",
        text: "Give the `.bold` element a `font-weight` of `bold`.",
      },
    ],
    answer: { css: ".bold { font-weight: bold; }" },
  },
  {
    id: "css-line-height",
    type: "css",
    title: "Adjust Line Spacing",
    description: "Increase the space between lines of text.",
    startingCode: {
      html: "<p>This paragraph needs<br>more vertical space<br>between its lines.</p>",
    },
    objectives: [
      { id: "css", text: "Give the `<p>` element a `line-height` of `1.5`." },
    ],
    answer: { css: "p { line-height: 1.5; }" },
  },
  // --- More Selectors ---
  {
    id: "css-attribute-selector",
    type: "css",
    title: "Attribute Selector",
    description: "Style an element based on one of its attributes.",
    startingCode: {
      html: '<a href="https://google.com">External</a><a href="/internal">Internal</a>',
    },
    objectives: [
      {
        id: "css",
        text: 'Use an attribute selector to target only the link that has an `href` attribute equal to "https://google.com" and make it `red`.',
      },
    ],
    answer: { css: 'a[href="https://google.com"] { color: red; }' },
  },
  {
    id: "css-nth-child",
    type: "css",
    title: "Style Every Other Item",
    description: "Style the even-numbered items in a list differently.",
    startingCode: {
      html: "<ul><li>One</li><li>Two</li><li>Three</li><li>Four</li></ul>",
    },
    objectives: [
      {
        id: "css",
        text: "Use the `:nth-child(even)` pseudo-class to give the even `<li>` elements a `background-color` of `#44475a`.",
      },
    ],
    answer: { css: "li:nth-child(even) { background-color: #44475a; }" },
  },
  // --- Positioning & Layout ---
  {
    id: "css-position-relative",
    type: "css",
    title: "Relative Positioning",
    description: "Move an element slightly from its normal position.",
    startingCode: {
      html: '<div class="box"></div>',
      css: ".box { width: 50px; height: 50px; background: hotpink; }",
    },
    objectives: [
      {
        id: "css",
        text: "Give the `.box` a `position` of `relative` and move it `10px` from the `top` and `10px` from the `left`.",
      },
    ],
    answer: { css: ".box { position: relative; top: 10px; left: 10px; }" },
  },
  {
    id: "css-position-absolute",
    type: "css",
    title: "Absolute Positioning",
    description: "Position an element relative to its parent container.",
    startingCode: {
      html: '<div class="parent"><div class="child"></div></div>',
      css: ".parent { position: relative; width: 100px; height: 100px; border: 1px solid white; } .child { width: 20px; height: 20px; background: cyan; }",
    },
    objectives: [
      {
        id: "css",
        text: "Give the `.child` a `position` of `absolute` and place it in the `bottom` `right` corner.",
      },
    ],
    answer: { css: ".child { position: absolute; bottom: 0; right: 0; }" },
  },
  {
    id: "css-z-index",
    type: "css",
    title: "Stacking Order",
    description: "Make one element appear on top of another.",
    startingCode: {
      html: '<div class="red-box"></div><div class="blue-box"></div>',
      css: ".red-box { position: absolute; width: 50px; height: 50px; background: red; } .blue-box { position: absolute; top: 25px; left: 25px; width: 50px; height: 50px; background: blue; }",
    },
    objectives: [
      {
        id: "css",
        text: "Use `z-index` to make the red box appear on top of the blue box.",
      },
    ],
    answer: { css: ".red-box { z-index: 1; }" },
  },
  // --- Transitions & Fun ---
  {
    id: "css-transition",
    type: "css",
    title: "Smooth Transition",
    description: "Make a color change happen smoothly over time.",
    startingCode: {
      html: '<div class="box"></div>',
      css: ".box { width: 50px; height: 50px; background: #ff79c6; } .box:hover { background: #50fa7b; }",
    },
    objectives: [
      {
        id: "css",
        text: "Add a `transition` property to the `.box` to make the `background-color` change take `0.5s`.",
      },
    ],
    answer: { css: ".box { transition: background-color 0.5s; }" },
  },
  {
    id: "css-transform",
    type: "css",
    title: "Rotate Element",
    description: "Rotate an element on hover.",
    startingCode: {
      html: '<div class="box">Rotate</div>',
      css: ".box { width: 60px; height: 60px; background: #ffb86c; transition: transform 0.5s; }",
    },
    objectives: [
      {
        id: "css",
        text: "Use the `transform` property to `rotate` the `.box` by `45deg` when you hover over it.",
      },
    ],
    answer: { css: ".box:hover { transform: rotate(45deg); }" },
  },
  // --- PASTE THESE NEW CHALLENGES AT THE END OF THE jsChallenges ARRAY ---

  // --- Arrays ---
  {
    id: "js-array-create",
    type: "js",
    title: "Create an Array",
    description: "Create an array of your three favorite colors.",
    objectives: [
      {
        id: "js",
        text: "Declare a variable named `colors` and assign it an array containing three color strings. Then log it to the console.",
      },
    ],
    answer: {
      js: `const colors = ['blue', 'green', 'purple']; console.log(colors);`,
    },
  },
  {
    id: "js-array-access",
    type: "js",
    title: "Access an Array Item",
    description: "Get the second item from an array.",
    startingCode: { js: `const fruits = ['apple', 'banana', 'cherry'];` },
    objectives: [
      {
        id: "js",
        text: 'Using the `fruits` array, `console.log` the second item ("banana").',
      },
    ],
    answer: { js: `console.log(fruits[1]);` },
  },
  {
    id: "js-array-loop",
    type: "js",
    title: "Loop Through an Array",
    description: "Log every item in an array to the console.",
    startingCode: { js: `const items = ['one', 'two', 'three'];` },
    objectives: [
      {
        id: "js",
        text: "Use a `forEach` loop to log each item from the `items` array to the console.",
      },
    ],
    answer: { js: `items.forEach(item => { console.log(item); });` },
  },
  // --- Functions ---
  {
    id: "js-function-declare",
    type: "js",
    title: "Declare a Function",
    description: "Create a function that alerts a greeting.",
    objectives: [
      {
        id: "js",
        text: 'Declare a function named `greet` that shows an `alert` with the message "Hello there!".',
      },
    ],
    answer: { js: `function greet() { alert('Hello there!'); }` },
  },
  {
    id: "js-function-call",
    type: "js",
    title: "Call a Function",
    description: "Call a pre-written function when a button is clicked.",
    startingCode: {
      html: '<button id="caller">Call Function</button>',
      js: `function sayHi() { alert('Hi!'); }`,
    },
    objectives: [
      {
        id: "js",
        text: "When the button with the ID `caller` is clicked, call the `sayHi` function.",
      },
    ],
    answer: {
      js: `document.getElementById('caller').addEventListener('click', sayHi);`,
    },
  },
  {
    id: "js-function-parameter",
    type: "js",
    title: "Function with a Parameter",
    description: "Create a function that can greet anyone.",
    objectives: [
      {
        id: "js",
        text: 'Create a function `greet(name)` that takes a name as a parameter and alerts "Hello, " plus the name.',
      },
    ],
    answer: { js: `function greet(name) { alert("Hello, " + name); }` },
  },
  // --- Objects ---
  {
    id: "js-object-create",
    type: "js",
    title: "Create an Object",
    description: "Create a simple JavaScript object.",
    objectives: [
      {
        id: "js",
        text: 'Create an object named `user` with two properties: `name` set to "Saanvi" and `score` set to 1000.',
      },
    ],
    answer: { js: `const user = { name: 'Saanvi', score: 1000 };` },
  },
  {
    id: "js-object-access",
    type: "js",
    title: "Access Object Property",
    description: "Get a value from a property in an object.",
    startingCode: { js: `const player = { username: 'Pixel', level: 5 };` },
    objectives: [
      {
        id: "js",
        text: "Using the `player` object, `console.log` the value of the `username` property.",
      },
    ],
    answer: { js: `console.log(player.username);` },
  },
  // --- More DOM Events ---
  {
    id: "js-double-click",
    type: "js",
    title: "Double Click Event",
    description: "Change an element's text on a double click.",
    startingCode: { html: '<div id="dbl">Double-click me!</div>' },
    objectives: [
      {
        id: "js",
        text: "Add an event listener to the `div` that listens for a `dblclick` event and changes its `textContent`.",
      },
    ],
    answer: {
      js: `document.getElementById('dbl').addEventListener('dblclick', (e) => { e.target.textContent = 'You did it!'; });`,
    },
  },
  {
    id: "js-key-press",
    type: "js",
    title: "Keyboard Event",
    description: "Log a message when a key is pressed in an input field.",
    startingCode: {
      html: '<input id="key-input" placeholder="Type here...">',
      js: ``,
    },
    objectives: [
      {
        id: "js",
        text: 'Add a `keydown` event listener to the input that logs "A key was pressed!" to the console.',
      },
    ],
    answer: {
      js: `document.getElementById('key-input').addEventListener('keydown', () => { console.log('A key was pressed!'); });`,
    },
  },
];
