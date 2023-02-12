# LendSqr Assessment Project

This project was developed as a solution to the lendsqr assessment which commenced on 7th of February.
The project involves creating a typescript react app with scss.

## Starting the Application

After cloning the project, 
`cd` to the project directory.
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

This project also uses `react-router-dom` version 6 as a dependency.
You can install it with
`npm install react-router-dom@latest`

### App Structure

The entrypoint of the app is index.tsx which load app.tsx first.
All major routes are specified in App.tsx.

The algorithm uses local storage to store if the user has been authenticated, else it would redirect to the login page.

The type of data received from the api is defined in models.tsx as User.
Api calls are based on the loaded component.
Thus, the Dashboard component loads the /users endpoint,
the UserSummary component loads the user/:id endpoint

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Contact Author

Email: sundayprime@gmail.com
Github: sunday0prime
