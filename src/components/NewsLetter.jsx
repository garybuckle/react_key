import React from 'react';
import { useState } from 'react';

function NewsLetter() {
  const [newsData, setNewsData] = useState({
    newsTitle: '',
    newsText: '',
  });
  const changeNewsDataHandler = (event) => {
    if (newsData.newsTitle.length > 12) {
      alert('Too many characters');
    }
    setNewsData({
      newsTitle: event.target.value,
      newsText: event.target.value,
    });
  };

  const resetNewsFields = () => {
    setNewsData({ newsTitle: '', newsText: '' });
  };
  return (
    <div className="newsletter">
      <div className="title">Newsletter</div>
      <input
        type="text"
        placeholder=" News Headline"
        onChange={changeNewsDataHandler}
      />
      <p>{newsData.newsTitle.length} characters</p>
      <input
        type="text"
        placeholder=" Main News Text"
        onChange={changeNewsDataHandler}
      />
      {newsData.newsText.length} Characters
      <div>
        <button type="submit">Submit</button>
        <button onClick={resetNewsFields}>Clear Field</button>
      </div>
    </div>
  );
}

export default NewsLetter;
