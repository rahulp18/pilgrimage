<h1>How to start Server</h1>
<b>Step-1</b>: <p>npm i</p>
<b>Step-2</b>: <p>
npm start to start the server
</p>
<h1>All about apis</h1>
<ul>
 <h1> User authentication </h1>
<li>(post) localhost:5000/api/users/google <b> (Sign Up/ register user)</b> </li>
<li>(post) localhost:5000/api/users/sigup <b> (Sign Up/ register user)</b> </li>
<li>(post) localhost:5000/api/users/sigin<b> (Login) </b> </li>
<li>(post) localhost:5000/api/users/forgetpassword <b> (Forget Password) </b> </li>
<li> (put) localhost:5000/api/users/resetpassword/:resetToken <b> (Reset Password)</b> </li>
</ul>


 <ul>
 <h1> Users api </h1>
<li>(get method) localhost:5000/api/users/ <b> (get all user)</b> </li>
<li>(get method) localhost:5000/api/users/:id<b> (get single user ) </b> </li>
<li> (put) localhost:5000/api/users/:id <b> (Update User) </b> </li>
<li>(del) localhost:5000/api/users/:id <b> (Delete User)</b> </li>
<li>(put) localhost:5000/api/users/like/:postId <b> (Like Post)</b> </li>
<li>(put) localhost:5000/api/users/dislike/:postId <b> (DisLike Post)</b> </li>
</ul>
 <ul>
 <h1> Posts api </h1>
<li>(post method) localhost:5000/api/posts/ <b> (create  post)</b> </li>
<li>(get method) localhost:5000/api/posts/ <b> (get all posts)</b> </li>
<li>(get method) localhost:5000/api/posts/:postId<b> (get single post ) </b> </li>
<li> (put) localhost:5000/api/posts/:postId <b> (Update post) </b> </li>
<li>(del) localhost:5000/api/posts/:postId <b> (Delete Post)</b> </li>
<li>(get) localhost:5000/api/posts/search <b> (Search Post)</b> </li>
<li>(get) localhost:5000/api/posts/trend <b> (Trend Post)</b> </li>
<li>(put) localhost:5000/api/posts/view/:postId <b> (Increase view of the Post)</b> </li>
</ul>

 <ul>
 <h1> Comments api </h1>
<li>(post method) localhost:5000/api/comments/ <b> (post comments)</b> </li>
<li>(del method) localhost:5000/api/users/:id<b> (Delete Comments) </b> </li>
<li> (get) localhost:5000/api/users/:postId <b> (Get all comments of that post) </b> </li>
 
</ul>
