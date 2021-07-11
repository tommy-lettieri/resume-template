# resume-template
This project is going to be an npm module that builds a resume website and resume pdf. You give it the data and everything else is within the module.

# See the website without storyboard (through storyboard)
http://localhost:3005/iframe.html?id=api-pages-website--default-story&viewMode=story&args=

## Caveats:
Certain default styles asre different (for example the font serif instead of san serif)

# Goals
1. Create React contexts for fetching json files from public folder
2. Create a React context and a gitignored private json file to obscure information like phone number if you don't want it on the internet
3. Create a CLI
* This CLI will be able to initialize a resume project by creating template json objects for consumers top fill in
* The CLI will use AJV to validate that the json files are valid (it would be cool if a form could be created from the json schema)
4. Create a github action that builds the project and commits it (I would like that commit on a seperate project if possible)
5. Setup Github pages to point to that built project
6. Create another page that will be the resume printout
7. Have a QR code in the top right corner that links to the website