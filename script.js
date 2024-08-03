document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Fetch user data from the backend
    const response = await fetch("http://localhost:3000/api/user");
    const user = await response.json();
    
    // Log the user data to the console
    // console.log("get user: ", user);
    
    // Get the element to display user data
    const userDataDiv = document.getElementById("user-data");
    
    // Construct HTML string with user data
    const html = `
      <div class="user-info">
        <h2>${user.name} ${user.username}</h2>
        <p><span>Email:</span> ${user.email}</p>
        <p><span>Address:</span> ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
        <p><span>Location:</span> Latitude ${user.address.geo.lat}, Longitude ${user.address.geo.lng}</p>
      </div>
    `;
    
    // Insert HTML into the page
    userDataDiv.innerHTML = html;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Error fetching user data:", error);
  }
});
