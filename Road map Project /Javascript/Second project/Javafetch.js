const search = document.querySelector('.username-input');
const button = document.querySelector('.search-btn');
const errorMessage = document.querySelector('.error-message');

const container = document.querySelector('.profile-container');

const avatar = document.querySelector('.avatar');
const nameEl = document.querySelector('.name');
const bioEl = document.querySelector('.bio');
const followersEl = document.querySelector('.followers');
const followingEl = document.querySelector('.following');
const reposEl = document.querySelector('.repos');
const profileLink = document.querySelector('.profile-link');
const loading = document.querySelector('.loading');







button.addEventListener('click', () => {
  checkUsername();
});

function checkUsername() {
  
  const username = search.value;
  
  if (!username.trim()) {
    errorMessage.textContent = "Please enter username";
    return;
  }
loading.textContent = "Searching GitHub profile...";
errorMessage.textContent = "";
button.textContent = "Searching...";
button.disabled = true;

fetch(`https://api.github.com/users/${username}`)
  .then(res => {
    if (!res.ok) throw new Error("User not found");
    return res.json();
  })
  .then(data => {
    button.disabled = false;
button.textContent = "Search";

    loading.textContent = "";
    renderProfile(data);
  })
  .catch(err => {
    button.disabled = true;
button.textContent = "Search";
    loading.textContent = "";
    errorMessage.textContent = err.message;
  });
}

// ✅ MUST be outside checkUsername
function renderProfile(data) {
  avatar.src = data.avatar_url;
  
  nameEl.textContent = data.name;
  bioEl.textContent = data.bio;
  
  followersEl.textContent = data.followers;
  followingEl.textContent = data.following;
  reposEl.textContent = data.public_repos;
  
  profileLink.href = data.html_url;
}