function APIpodcast () {
    var rangeFreq = document.querySelector('#rangeFreq');
    var divPodcast = document.querySelector('#podcast');

    rangeFreq.addEventListener('input', handleRangeValue);

    function handleRangeValue(event){
       var currentFreq = document.querySelector('#freq');
       var newFreq = event.target.value;
       currentFreq.value = newFreq;

       findPodcastFrom(newFreq);
    }

    function findPodcastFrom(frequency) {
        var foundPodcast = '';

        for(var i = 0; i < realPodcasts.length; i++){
            var currentPodcast = realPodcasts[i];

            if (currentPodcast.id === frequency) {
                foundPodcast = currentPodcast;
                break;
            }
        }

        if (foundPodcast) {
            divPodcast.innerHTML = '<p>Podcast encontrado!</p>'
            renderPodcast(foundPodcast);
        } else {
            divPodcast.innerHTML = '<p>Nenhum podcast encontrado!</p>'
        }

        function renderPodcast(podcast){
            divPodcast.innerHTML = ``;
            
            var img = document.createElement('img');
            img.src = './img/' + podcast.img;

            var title = document.createElement('h2');
            title.textContent = podcast.title;

            var description = document.createElement('p');
            description.textContent = podcast.description

            divPodcast.appendChild(img);
            divPodcast.appendChild(title);
            divPodcast.appendChild(description);
        }
    }
}