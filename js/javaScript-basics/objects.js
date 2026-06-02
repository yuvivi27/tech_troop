const p1 = {
  name: "Jill",
  age: 28,
  city: "Seattle"
};

const p2 = {
  name: "Robert",
  age: 28,
  city: "Seattle"
};

if (p1.age === p2.age) {
  if (p1.city === p2.city) {
    console.log(`${p1.name} wanted to date ${p2.name}`);
  } else {
    console.log(`${p1.name} wanted to date ${p2.name}, but couldn't`);
  }
}


const library = {
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald"
    },
    {
      title: "1984",
      author: "George Orwell"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien"
    }
  ]
};


const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

const name = 'Bob'; 
const lowerName = name.toLowerCase();
let matchingName = Object.keys(reservations).find(key => key.toLowerCase() === lowerName);

if (matchingName) {
  if (!reservations[matchingName].claimed) {
    console.log(`Welcome, ${matchingName}`);
  } 
  else {
    console.log("Hmm, someone already claimed this reservation");
  }
} 
else {
  reservations[name] = {name: {claimed: true}};
}

