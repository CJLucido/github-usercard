/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
.get('https://api.github.com/users/CJLucido') //DONT USE SEMICOLON HERE OR YOU WILL CLOSE OUT AXIOS!!
.then(response =>  {
    console.log(response)
  });
  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

  function singleObjectCreator(object){
    const
      div1 = document.createElement('div'),
      profImg = document.createElement('img'),
      div1Pt1 = document.createElement('div'),
        heading1 = document.createElement('h3'),
        para1 = document.createElement('p'),
        para2 = document.createElement('p'),
        para3 = document.createElement('p'),
          aTag1Para3 = document.createElement('a'),
        para4 = document.createElement('p'),
        para5 = document.createElement('p'),
        para6 = document.createElement('p');

    div1.appendChild(profImg);
    div1.appendChild(div1Pt1);
      div1Pt1.appendChild(heading1);
      div1Pt1.appendChild(para1);
      div1Pt1.appendChild(para2);
      div1Pt1.appendChild(para3);
        para3.appendChild(aTag1Para3);
      div1Pt1.appendChild(para4);
      div1Pt1.appendChild(para5);
      div1Pt1.appendChild(para6);

      div1.classList.add(card);
        div1Pt1.classList.add(card-info);
          heading1.classList.add(name);
          para1.classList.add(username);

      object.forEach(item => {
        profImg.src = item.data.avatar_url;
        heading1.textContent = item.data.name;
        para1.textContent = item.data.login;
        para2.textContent = `Location: ${item.data.location}`;
        para3.textContent = "Profile:";
        aTag1Para3.href = item.data.html_url;
        aTag1Para3.textContent = item.data.html_url;
        para4.textContent = `Followers: ${item.data.followers}`;
        para5.textContent = `Following: ${item.data.following}`;
        para6.textContent = `Bio: ${item.data.bio}`
      })
    
      return div1;
  }

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
