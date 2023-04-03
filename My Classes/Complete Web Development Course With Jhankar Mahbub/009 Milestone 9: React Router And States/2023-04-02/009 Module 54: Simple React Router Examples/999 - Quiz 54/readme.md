1. What does a 404 mean to a web developer? (google it)
2. Why will you need a router for your app?
3. How will you import a createBrowserRouter from  React Router Dom?
4. Which props will you set on the RouterProvider?
```
<RouterProvider ____?___ = {router}/>
```
5. If you hit  http://localhost:3000/abut which component will you see? 
```
const router = createBrowserRouter([
 	{ path: 'about', element: <About></About> },
  	{ path: '*', element: <NotFound/> }
]);  
```
6. Which is true about <Outlet/>?
7. How will you set a dynamic part (path parameter) named id, under the user route?
```
{ path: “ ? “, element: <UserDetails/> }
```
8. Which router hook provides the value returned from your route loader?
9. Which of the following hook of react-router-dom will allow you to navigate programmatically to a different route?
10. What will you pass to the loader async function to parse the dynamic part of the current URL?
```
const router = createBrowserRouter([
  { path: 'about', element: <About></About> },
  { path:'/product/:productId',loader: async (____?____) =>{return fetch(url)},element:<ProductDetails/>
    },
 ])
```

