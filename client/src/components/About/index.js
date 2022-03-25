import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
         Hey there! My name is Kieran, I am an graduating senior at the University of St Thomas in St. Paul. 
         I am finishing up my bachelors degree in financial management and am currently enrolled in a full 
         stack web development boot-camp through the University of Minnesota.
         If you have any questions regarding my work or just want to chat, feel free to reach out to me from the Contact tab!
        </p>
      </div>
    </section>
  );
}

export default About;
