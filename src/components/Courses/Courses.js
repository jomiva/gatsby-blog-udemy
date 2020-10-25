import React from 'react';
import { Image } from 'semantic-ui-react';
import { map } from 'lodash';
import { coursesData } from '../../data/data';
import './Courses.scss';

const Courses = () => {
  return (
    <div className="courses">
      {map(coursesData, (course, index) => (
        <a
          key={index}
          href={course.url}
          rel="noopener noreferrer"
          target="_blank"
          className="courses__item"
        >
          <Image src={course.image} alt={course.title} title={course.image} />
        </a>
      ))}
    </div>
  );
};

export default Courses;
