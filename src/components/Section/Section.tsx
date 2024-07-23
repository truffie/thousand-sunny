'use client';

import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './Section.module.css';

interface imageSettings {
  width: number;
  height: number;
  src: StaticImageData;
  alt: string;
  quality?: number;
}

interface SectionProps {
  name: string;
  title: string;
  content: ReactNode;
  image: imageSettings;
  className?: string;
  imageQuality?: number;
  reverseLayout?: boolean;
  isMain?: boolean;
  isLast?: boolean;
}

const Section: React.FC<SectionProps> = ({
  name,
  title,
  content,
  image,
  className = '',
  reverseLayout = false,
  isMain = false,
  isLast = false,
}) => {
  return (
    <section
      style={{ paddingBottom: isLast ? '12rem' : '7rem' }}
      className={`${styles[name]} ${className} ${
        reverseLayout ? styles.reverse : ''
      }`}
    >
      <div className={`${styles.content} layout-columns`}>
        {isMain ? <h1>{title}</h1> : <h2>{title}</h2>}
        {content}
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
    </section>
  );
};

export default Section;
