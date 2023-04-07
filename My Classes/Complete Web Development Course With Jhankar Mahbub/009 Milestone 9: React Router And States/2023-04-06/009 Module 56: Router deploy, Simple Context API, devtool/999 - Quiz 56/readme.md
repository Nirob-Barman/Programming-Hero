1. Fill in the blank.
```
{
  element: <Hero />,
  path: "heroes/:heroId",
  loader: async ({ params }) => {
   return fetch(
    `/fake/api/heroes/${___?____}`,
   );
  }
```
2. What will be the output?
```
const data = [ { name: "hero", id: 1221 }, { name: "Karim", id: 1222 }, { name: "Rahim", id: 1223 } ];
const result = data.find(person => person.id === "1221");
console.log(result);
```
3. Which one is not true?
4. If I want to render < User /> when the user is true what should I write?
```
user  ____?____ < User />
```
5. What do you think which one will be rendered to the UI?
```
const admin = false;
{ admin ? <h1>Admin</h1> : <User/> }
```
6. How do you declare the context API?
7. Fill in the blank with the appropriate word.
```
<CountContext ___?___ value = {[count, setCount]}>
```
8. In which way do we pass props to two sibling components?
9. Which hook do you want to use for access context?
10. Which of the following content should be inside _redirects file to solve page not found issue for react apps in netlify?


