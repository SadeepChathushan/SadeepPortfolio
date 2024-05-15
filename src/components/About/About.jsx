import React from 'react';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section>
        <h2>About</h2>
        <div>
            <img src={getImageUrl("about/image")} alt="about image" />
        <ul>
            <li>
                <img src={getImageUrl("about/image")} alt="cursor icon" />
                <div>
                    
                </div>
            </li>
        </ul>

        </div>
    </section>
  );
};
