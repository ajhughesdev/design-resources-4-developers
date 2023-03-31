# Design Resources for Developers
Data Analysis Course 1 Project for Code Louisville January 2023 cohort

## Project Description
This project scrapes data from the web and renders it on a webpage. The data is from a [repository](https://github.com/bradtraversy/design-resources-for-developers) by [Brad Traversy](https://github.com/bradtraversy/) which is a currated list of design and UI resources for developers. I have written a script to scrape the data from a forked version of the repository. The data is then rendered using Django and React.

### Project Requirements for the course:

1. Read data in.
2. Manipulate and clean your data.
3. Analyze your data!
4. Visualize your data.
5. Interpret your data and graphical output.

#### Read data in.

>"Scrape one piece of data from anywhere on the internet and utilize it in your project."

Using Scrapy, I scraped the data from the repository and saved it as a JSON file. 

>"Read in data from a local csv, excel file, json, or any other file type.

I used Pandas to read the JSON file and convert it to a Pandas DataFrame.

>"Make a list, dictionary, tuple, or other standard python data structure to read in data for your program."

I used a dictionary to store the data from the JSON file.


#### Manipulate and clean your data.

>"Use built-in pandas or numpy functions to do things like remove 0’s and null values where they don’t belong in your dataset."

I used Pandas to remove null values from the DataFrame.

>"Use custom functions or lambdas to perform specific operations to clean or manipulate your data, return those values, then use them in other parts of your project."

I used a custom function to remove a specific resource from the DataFrame.

#### Analyze your data!

>"Write custom functions to operate on your data."

I wrote a custom function to analyze the data and return the number of resources in each category that is visualized in a bar and pie chart. I also combined all the resource descriptions into one string and created a WordCloud from it.

#### Visualize your data.

>"Make 2 basic plots with matplotlib, seaborn, or any other kind of visualization library that you think looks interesting"

I used Matplotlib to create a bar chart and pie chart to visualize the number of resources in each category.

>Make a website and visualize your data with a framework like django or flask."

I used Django to create a website and React to render the data.

#### Interpret your data and graphical output.

>"Write markdown cells in Jupyter explaining your thought process and code."

See attached [Jupyter Notebook](https://github.com/ajhughesdev/design-resources-4-developers/blob/0c1895198226a567e2dc5693269f2e70b25025a8/backend/design-resources-4-developers.ipynb).
