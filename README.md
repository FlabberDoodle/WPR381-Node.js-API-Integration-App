# Node.js API Integration App

## Overview
This project is a Node.js application that interacts with **Twitter**, **Spotify**, and **OMDb** APIs based on user input from the terminal. It processes API calls, retrieves data, and outputs it in a specified format. Additionally, it can read commands and queries from a file to perform various tasks.

## Features
- **Fetch Latest Tweets**: Retrieve the 20 most recent tweets from a specified Twitter account.
- **Spotify Song Lookup**: Search for a song on Spotify, and display information such as artist, song name, album, and preview link.
- **OMDb Movie Details**: Query the OMDb API to fetch movie details such as title, year, IMDb rating, language, etc.
- **Read from File**: Execute commands from a file called `random.txt` and perform API queries based on the file content.

## Requirements
The application includes the following main functions:
1. **Print Latest Tweets**:
   - Fetch the 20 most recent tweets based on a specified Twitter username and number of tweets.
2. **Spotify Song Lookup**:
   - Query Spotify API for song details, including the artist(s), song title, preview link, and album.
3. **OMDb Movie Lookup**:
   - Fetch movie details such as title, year, IMDb rating, and more from OMDb.
4. **File Query Execution**:
   - Read commands from a text file and execute the associated API queries.

## Technologies
- **Node.js**: JavaScript runtime used for building server-side applications.
- **JavaScript**: Core programming language used.
- **Twitter API**: Access Twitter data using the `twitter` NPM module.
- **Spotify API**: Fetch music data using the `spotify` NPM module.
- **OMDb API**: Retrieve movie data using the `request` NPM module.

![Spotify App](https://github.com/user-attachments/assets/88feb40f-72d2-401c-a616-96fa66b10616)
