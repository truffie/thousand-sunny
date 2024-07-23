import styles from './Footer.module.css';

import Image from 'next/image';

import logo from 'img/logo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrapper layout-rows">
        <div className={`${styles.info} layout-columns`}>
          <div className="layout-columns">
            <Image src={logo} width={41} height={41} alt="logo" />
            <p>
              Plan and book your perfect trip with expert advice, travel tips
              destination information from us
            </p>
          </div>
          <p>©2020 Thousand Sunny. All rights reserved</p>
        </div>
        <div className={`${styles.nav} layout-rows`}>
          <div className="layout-columns">
            <h3>Destinations</h3>
            <p>Africa</p>
            <p>Antarctica</p>
            <p>Asia</p>
            <p>Europe</p>
            <p>America</p>
          </div>
          <div className="layout-columns">
            <h3>Shop</h3>
            <p>Destination Guides</p>
            <p>Pictorial & Gifts</p>
            <p>Special Offers</p>
            <p>Depvery Times</p>
            <p>FAQs</p>
          </div>
          <div className="layout-columns">
            <h3>Interests</h3>
            <p>Adventure Travel</p>
            <p>Art And Culture</p>
            <p>Wildpfe And Nature</p>
            <p>Family Hopdays</p>
            <p>Food And Drink</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
