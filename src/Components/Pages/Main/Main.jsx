import React, { useEffect, useState } from 'react';
import LoadingPlane from './LoadingPlane/LoadingPlane';
import MainFooter from '../../Footer/MainFooter';
import BabyPicture from '../../../assets/images/thumbs/baby_pic.png';
import ArrowLeftImg from '../../../assets/images/icons/icon_arrow-left.svg';
import TapeImg from '../../../assets/images/icons/icon_tape.svg';
import CakeImg from '../../../assets/images/icons/icon_cake.svg';
import ArrowRightImg from '../../../assets/images/icons/icon_arrow-right.svg';
import FlagImg from '../../../assets/images/icons/icon_flag.svg';
import LoveImg from '../../../assets/images/icons/icon_love.svg';
import Image1 from '../../../assets/images/thumbs/photo-1.png';
import Image2 from '../../../assets/images/thumbs/photo-2.png';
import Image3 from '../../../assets/images/thumbs/photo-3.png';
import Image4 from '../../../assets/images/thumbs/photo-4.png';
import Image5 from '../../../assets/images/thumbs/photo-5.png';
import Image6 from '../../../assets/images/thumbs/photo-6.png';
import Image7 from '../../../assets/images/thumbs/photo-7.png';

import './Main.css';

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <LoadingPlane />;
  }

  return (
    <>
      <header>
        <img className="header__background" src={BabyPicture} alt="baby" />
        <div className="header__content">
          <img
            src={ArrowLeftImg}
            alt="back"
            aria-label="back to previous page"
            className="icon-back"
          />
          <div className="content">
            <img className="icon-tape" src={TapeImg} alt="tape" />
            <h1>Frinz Arley</h1>
            <p>1st Birthday Party</p>
          </div>
          <img className="icon-cake" src={CakeImg} alt="cake" />
        </div>
      </header>

      <main className="main-page">
        <div className="container">
          <div className="wrapper__box">
            <div className="box">
              <p className="box-title">Date & Time:</p>
              <p className="box-subtitle">
                Saturday, <br />
                17 Sep 2022 | 15:00 - Selesai
              </p>
            </div>
            <div className="box">
              <p className="box-title">Location:</p>
              <p className="box-subtitle">Tamarin Nurseries Garden & Cafe</p>
              <p className="box-more-detail">
                See Details <img src={ArrowRightImg} alt="detail" />
              </p>
            </div>
            <div className="box">
              <p className="box-title">Dresscode:</p>
              <p className="box-subtitle">Casual Red and Blue</p>
            </div>
            <div className="box"></div>
          </div>

          <img className="icon-flag" src={FlagImg} alt="flag" />

          <section className="stories">
            <span className="striped striped-1"></span>
            <p className="title">STORIES.</p>
            <span className="striped striped-2"></span>

            <p className="content">
              On September 17, 2021, at 17:30, God showed his love for the
              couple Mr. Okta and Mrs. Veronica by giving them a blessing in the
              form of a son named <br />
              Frinz Arley.
            </p>
          </section>

          <section className="photos">
            <figure>
              <img className="photo" src={Image1} alt="baby 1" />
            </figure>
            <figure>
              <img className="photo" src={Image2} alt="baby 2" />
            </figure>
            <figure>
              <img className="photo" src={Image3} alt="baby 3" />
            </figure>
            <figure>
              <img className="photo" src={Image4} alt="baby 4" />
            </figure>
            <figure>
              <img className="photo" src={Image5} alt="baby 5" />
            </figure>
            <figure>
              <img className="photo" src={Image6} alt="baby 6" />
            </figure>
            <figure>
              <img className="photo" src={Image7} alt="baby 7" />
            </figure>
          </section>
          <img className="icon-flag-2" src={FlagImg} alt="flag" />

          <section className="message">
            <p>
              “It will be a gift for me if you can present at My Birthday Party,
              I am looking forward to your presence.” <br />
              <br />
              <br />
              With
              <img src={LoveImg} alt="love" />
              <br />- Frinz Arley -
            </p>
          </section>
        </div>
      </main>

      <MainFooter />
    </>
  );
}

export default Main;
