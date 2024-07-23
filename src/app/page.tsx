'use client';

import about from 'img/assets/about.png';
import explorer from 'img/assets/explorer.png';

import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Form } from '@/components/Form/Form';
import Section from '@/components/Section/Section';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section
          name="promo"
          title="Explore and Travel"
          content={
            <>
              <p>Holiday finder</p>
              <Form />
            </>
          }
          image={{
            src: explorer,
            width: 506,
            height: 483,
            alt: 'explorer',
            quality: 100,
          }}
          isMain={true}
          className="wrapper layout-rows"
        />
        <Section
          name="about"
          title="A new way to explore the world"
          content={
            <>
              <p>
                For decades travellers have reached for Lonely Planet books when
                looking to plan and execute their perfect trip, but now, they
                can also let Lonely Planet Experiences lead the way
              </p>
              <button className="colored">Learn more</button>
            </>
          }
          image={{
            src: about,
            width: 646,
            height: 524,
            alt: 'about',
            quality: 100,
          }}
          reverseLayout={true}
          isLast={true}
          className="wrapper layout-rows"
        />
      </main>
      <Footer />
    </>
  );
}
