'use client';
import style from './Form.module.css';

import { useState } from 'react';

interface formFields {
  location: string;
  activity: string;
  grade: string;
  date: string | undefined;
}

export const Form: React.FC = () => {
  const formFieldsArray: (keyof formFields)[] = [
    'location',
    'activity',
    'grade',
    'date',
  ];

  const [formData, setFormData] = useState<formFields>({
    location: '',
    activity: '',
    grade: '',
    date: new Date().toLocaleDateString(),
  });

  const formOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validationDate = (date: string): boolean => {
      const regexp =
        /^(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:20)[2-9][4-9])$/gi;
      return regexp.test(date);
    };
    const { name, value } = e.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="form">
      <div className="input-wrapper layout-rows">
        {formFieldsArray.map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field}
            value={formData[field] as string}
            className={style.input}
            onChange={formOnChange}
          />
        ))}
      </div>
      <button className="colored">Explore</button>
    </div>
  );
};
