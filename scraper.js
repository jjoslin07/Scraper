const axios = require('axios'); // Importing the Axios library for making HTTP requests
const cheerio = require('cheerio'); // Importing the Cheerio library for parsing HTML
const fs = require('fs'); // Importing the built-in File System module for interacting with the file system
const path = require('path'); // Importing the built-in Path module for working with file paths
const readline = require('readline'); // Importing the built-in Readline module for reading input from the command line

const rl = readline.createInterface({
	input: process.stdin, // Configuring input to read from the command line
	output: process.stdout, // Configuring output to write to the command line
});

rl.question('Enter the URL to scrape: ', (url) => {
	// Prompting the user to enter the URL to scrape
	rl.close(); // Closing the Readline interface

	const folderPath = './files'; // The path of the folder where the downloaded images will be saved

	axios
		.get(url) // Making a GET request to the specified URL
		.then((response) => {
			// Executing the following code when the request is successful
			const html = response.data; // Storing the HTML content of the response
			const $ = cheerio.load(html); // Loading the HTML content into Cheerio for parsing
			const imageUrls = []; // Array to store the URLs of the images

			$('img').each((index, element) => {
				// Iterating over each 'img' element in the HTML
				const src = $(element).attr('src'); // Extracting the 'src' attribute of the image
				imageUrls.push(src); // Adding the URL to the imageUrls array
			});

			imageUrls.forEach((imageUrl, index) => {
				// Iterating over each image URL
				const imageName = `image${index}.jpg`; // Generating a unique name for each image
				const imagePath = path.join(folderPath, imageName); // Creating the complete path of the image file

				axios({
					url: imageUrl, // Setting the URL of the image to download
					responseType: 'stream', // Configuring the response type as stream for downloading
				})
					.then((response) => {
						// Executing the following code when the image download is successful
						response.data.pipe(fs.createWriteStream(imagePath)); // Saving the image data to the specified file path
					})
					.catch((error) => {
						// Executing the following code when there is an error downloading the image
						console.log('Error downloading image:', error); // Displaying the error message
					});
			});
		})
		.catch((error) => {
			// Executing the following code when there is an error fetching the URL
			console.log('Error fetching the URL:', error); // Displaying the error message
		});
});
