import React from 'react';
import { useState } from 'react';

function NewsLetter() {
  const [newsData, setNewsData] = useState({
    newsTitle: '',
    newsText: '',
    newsSubmitted: false,
  });
  const changeNewsTitleHandler = (event) => {
    setNewsData({
      newsTitle: event.target.value,
      newsText: newsData.newsText,
      newsSubmitted: false,
    });
  };
  const changeNewsTextHandler = (event) => {
    setNewsData({
      newsTitle: newsData.newsTitle,
      newsText: event.target.value,
      newsSubmitted: false,
    });
  };

  const resetNewsFields = () => {
    setNewsData({ newsTitle: '', newsText: '' });
  };

  const submitHandler = () => {
    event.preventDefault();
    setNewsData({
      newsTitle: newsData.newsTitle,
      newsText: newsData.newsText,
      newsSubmitted: true,
    });
    console.log('Form Submoitted');
  };

  return (
    <div className="newsletter">
      <div className="title">Newsletter</div>
      <form onSubmit={submitHandler}>
        {' '}
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
      </form>
      {newsData.newsSubmitted ? <p>Form Submitted</p> : <p>Not Submitted</p>}
    </div>
  );
}

export default NewsLetter;
