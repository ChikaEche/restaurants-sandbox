interface Seeder<T> {
  seed: (count: number) => Array<T>
}

interface Restaurant {
  name: string;
  rating: number;
  tags: Array<string>;
}

class RestaurantSeeder implements Seeder<Restaurant>{
  private readonly tags = [
    'Korean', 'Chinesse', 'Indian', 'Turkish', 'African', 'Vegan', 'Vegetarian'
  ];

  private readonly maxTagsAllowed = 3;

  private createRestaurant() {
    let name = '';
    const numberOfTags = Math.floor(Math.random() * this.maxTagsAllowed) + 1;
    const resturantNameLength = Math.floor(Math.random() * 6) + 2;
    for (let i = 0; i < resturantNameLength; i++) {
      const charCode = Math.floor(Math.random() * 25) + 97;
      name = `${name}${String.fromCharCode(charCode)}`
    }

    const tags: string[] = [];

    for (let i = 0; i < numberOfTags; i++) {
      let assignedTag = this.tags[Math.floor(Math.random() * this.tags.length)];
      while(tags.indexOf(assignedTag) !== -1) {
        assignedTag = this.tags[Math.floor(Math.random() * this.tags.length)];
      }
      tags.push(assignedTag);
    }

    const rating = +((Math.random() * 4) + 1).toFixed(2);

    return { name, tags, rating } as Restaurant;
  }

  public seed(count: number) {
    return new Array(count).fill(null).map(() => this.createRestaurant() );
  }
}

const restaurantSeeder = new RestaurantSeeder();
const restaurants = restaurantSeeder.seed(100);
console.table(restaurants)