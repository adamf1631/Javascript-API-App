//api key:   22e602bfc009405295872196b0924fff
const resultsBbcNews = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=10&apiKey=22e602bfc009405295872196b0924fff';
const req = new Request(resultsBbcNews);

fetch(req)

  .then((response) => response.json())

    .then(function(response) {

        let output = '<h4>The BBC News</h4>';
        for(i in response.articles){
          output += `
            <div class="container">
              <h5><b>Headline:</b></h5> <h4>${response.articles[i].title}</h4><br>
              <h5><b>Description:</b></h5> <h5>${response.articles[i].description}</h5><br>
              <button class="btn grey darken 2"><a href="${response.articles[i].url}" target="_blank">Read More</a></button>
              <hr>
            </div>

          `;

        };

          document.getElementById('bbcnews').innerHTML = output;

      })



const resultsWallStJournal = 'https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&pageSize=10&apiKey=22e602bfc009405295872196b0924fff';
const req2 = new Request(resultsWallStJournal);
  fetch(req2)
    .then((response) => response.json())

      .then(function(response) {

          let output = '<h4>The Wall St. Journal</h4>';
          for(i in response.articles){
            output += `
              <div class="container">
                <h5><b>Headline:</b></h5> <h4>${response.articles[i].title}</h4><br>
                <h5><b>Description:</b></h5> <h5>${response.articles[i].description}</h5><br>
                <button class="btn grey darken 2"><a href="${response.articles[i].url}" target="_blank">Read More</a></button>
                <hr>
              </div>

            `;

          };

            document.getElementById('wallstreet').innerHTML = output;


        })



const resultsNewYorkNews = 'https://newsapi.org/v2/top-headlines?sources=the-new-york-times&pageSize=10&apiKey=22e602bfc009405295872196b0924fff';
const req3 = new Request(resultsNewYorkNews);
  fetch(req3)
    .then((response) => response.json())

      .then(function(response) {
        let output = '<h4>The New York Times</h4>';
        for(i in response.articles){
            output += `
              <div class="container">
                <h5><b>Headline:</b></h5> <h4>${response.articles[i].title}</h4><br>
                <h5><b>Description:</b></h5> <h5>${response.articles[i].description}</h5><br>
                <button class="btn grey darken 2"><a href="${response.articles[i].url}" target="_blank">Read More</a></button>
                <hr>
              </div>

            `;

          };

            document.getElementById('newyorktimes').innerHTML = output;

        })


        const resultsHuffPost = 'https://newsapi.org/v2/top-headlines?sources=the-huffington-post&pageSize=10&apiKey=22e602bfc009405295872196b0924fff';
        const req4 = new Request(resultsHuffPost);

        fetch(req4)

          .then((response) => response.json())

            .then(function(response) {

                let output = '<h4>The Huffington Post</h4>';
                for(i in response.articles){
                  output += `
                    <div class="container">
                      <h5><b>Headline:</b></h5> <h4>${response.articles[i].title}</h4><br>
                      <h5><b>Description:</b></h5> <h5>${response.articles[i].description}</h5><br>
                      <button class="btn grey darken 2"><a href="${response.articles[i].url}" target="_blank">Read More</a></button>
                      <hr>
                    </div>

                  `;

                };

                  document.getElementById('huffpost').innerHTML = output;

              })
              const resultsFoxNews = 'https://newsapi.org/v2/top-headlines?sources=fox-news&pageSize=10&apiKey=22e602bfc009405295872196b0924fff';
              const req5 = new Request(resultsFoxNews);

              fetch(req5)

                .then((response) => response.json())

                  .then(function(response) {

                      let output = '<h4>Fox News</h4>';
                      for(i in response.articles){
                        output += `
                          <div class="container">
                            <h5><b>Headline:</b></h5> <h4>${response.articles[i].title}</h4><br>
                            <h5><b>Description:</b></h5> <h5>${response.articles[i].description}</h5><br>
                            <button class="btn grey darken 2"><a href="${response.articles[i].url}" target="_blank">Read More</a></button>
                            <hr>
                          </div>

                        `;

                      };

                        document.getElementById('foxnews').innerHTML = output;

                    })
                    const resultsCnn = 'https://newsapi.org/v2/top-headlines?sources=cnn&pageSize=10&apiKey=22e602bfc009405295872196b0924fff';
                    const req6 = new Request(resultsCnn);

                    fetch(req6)

                      .then((response) => response.json())

                        .then(function(response) {

                            let output = '<h4>CNN</h4>';
                            for(i in response.articles){
                              output += `
                                <div class="container">
                                  <h5><b>Headline:</b></h5> <h4>${response.articles[i].title}</h4><br>
                                  <h5><b>Description:</b></h5> <h5>${response.articles[i].description}</h5><br>
                                  <button class="btn grey darken 2"><a href="${response.articles[i].url}" target="_blank">Read More</a></button>
                                  <hr>
                                </div>

                              `;

                            };

                              document.getElementById('cnn').innerHTML = output;

                          })
