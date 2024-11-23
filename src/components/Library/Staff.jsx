import React from 'react';
import book1 from '../../assets/images/book1.png';
import book3 from '../../assets/images/book3.png';
import book4 from '../../assets/images/book4.png';

function Staff() {
  // Array of books with properties like title, image, and rating
  const books = [
    {
      id: 1,
      title: 'Book Name 1',
      image: book1,
      rating: 4, // rating out of 5
    },
    {
      id: 2,
      title: 'Book Name 2',
      image: book3,
      rating: 5,
    },
    {
      id: 3,
      title: 'Book Name 3',
      image: book4,
      rating: 3,
    },
    {
      id: 4,
      title: 'Book Name 2',
      image: book3,
      rating: 5,
    },
    {
      id: 5,
      title: 'Book Name 3',
      image: book4,
      rating: 3,
    },
  ];

  return (
    <div className="p-5 mt-20 mb-20">
      {/* Heading for Staff Picks */}
      <h2 className="text-5xl h1welcometext text-center text-green-950 font-serif italic mb-10">
        Staff Picks
      </h2>

      {/* Books Container */}
      <div className="flex flex-wrap px-3 justify-between gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex flex-col items-center p-4 w-60 group"
          >
            {/* Image with hover effect */}
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full mb-4 rounded transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl"
            />
            <h3 className="text-lg font-serif justify-start align-top text-start mb-2">
              {book.title}
            </h3>
            <div className="flex mb-2">
              {/* Generate 5 stars based on book rating */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill={index < book.rating ? 'currentColor' : 'none'}
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15l-5.878 3.09 1.12-6.52L0 6.912l6.636-.53L10 0l3.364 5.352L20 6.912l-5.242 4.658 1.12 6.52L10 15z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Staff;
