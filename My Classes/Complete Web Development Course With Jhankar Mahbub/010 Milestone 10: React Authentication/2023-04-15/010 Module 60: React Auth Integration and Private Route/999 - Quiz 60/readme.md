1. Which one is not true?
2. What is wrong with this code? (see documentation)
```
  const auth = getAuth;
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
 .then((result) => {
     const user = result.user;
  })
```
3. Which one is not true?
4. what is the proper name of the operator to write an if-else in one line using the question mark (?) and a colon(:) ?
5. Firebase updateProfile method receives ________ as an argument. (see documentation)
```
const auth = getAuth(app);
     const provider = new GoogleAuthProvider();
updateProfile(__?__,{displayName:’Jane’,photoURL: ‘https://example.com/jane-q-user/profile.jpg’})
 .then((result) => {
         
        })
```
6. Sign Out receives ________ as an argument. (see documentation)
```
signOut(__?__).then(() => {
     // Sign-out successful.
    }).catch((error) => {
    // An error happened.
         });
```
7. Which method will you call if you want Github Sign In?(see documentation)
```
   const provider = _______?_______
```
8. Which is true about the Context API?
9. What will be the value of the rest?
```
const student = { name : “Fakibaaz”, job: “Practice Kom Kora” , address: “janina” }
     const {address , … rest } = student
```
10. Suppose you have a Component name called AuthContext that receives children as props . What is the correct way to show it?
