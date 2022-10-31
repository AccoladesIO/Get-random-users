# Get-random-users
 In this section of Accolades' codes, I'd be documenting my steps taken to make and deploy my get random users using Randomuser.me api
 
 ## Fetch user
 Users can be fetched using `Axios` from react-library or using `async-await`. After fetching users, `useEffect` then mounts the components to be rendered on the screen.
 The api provides up to 5000 user (feel free to explore their documentation here https://randomuser.me/documentation)
 
 ## Pagination
 I dynamically got the amount of pages to be expected via the amount of users displayed. This method helps for reuseability of code.
  
 ## View live demo
 View live demo at https://accoladesio-gru.vercel.app/
 
 ## Cloning?
 You can also clone this project using after forking into your repository using git clone in your machine terminal
 
 and proceed development using npm run dev.
