# Assignment 6
> Due: Before 9:59 pm, Fri, November 23

### Part A - Array of Images with JavaScript HTML DOM:
Copy all your files from your JavaJam9 folder (Assignment 5 Part B) to a new folder JavaJam11. Download the coffeeImages.zip file from the link under Assignment 6 folder and unzip it in the same folder; there should be six new jpg coffee images.

Modify the menu.html page adding a coffee image, price and a button Next. Develop JavaScript code when you click on the Next button a new coffee image and its price are displayed.

Modify the menu.html **page in the following way:**

- add four new elements (table rows) to the coffee menu, with description of the coffee taken from the coffee images;
- in the navigation area add a coffee image, price and a button Next.
- Develop a JavaScript script defining two arrays - an array of prices and an array of pictures, and a counter with an initial value of 0. Implement a JavaScript function initialize() that assigns six image objects with height 215 and width of 190 to the first six elements of the pictures array and assigns the image names of the coffee images to the src array attribute. Implement a second JavaScript function upDate() that increments a counter, checks whether the counter is greater than 5; if it is true, assigns 0 to the counter and using the current value of the counter assigns a new value for the src attribute of the <img> tag and a new value for the innerHTML property of the <p> tag.

Test your menu.html page. When you click on the Next button, a new coffee image and price should be displayed. See below a snapshot of the menu.html Web page.

#### Submission:
Zip your JavaJam11 folder (all files) as Assignment6A_<your initials>, and submit it in the Assignment 6 dropbox in CougarView.

### Part B jQuery Slide:
Create a new folder JavaJam12. Copy all files from your JavaJam9 folder (Assignment 5 Part B) to the new JavaJam12 folder. Copy the six coffee images from JavaJam11 folder to JavaJam12 folder.

Below the footer in menu.html, create a new <div> with id="panel" and insert in the <div> a table with two rows and three columns. In the table cells put the coffee images with their price. In javajam.css add CSS rules to configure the <div> with id="panel". The <div> id="panel" has to be hidden (display: none;).

Develop a jQuery script that allows clicking on the menu.html Web page to display the panel with
the coffee images, and clicking again to hide it (see screenshots below). You can use the jQuery
click() and slideToggle() methods to implement the script.

#### Submission:
Zip your JavaJam12 folder (all files) as Assignment6B_<your initials>, and submit it in the Assignment 6 dropbox in CougarView.
