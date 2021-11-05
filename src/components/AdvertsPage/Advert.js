import React from 'react';
//import T from 'prop-types';


const Advert = ({ id, createddAt, name, sale, price, tags, photo }) => {
  return (
    <article >
      <div >
        {name}
        {sale ? 'Venta' : 'Compra'}
        {price}
        {tags}
        {photo && <img src="" alt="no hay foto"/>}
      </div>
    </article>
  );
};

// export const tweetType = {
//   user: T.shape({ name: T.string.isRequired, username: T.string.isRequired })
//     .isRequired,
//   updatedAt: T.string.isRequired,
//   content: T.string,
//   likes: T.array.isRequired,
// };

// Tweet.propTypes = tweetType;

// Tweet.defaultProps = {
//   content: 'Nothing here!',
// };

export default Advert;