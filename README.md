
# HomeAppFE 🚀  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  

## 📌 Getting Started  
Follow these steps to set up and run the project locally.  

### ✅ Prerequisites  
Ensure you have the following installed on your system:  
in .env file of frontend code make following changes :-
```
REACT_APP_GROCERY_URL=http://34.69.126.52:3000/
REACT_APP_GROCERY_URL=http://groceryappserverIP:portonwhichgroceryappishosted/
REACT_APP_TODOS_URL=http://34.69.126.52:3001/
REACT_APP_GROCERY_URL=http://todosappserverIP:portonwhichtodosappishosted/
REACT_APP_ORDERS_URL=http://34.69.126.52:3002/
```
- **[Node.js](https://nodejs.org/)** (LTS version recommended)  
- **npm** (Comes with Node.js)  
### install node js 
```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```



### 📥 Installation 
1. **Clone the repository:**  
   ```sh
   git clone https://github.com/AnupDudhe/homeapp.git    
   cd homeapp
   npm install
   npm install dotenv
   npm start
### To build your frontend use following comman
```
   npm run build //to build you fe
```
### lets get our frontend homeapp production grade ready on server
```
npm install
npm run build
pm2 list
pm2 serve ./build 3000 --name "home-frontend" --spa
pm2 serve ./build 3002 --name "home-frontend" --spa #if you have 3000/or any other  port is reserved with 3000 port
```

### Final homeapp deployment ref

<img width="955" alt="image" src="https://github.com/user-attachments/assets/7ecf6a12-6804-425c-b155-63c9563d3f5d" />


---------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) 

## Contributions

- **Source Code Development**: The core functionality, application logic, and coding have been designed and implemented by Anup Dudhe.
- **Infrastructure Setup**: Infrastructure components, such as server configurations, cloud services, and network setups, have been established and managed by Anup Dudhe.
- **Deployment**: The deployment process, including CI/CD pipeline setup and environment configuration, was executed by Anup Dudhe to ensure seamless application deployment.

## Developer Information

- **Anup Dudhe**  
  Software and Infrastructure Consultant  
  CodeCloud Systems  
  www.linkedin.com/in/anup-dudhe-3670331b1
