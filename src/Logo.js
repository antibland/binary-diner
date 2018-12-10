import React from 'react';

const styles = {
  maxWidth: '100%',
  width: '498px',
  height: 'auto',
};

function Logo() {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet="/logo.webp 1x,
              /logo@2x.webp 2x,
              /logo@3x.webp 3x"
      />
      <source
        srcSet="/logo.png 1x,
              /logo@2x.png 2x,
              /logo@3x.png 3x"
      />
      <img
        aria-hidden="true"
        src="/logo@2x.png"
        alt="Mel's Binary Diner logo"
        style={styles}
      />
    </picture>
  );
}

export default Logo;
