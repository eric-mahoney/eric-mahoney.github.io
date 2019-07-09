// https://www.reddit.com/r/sadcats.json

// when working with APIs, the best practice with React.JS is to 
// use the lifecycle method "componentDidMount()" so the API calls are 
// executed after the DOM has been rendered

// this is also the best place to attach any event listeners

window.onload = function(){

    async function sadCats(){
        let url = 'https://www.reddit.com/r/sadcats.json';
        let request = await fetch(url);
        let response = await request.json();
        
        processCats(response);
    }

    function processCats(post){
        let completeArray = [];
        for(let i = 0; i < post.data.children.length; i++){
            let array = [];
            let currentSubmission = post.data.children[i].data;
            if(currentSubmission.domain == "youtube.com" || currentSubmission.domain == "self.sadcats"){
                continue;
            }
            let userId = currentSubmission.author;
            let catPhoto = currentSubmission.url;
            let permalink = currentSubmission.permalink;
            array.push(userId, catPhoto, permalink);
            completeArray.push(array);
        }
        console.log(completeArray);
        outputCats(completeArray);

    }
    function outputCats(data){
        for(let i = 0; i < data.length; i++){
            let divContainer = document.getElementById('cat-container');
            
            let catCard = document.createElement('div');
            catCard.className = "cat-card";

            // image container
            let imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';

            // cat image
            let catImage = document.createElement('img');
            catImage.className = 'cat-image';
            catImage.src = data[i][1];

            // author / user ID
            let author = document.createElement('a');
            author.innerHTML = "/u/" + data[i][0];
            author.className = 'user-id';
            author.target = "_blank";
            author.href = `https://www.reddit.com/u/${data[i][0]}`

            // permalink to post
            let permalink = document.createElement('a');
            permalink.href = `https://www.reddit.com${data[i][2]}`;
            permalink.target = "_blank";

            permalink.appendChild(catImage);
            imageContainer.appendChild(permalink);
            catCard.appendChild(imageContainer);
            catCard.appendChild(author);
            divContainer.appendChild(catCard);
        }
    }

    function main(){ sadCats(); }
    main();
}