import React from 'react';

export default function Home() {
  const currentYear = new Date().getFullYear();
  let yearsAgo = currentYear - 2003;

  return (
    <div
      style={{
        fontFamily: '"Pompiere", cursive',
        fontSize: '26px',
        lineHeight: '1em',
        padding: '20px'
      }}
    >
      <p>
        This is based of a collection of handwritten recipes from my
        Grandmother. She gave this to us {yearsAgo} years ago as we left the
        Philippines to move to the United States.
      </p>
      <p>
        My younger sister kept this book as she is the best cook out of the
        three of us siblings. Through the years as I learned to cook, I would
        call her asking to send me a picture of what many times, would be the
        same recipe that I'd forget to save. As the book is aging and getting
        worn and damged, I've decided to put the recipes online for easier
        access between me and my sisters and to preserve its contents.
      </p>
    </div>
  );
}
