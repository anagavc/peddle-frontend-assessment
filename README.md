# Peddle-frontend-assessment task
This is a coming soon landing page built using the React library for an afilliate tracking software solution company called Metricks.

## Libraries used
- The styling was done using the Tailwind CSS library because of its low build size
- The form validation for the contact section and the landing page's form was handled with the react-hook-form library
- Animations across the pages was achieved with the Animate on Scroll library
- The axios library was used to fetch the data from the github link and the infinite scroll for the data fetched was done using the react-infinite-scroll component


## Folder Structure
- The components folder contains three folders which are the Layout, Navigation and UI folders and as their names imply, they handle every component that corresponds with their name
- There is an images folder which contains the images used in the application
- The pages folder contains all the respective pages that can be accessed in the application such as the Landing, About, Pivacy Policy and Terms pages
- The utility folder contains the ScrollToTop component which enables users to be automatically scrolled back to the top when they navigate to the another page as React doesn't come shipped with such ability and it also contains the mock News items array used in the Blog page component


## API's used
-The github search API used for fetching all the most starred repositiories from the past thirty days

## Steps on running the application

- Make sure you have Node.js installed,open the client folder in your code editor and then proceed to execute this command in the terminal to install all the dependencies
```bash
  npm i
```
- Start the application after the dependencies have been installed by running 
```bash
  npm start
```

## Usage/Examples

`A Landing page for an affiliate marketing solution`
## Screenshots
`The Landing Page`
![landingpage](https://user-images.githubusercontent.com/84836053/179485551-7a82eeec-162d-4515-ba7f-4c9b2f877841.png)


## Improvements
- I will add a filter to list the top repositories based on the type of language used in the guthub page component

## Demo

`The link to the live website:`

https://peddle-assessment.netlify.app/

