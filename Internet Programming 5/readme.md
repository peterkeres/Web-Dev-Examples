# Assignment 5
> Due: Fri, November 9 (before 10 pm)

### Part A Adding Multimedia:
Complete the web case study Adding Multimedia on pp. 516-517. Copy all your files from your JavaJam7 folder (Assignment 4) to a new folder JavaJam8. You can download the audio files you need from the class site COURSE TOOLS AND RESOURCES > Student Files > Chapter 11. Download Chapter 11.zip file and unzip it. The audio files you need for this assignment are located in chapter 11/casestudystarters/ folder - melanie.mp3, melanie.ogg, greg.mp3, and greg.ogg. Complete Tasks 1, 2, and 3 by modifying the javajam.css style sheet and configuring the music.html page to play audio files.

#### Follow the instructions below to complete the following additional task: Add Google Map.

Add a new link Location to the Home page (index.html) that opens a Google map with JavaJam Coffee Shop Location. Set the location pointer to the Center for Commerce and Technology building at CSU.

The value of the href attribute should be the URL link to a Google map you have to create.
Open https://www.google.com/maps/ > in the Search Google Maps enter an address - 4225 University Avenue, Columbus GA >; point with the mouse to the Center for Commerce and Technology Building > right click > What's here > click on the Center for Commerce and Technology link from the Street View textbox > copy the long URL of the map from the browser address bar > open a new browser window and go to https://tiny.url/ > Shorten the long URL > press Ctrl-C to copy the shorten URL > go to the new link created in the index.html page and paste it as a value of the href attribute > save the index.html page and open it under a browser to test the Location link.

### Part B Adding JavaScript:

Copy all your files from your JavaJam 8 folder to a new folder JavaJam 9 to work on this part of the assignment. Complete the web case study Adding JavaScript on pp. 620-622. With Tasks 2 and 3, follow only Option 1: Using JavaScript. For Task 2, Option 1, add a JavaScript statement that prints the current date on a new line below the last modified date. For Task 3, add an onmouseover event to the melanie.jpg link that displays the alert message: 'Starts at 5 p.m.', and another onmouseover event to the greg.jpg link that uses a confirm box to display: 'Starts at 8 p.m.'.

#### Submission:
Zip your JavaJam 9 folder (right-click on the folder > Send to > Compressed (zipped) folder to JavaJam9_<your initials>.zip file. Submit your zip file in the Assignment 5 dropbox in CougarView.

### Part C JavaScript Form Calculations:
Design and implement a Web page fishing.html that contains a form with two price textboxes, two quantity select lists, a Calculate your Order button and a Total textbox. Create a folder Assignment5C_<your initials> for this part of the assignment.

Develop an external style sheet fishing.css in the Assignment 5C folder to configure style rules for the form. Use a table layout or your own layout to position the form elements. Select appropriate fonts, color fonts, page and form backgrounds.

The first textbox has a fixed value of "7.99" and the second one, "2.55". The select lists have four options: 0 (default), 1, 2, and 3. Write a JavaScript onClick event handler CalcTotal() that calculates the total of your order and displays the total value in the Total textbox. The total is the sum of the price times the quantity for both products plus 7.5% tax. Hint. Parse the values of the form fields (with ParseInt() and parseFloat()) and then use calculations. Use toFixed(2) to round the total and display it with two positions after the decimal point. Below you can see an example of a form with quantities selected, 1 and 2, and the total calculated, 14.07.

#### Submission:
Zip your Assignment 5C folder (with fishing.html and fishing.css files) and submit it in the Assignment 5 dropbox in CougarView class site.
