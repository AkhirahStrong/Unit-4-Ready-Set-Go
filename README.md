# Unit-4-Ready-Set-Go

Ready, Set, Action!

Skills: DOM

Start with this HTML…
<h1>Welcome _______</h1>
<p>
    <label for="name">Your name: </label>
    <input id="name" placeholder="Enter your name" />

    <button onclick="main()">Action!!!</button>
</p>
<p id="hide-me">I will be hidden.</p>
<p id="show-me" style="display: none;">I will be shown.</p>
<p id="grow-me">I will grow.</p>
<p id="shrink-me" class="big">I will shrink.</p>
<p>
    A link to <a class="link" href="broken-link">nowhere</a>.
</p>

<ol>
    <li>Document</li>
    <li>Object</li>
    <li>Model</li>
</ol>

<style>
    .big {
        font-size: 300%;
    }
    p {
        transition: all 400ms;
    }
    #hide-me, #show-me {
        border: 4px solid crimson;
        border-radius: 8px;
        padding: 4px 8px;
        width: 10em;
    }
    #show-me {
        border-color: green;
        margin-left: 11em;
    }
</style>

Create and link a JavaScript file. Create a function named “main”. The HTML is already set up to call this function when the “Action!!!” button is clicked.

Within the main function:
Add the "big" class to the "grow-me" paragraph.
Remove the "big" class from the "shrink-me" paragraph.
Find all the <li>s and log their text content to the console.
Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
Set the "display" CSS property of the "hide-me" paragraph to "none".
Set the "display" CSS property of the "show-me" paragraph to "block".
Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!".

Test it by clicking the Action!!! button.
