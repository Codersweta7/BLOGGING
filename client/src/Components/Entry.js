import { useSearch } from '../context/SearchContext';
import posts from '../data/data.json';
import { useState } from 'react';

export default function Entry() {
  const { searchQuery } = useSearch(); // Access the search query
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Filter posts based on the search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const buildBlogPosts = (posts) => {
    return posts.map((post) => (
      <div className='post-entry container p-10 md:w-[80%]' key={post.id}>
        <div className='p-4 blog-light rounded-md'>
          <h2 className='text-xl md:text-4xl font-bold pl-4'>{post.title}</h2>
          <p className='info pt-1 ml-5  md:text-lg'>
            Writer : <strong>{post.author}</strong> | Date :{' '}
            <strong>{post.date}</strong>
          </p>
          <p className='summary ml-5 md:text-md'>{post.summary}</p>
          <div className='flex justify-center '>
            {post.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt='Gallery'
                className='w-[375px] md:w-[60%] pd-5 rounded-xl p-2 object-cover cursor-pointer'
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className='mt-20'>
      <div className='flex flex-col items-center write-blog container'>
        <button
          className='createBlogButton text-lg rounded-lg font-bold w-[50%]'
          onClick={() => {
            window.location.href = '/create';
          }}
        >
          Create a Blog
        </button>
      </div>

      {/* Render dynamic posts */}
      <div className='container'>
        {filteredPosts.length > 0 ? (
          buildBlogPosts(filteredPosts)
        ) : (
          <p className='notfound'>No posts found.</p>
        )}
      </div>
    </div>
  );
}