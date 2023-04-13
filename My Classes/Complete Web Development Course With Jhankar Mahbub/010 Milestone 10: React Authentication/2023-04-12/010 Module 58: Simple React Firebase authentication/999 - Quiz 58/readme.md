1. What is Authentication?
2. What is Google analytics? Why should you use it? (google it)
3. Which command is used for install firebase?
4. How to make GoogleProvider ?
5. What is true about firebase config?
6. How would you initialize a firebase app with firebase config?
```
_____?___(firebaseConfig);
```
7. import { signInWithPopup } from   ____? _____
8. signInWithPopup( ) Method receives _____, ____ as arguments.
9. How will you access the name of the logged-in person information after successful login?
```
signInWithPopup( auth , provider)
 .then(res => {
const { ___?____ } = res.user; 
 }
```
10. Now tell me which button will be visible in UI?
```
const [loggedInUser,setLoggedInUser]=useState(true);

   {loggedInUser? <button>LogOut</button>
   :
   <button>Login</button>
   }
```
