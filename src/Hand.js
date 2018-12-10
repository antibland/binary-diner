import React from 'react';

function Hand() {
  return (
    <div className="hand">
      <picture>
        <source
          type="image/webp"
          srcSet="/hand.webp 1x,
                /hand@2x.webp 2x"
        />
        <source
          srcSet="/hand.png 1x,
                /hand@2x.png 2x"
        />
        <img aria-hidden="true" src="/hand@2x.png" alt="" />
      </picture>
    </div>
  );
}

export default Hand;
