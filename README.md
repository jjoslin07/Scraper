# Web Scraper
This is a simple Node.js application that scrapes images from a specified URL and downloads them to a local directory.

## Prerequisites
Make sure you have the following dependencies installed:

Node.js
npm (Node Package Manager)
## Installation
Clone or download this repository to your local machine.

Navigate to the project directory using the command line.

Run the following command to install the required packages:

```
npm install
```
## Usage
Open a terminal and navigate to the project directory.

Run the following command to start the application:

```
node scraper.js
```

The application will prompt you to enter the URL from which you want to scrape images.

After entering the URL, the application will download the images to a local directory called "files".

## Customization
If you want to change the destination folder for downloaded images, you can modify the folderPath variable in the code.
By default, the downloaded images are named as "imageX.jpg" where X represents the index of the image. If you want to change the naming convention, you can modify the imageName variable in the code.
## Libraries Used
axios: Used to make HTTP requests and download images.
cheerio: A fast, flexible, and lean implementation of core jQuery for the server. Used for parsing and manipulating HTML.
fs: A built-in Node.js module used for interacting with the file system.
path: A built-in Node.js module used for working with file paths.
readline: A built-in Node.js module used for reading input from the command line.
## License
This project is licensed under the MIT License. Feel free to modify and distribute it according to your needs.
