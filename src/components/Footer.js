import React from 'react';

export default function Footer(){
  return (
    <footer>
        <div className="player-bar">
            <div className="primary-progress"></div>
            <div className="secondary-progress"></div>
        </div>
        <div className="playlist">
            <div className="left-controls">
                <button className="prev-btn"><i className="fas fa-step-backward"></i></button>
                <button className="playandstop">
                    <i className="fas fa-play"></i>
                    <i className="fas fa-pause"></i>
                </button>
                <button className="next-btn"><i className="fas fa-step-forward"></i></button>
                <div className="time-info">
                    <span className="duration">0:00</span>
                    /
                    <span className="end-time">3:29</span>
                </div>
            </div>

            <div className="middle-controls">
                <span className="album"><img src="album/harry_album1.jpg" alt=""/></span>
                <div className="info">
                    <h3>Watermelon Sugar</h3>
                    <span>Harry Styles</span>
                </div>
                <div className="middle-controls-btns">
                    <button className="dislike"><i className="far fa-thumbs-down"></i></button>
                    <button className="like"><i className="far fa-thumbs-up"></i></button>
                </div>
            </div>

            <div className="right-controls">
                <button className="shuffle"><i className="fas fa-random"></i></button>
                <button className="toggle-player-page-btn">
                    <i className="fas fa-sort-up"></i>
                    <i className="fas fa-sort-down"></i>
                </button>
            </div>

        </div>
    </footer>
  );
};
