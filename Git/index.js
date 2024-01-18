let currentPage = 1;
let reposPerPage = 10;
let totalRepos = 0;

function fetchRepos() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a GitHub username.');
        return;
    }

    const userUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos?page=${currentPage}&per_page=${reposPerPage}`;

    document.getElementById('loader').style.display = 'block';

    fetch(userUrl)
        .then(response => response.json())
        .then(user => {
            displayUserInfo(user);
        })
        .catch(error => console.error('Error fetching user information:', error));

    fetch(reposUrl)
        .then(response => response.json())
        .then(data => {
            displayRepos(data);
            totalRepos = data.length;
            displayPagination();
        })
        .catch(error => console.error('Error fetching repositories:', error))
        .finally(() => document.getElementById('loader').style.display = 'none');
}

function displayRepos(repos) {
    const repoList = document.getElementById('repo-list');
    repoList.innerHTML = '';

    repos.forEach(repo => {
        const repoItem = document.createElement('li');
        repoItem.className = 'repo-item';
        repoItem.textContent = `${repo.name} - ${repo.description || 'No description available.'}`;
        repoList.appendChild(repoItem);
    });
}

function displayPagination() {
    const totalPages = Math.ceil(totalRepos / reposPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = () => goToPage(i);
        pagination.appendChild(button);
    }
}

function goToPage(page) {
    currentPage = page;
    fetchRepos();
}

function displayUserInfo(user) {
    const userAvatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');
    const userInfo = document.getElementById('user-info');

    userAvatar.src = user.avatar_url;
    userName.textContent = user.name || user.login;

    userInfo.style.display = 'flex';
}