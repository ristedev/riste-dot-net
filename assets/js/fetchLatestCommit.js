async function fetchLastCommit() {
  const response = await fetch(
    'https://api.github.com/repos/ristedev/riste-dot-net/commits/main',
  );
  if (!response.ok) {
    document.getElementById('last-updated').innerText =
      'Error fetching commit data.';
    return;
  }
  const commit = await response.json();
  const commitDate = new Date(commit.commit.committer.date); // Get the commit date
  const commitHash = commit.sha; // Get the commit hash

  // Format the date
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'UTC',
  };
  const formattedDate = commitDate.toLocaleString('en-US', options); // Format in the specified format

  // Update the inner HTML of the paragraph with the latest commit date and link
  document.getElementById('last-updated').innerHTML =
    `<a href="https://github.com/ristedev/riste-dot-net/commit/${commitHash}" target="_blank">Last built on ${formattedDate} UTC</a>`;
}

// Call the function to fetch the latest commit
document.addEventListener('DOMContentLoaded', fetchLastCommit);
