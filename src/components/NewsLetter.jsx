import React from 'react';
import { useState } from 'react';

function NewsLetter() {
  const [newsData, setNewsData] = useState({
    newsTitle: '',
    newsText: '',
  });
  const changeNewsTitleHandler = (event) => {
    setNewsData({
      newsTitle: event.target.value,
      newsText: newsData.newsText,
    });
  };
  const changeNewsTextHandler = (event) => {
    setNewsData({
      newsTitle: newsData.newsTitle,
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
        value={newsData.newsTitle}
        type="text"
        placeholder=" News Headline"
        onChange={changeNewsTitleHandler}
      />
      <p>{newsData.newsTitle.length} Characters</p>
      <input
        value={newsData.newsText}
        type="text"
        placeholder=" Main News Text"
        onChange={changeNewsTextHandler}
      />
      {newsData.newsText.length} Characters
      <div>
        <button type="submit">Submit</button>
        <button onClick={resetNewsFields}>Clear Fields</button>
      </div>
    </div>
  );
}

export default NewsLetter;
