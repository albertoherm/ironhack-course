// Define and use types and interfaces in typescript

// Define a custom type named Person
type Person = {
  name: string;
  age: number;
  email: string;
};

// Declare a variable person of type Person
const person: Person = {
  name: "Alberto Hermosillo",
  age: 23,
  email: "alberto.hermosillo@digitalfemsa.com",
};

// Define an interface named Book
interface Book {
  title: string;
  author: string;
  pages: number;
}

// Declare an array books of type Book[]
const books: Book[] = [
  {
    title: "Shrek 1",
    author: "Ogro",
    pages: 1000,
  },
  {
    title: "Shrek 2",
    author: "Burro",
    pages: 2000,
  },
  {
    title: "Shrek 3",
    author: "Fiona",
    pages: 3000,
  },
  {
    title: "Shrek 4",
    author: "Gato",
    pages: 4000,
  },
  {
    title: "Shrek 5",
    author: "Pinocho",
    pages: 5000,
  },
  {
    title: "Shrek 6",
    author: "Dragon",
    pages: 6000,
  },
];

// Implement a function displayBookInfo
function displayBookInfo(book: Book): void {
  console.log("Title:", book.title);
  console.log("Author:", book.author);
  console.log("Pages:", book.pages);
}

// Iterate over the books array and call displayBookInfo for each book
for (const book of books) {
  displayBookInfo(book);
}
