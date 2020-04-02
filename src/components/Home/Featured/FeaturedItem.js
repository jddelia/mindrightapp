import React from 'react';

function FeaturedItem({ img, author, content, url }) {
  return (
    <div className="featuredItem">
      <div className="itemImg">
        <img className="featuredImg" src={img} />
      </div>

      <div className="itemContent">
        <span className="itemContentTitle">{author}</span>
        <p className="contentText">
          {content}
        </p>
        <a className="contentLink" href={url}>More</a>
      </div>
    </div>
  );
}

export default FeaturedItem;