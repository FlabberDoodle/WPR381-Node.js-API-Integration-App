**Overview**
  
  • Make a Node.js app that depends on user input from the terminal to retrieve some information from the internet.
  
  • Integrate Twitter, Spotify, and OMDb APIs via the appropriate NPM modules to satisfy the requirements that follow.
  
  • Use API calls and parse through returned JSON objects, outputting them in a specified format
  
  • Read commands and queries from file

**Requirements**
  
  • There are 4 main functions that your application must complete:
      
      (1) Print latest tweets,
      (2) Perform a Spotify look-up for a song,
      (3) Query OMDb for movie details, and
      (4) Read a query from a text file.
  
  • The program should make a request to the Twitter API that is limited by parameters -- username and number of tweets, and it should fetch a JSON object that includes an array of the 20 most recent tweets;
  
  • The program should make a request to the Spotify API, and fetch a JSON object that includes the artist(s), song, preview link, and album.
 
  • The program should make a HTTP request to the OMDb API using the request NPM module, and get back a JSON object that includes the title, year, IMDb rating, language, etc.
  
  • The program should also read from a file called "random.text" and execute the command and query found there using string and array methods. Create any adhoc commands that the application can run from the other three requirements (e.g. Tweets or OMDb data)
  
  • Appropriate comments and error-checking must be added

**Technologies**
  
  
  • Node.js
  
  • JavaScript
  
  • OMDb API (via request npm module)
  
  • Twitter API (via twitter npm module)
  
  • Spotify API (via spotify npm module)
