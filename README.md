# API Marvel

This project was generated using Create React App.

## Running the Project

To run the project, clone the repository and execute the following command to install the project's dependencies:
### `npm install`

After installing the dependencies, navigate to the root directory and run:
### `npm start`

After compiling, it will open your default browser with a tab running the app in development mode on `http://localhost:3000`. Development works with live loading, meaning that any changes in the code will be applied right after the file is saved.

## About the Code

This React project was written using TypeScript and SASS.

Data comes from [Marvel API](https://developer.marvel.com/), where user should create an account and use their own public and private keys to fetch data from API.

When the user opens the website for the first time, they will be redirected to authentication page, where they should submit your public and private keys in order to use the API. These info are encrypted in Md5 and saved as cookies using *universal-cookie*, so the user doesn't need to fill them every time the page is updated.

Navbar provides navigation through three lists pages (Characters, Comics, and Creators) and authentication page, in case the user wants to change the API keys. It also contains a toggle to change between Dark and Light colors, which uses the user system preferences and keep their preferences when the toggle is changed.

Listing pages initially brings limited results due to API limitation, but it loads more once the user reachs the end. This was made using Infinite Scroll.

Search bar lets user filter items through results loaded. Ideally, it should filter through all items in database, but this wasn't achieved due to API limited results on requisition. This could also be done using the API "nameStartsWith" parameter, but, as the name says, it only filters by the string start. Also, it makes a new requisition to API every time a character is typed, which could make user reach their daily limit (2000 requisitions) faster.

When an item is clicked, a [Material UI](https://mui.com/material-ui/) Modal is open to show more details about it.