// Simulating the fetching of video options for download
function fetchVideoOptions() {
    let videoUrl = document.getElementById("videoUrl").value;
    
    // Clear any previous results
    let downloadOptionsDiv = document.getElementById("downloadOptions");
    downloadOptionsDiv.innerHTML = '';

    if (!videoUrl) {
        alert('Please enter a YouTube video URL!');
        return;
    }

    // Simulate different quality options for the given video URL
    let qualities = [
        {quality: '1080p', format: 'MP4', size: '500MB'},
        {quality: '720p', format: 'MP4', size: '300MB'},
        {quality: '480p', format: 'MP4', size: '150MB'},
        {quality: '360p', format: 'MP4', size: '100MB'},
        {quality: '144p', format: 'MP4', size: '50MB'}
    ];

    // Display the download options
    qualities.forEach(option => {
        let downloadButton = document.createElement('button');
        downloadButton.innerText = `Download ${option.quality} (${option.format}, ${option.size})`;
        downloadButton.onclick = function() {
            alert(`Downloading video in ${option.quality}`);
            // Placeholder action for downloading - real download logic goes here
        };
        downloadOptionsDiv.appendChild(downloadButton);
    });
}
