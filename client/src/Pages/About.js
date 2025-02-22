import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className='about-container p-5'>
      <div>
        <h2 className='text-center'>About Us</h2>
        {/* <p>Welcome to our blogging website! We are dedicated to providing you with the latest news, insights, and stories from various fields. Our team of passionate writers and contributors work tirelessly to bring you high-quality content that is both informative and engaging.</p>
      <p>Whether you are looking for tips on technology, lifestyle, health, or travel, we have something for everyone. Our mission is to create a platform where readers can find valuable information and share their thoughts and experiences.</p>
      <p>Thank you for visiting our website. We hope you enjoy reading our posts as much as we enjoy creating them for you!</p> */}
        <p>
          Welcome to <strong>My Blog</strong>, your go-to destination for
          insightful articles, engaging stories, and expert opinions on
          technology, lifestyle, health, or travel. We are passionate about
          sharing knowledge, sparking conversations, and building a community of
          curious minds.
        </p>
      </div>
      <div>
        <h3 className='text-center'>Our Mission</h3>
        <p>
          At <strong>My Blog</strong>, our mission is to provide high-quality,
          informative, and inspiring content that keeps you informed and
          entertained. We believe in the power of storytelling and thoughtful
          analysis to bring valuable insights to our readers.
        </p>
      </div>
      <div>
        <h3 className='text-center'>What We Offer</h3>
        <div className='card-container'>
          <div className='card '>
            <h6>Expert Insights</h6>
            <p>
              Our team of writers and contributors are knowledgeable and
              passionate about their fields, bringing you well-researched and
              thought-provoking content.
            </p>
          </div>
          <div className='card'>
            <h6>Trending Topics:</h6>
            <p>
              We keep up with the latest trends and developments, ensuring that
              you stay ahead in your area of interest.
            </p>
          </div>
          <div className='card'>
            <h6>Community Engagement: </h6>
            <p>
              We love hearing from our readers! Share your thoughts, ask
              questions, and be part of the discussion in our comments section
              and social media platforms.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className='text-center'>Meet Our Team</h3>
        <p>
          We are a group of enthusiastic writers, industry experts, and
          storytellers dedicated to bringing you fresh and compelling content.
          Whether you’re looking for practical advice, in-depth analyses, or
          just an interesting read, our team is here to deliver.
        </p>
      </div>
      <div>
        <h3 className='text-center'>Join Our Journey</h3>
        <p>
          We invite you to be part of our growing community. Subscribe to our
          newsletter, follow us on social media, and never miss an update from{' '}
          <strong>My Blog</strong>.
        </p>
        <p>
          Thank you for being here and supporting our passion for blogging.
          Happy reading!
        </p>
      </div>
      <div className='text-center mt-6 view'>
        <a href='https://blogging-silk.vercel.app'>Visit our Website</a>
      </div>
    </section>
  );
};

export default About;
