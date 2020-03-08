# Team-Profile-Generator

# Description
This application allows uses the node command line to prompt users for info about a team consisting of managers, engineers, and interns and then renders the info into an html page containing the info.
It begins with a simply begin prompt as seen below:

![Starting Prompt](/screenshots/appstart.png) 

If the user picks no then the program will stop and exit but if they pick yes then the program will begin and prompt them to pick a type of employee to create to add to the team:

![Choose Employee](/screenshots/Pickemployeetype.png)

Each employee has a set of shared information: Name, id, and email and then each has 1 unique field. If they choose manager they will be prompted to select those as well as office number as shown below:

![Manager Prompt](/screenshots/managerprompt.png)

If they pick engineer, then they will have to enter the 3 shared as well as a github username as shown below:

![Engineer Prompt](/screenshots/engineerprompt.png)

Finally, if they pick intern, then again they will have the 3 shared as well as a school, as shown below:

![Intern Prompt](/screenshots/internprompt.png)

Once they have entered the required fields for whichever of the three options they chose they will br prompted whether or not they would like to add another employee, as shown below.

![Add another](/screenshots/appemployeeprompt.png)

If they chose yes then they will return to the prompt for employee type and can enter info. These steps can be done as many times as desired until the whole team has been created. Once they are finished and select no to adding another employee, the info will be rendered into an html file and be placed into the output folder and look something like this:

![Team html](/screenshots/generatedteam.png)

This project was created to help understand how to use and interact with classes in javascript as well as run tests on code created. Dealing with inheritance between the classes and how to structure the data was the biggest challenge.

# Installation
To run this program you will need to have node installed, and then run node package manager in the cli to install the required packages.

# Usage
To use this application, simply have all the required installations, then type node app.js into the cli. Then respond to the prompted input.

Git - used for all version and used to create the respository 

VS Code - used to create the application 

Node.js - used to manage packages and to run the program.
