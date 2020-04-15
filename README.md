# InShorts-news-unofficial-API
---
## News Categories

1. national //Indian News only
2. business
3. sports
4. world
5. politics
6. technology
7. startup
8. entertainment
9. miscellaneous
10. hatke
11. science
12. automobile

---

## Usage

Make a GET request to get all news 
```
localhost:3001/news/all
```
To get news of particular Category
```
localhost:3001/news/category/category_name
```

---

## Response Format

The response JSON Object looks something like this - 

```
"news": [
{
"news_image": "https://static.getinpix.com/public/images/v1/variants/jpg/m/2020/02_feb/29_sat/img_1582957411973_367.jpg",
"news_title": "Viral video shows pigeon flying in GoAir flight, passengers trying to catch it",
"news_link": "https://inshorts.com//en/news/viral-video-shows-pigeon-flying-in-goair-flight-passengers-trying-to-catch-it-1582958412853",
"author_name": "Arshiya Chopra",
"news_date": "29 Feb 2020,Saturday",
"body": "An Ahmedabad-Jaipur GoAir flight was delayed by at least 30 minutes after a pigeon entered the flight. A video of the incident has also gone viral on social media and it shows the bird flying in the aircraft while the passengers onboard try to catch it. It is, however, unclear how the pigeon entered the plane.",
"read_more_link": null
}
]
```

## Installation
1. Navigate to the main folder
```
npm install
```

2. Start the server
```
node app.js
```
