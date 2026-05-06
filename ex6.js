let getMostForkedRepo = (username) => {
    
    const url = ⁠ "https://api.github.com/users/${username}/repos" ⁠;

  
    fetch(url)
        .then(response => {
            
            if (!response.ok) throw new Error("User not found");
            return response.json();
        })
        .then(repos => {
            
            if (repos.length === 0) {
                alert("This user has no repositories.");
                return;
            }

           
            repos.sort((a, b) => b.forks_count - a.forks_count);

            let topRepo = repos[0];

           
            let message = ⁠ Top Repo: ${topRepo.name} with ${topRepo.forks_count} forks. ⁠;
            
            alert(message);
        });
};

