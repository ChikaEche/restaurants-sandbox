# restaurants-sandbox

- This app uses angular on the front end, firebase as the back end
- A scheduled firebase cloud function updates the restuarants data every week
- There are two additional cloud functions that listens for when a documents on firestore is updated or added, it's automatically updates meilisearch index with the updated data

Restaurants is a web app that shows 50 restaurants in
Dublin with their name, location, rating, and pictures using
Yelp API. Users can sort by rating, search by cuisine using
firebase queries, and also search by restaurant name using
meilisearch.

- Website https://restaurants.chikaokafor.dev

# Start angular app locally
- Make sure you have npm and angular cli installed
- Clone the repo using git clone https://github.com/ChikaEche/restaurants-sandbox.git
- cd into angular app run npm install
- run ng serve to spin up the app locally
