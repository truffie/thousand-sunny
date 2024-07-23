import Image from 'next/image';
import styles from './Header.module.css';
import { useState } from 'react';
import logo from 'img/logo.svg';

export const Header: React.FC = () => {
  const [current, setCurrent] = useState<string | null>(null);

  const navItems = ['home', 'destionations', 'about', 'partner'];

  return (
    <header className={styles.header}>
      <div className="wrapper layout-rows">
        <Image src={logo} width={41} height={41} alt="logo" />
        <div className={`${styles.menu} layout-rows`}>
          <nav className="layout-rows">
            {navItems.map((el) => (
              <p
                onClick={(e) => {
                  setCurrent((e.target as HTMLElement).textContent);
                }}
                className={el === current ? styles.current : ''}
                key={el}
              >
                {el}
              </p>
            ))}
          </nav>
          <div>
            <button>Login</button>
            <button className="colored">Register</button>
          </div>
        </div>
      </div>
    </header>
  );
};
