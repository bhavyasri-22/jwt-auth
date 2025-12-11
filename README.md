# JWT Auth Project

This is a small Node.js project I made to learn how basic authentication works using JWT.  
I followed the assignment requirements and kept everything very simple so I can understand what is happening.

This project does three things:
1. Register a user
2. Login a user and give a token
3. Check the token using another route

I used only an array to store users because the assignment said not to use any database.  
So every time the server restarts, all users are gone (for practice).


## What I Learned

- How to create routes in Express
- What is bcrypt and how password hashing works
- What is JWT and how tokens are generated
- How `.env` file stores secret keys
- How to send data through the URL using query parameters (like `?email=...&password=...`)




## How to Run This Project

### 1. Install packages
When I ran this project for the first time, I installed these packages: npm install express bcryptjs jsonwebtoken dotenv

### 2. Create `.env` file  
My `.env` file contains: JWT_SECRET=mySecretKeyIs2007

I learned that this secret key is used to sign and verify tokens.

### 3. Start the server -node server.js
If everything works, I see: Server running on port 3000





## How to Test 

### ✔ 1. Register
I opened this in my browser: http://localhost:3000/register?email=test@gmail.com&password=123

If the user is new, it shows: Registered successfully

If the user already exists: User already exists

### ✔ 2. Login
Then I logged in: http://localhost:3000/login?email=test@gmail.com&password=123

This returns a long token text.  

I copied that token.

### ✔ 3. Invoke (Protected Route)
I pasted the token like this: http://localhost:3000/invoke?token=PASTE_YOUR_TOKEN_HERE

If the token is correct, I get: Function invoked successfully

If the token is wrong or expired, I get: Access denied





## Notes

- This project is only for learning, so it does not save data permanently.

- If I restart the server, users disappear because everything is stored in an array.
  
- The token expires in 10 minutes (as required in the assignment).


## Final Thoughts

This project helped me understand how authentication works in the simplest way possible.  

Now I have a basic idea of how real login systems work behind the scenes.















