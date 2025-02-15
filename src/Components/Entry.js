import { useSearch } from "../context/SearchContext";
import posts from "../data/data.json";

export default function Entry() {
  const { searchQuery } = useSearch(); // Access the search query

  // Filter posts based on the search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="write-blog">
        <button
          className="createBlogButton"
          onClick={() => {
            window.location.href = "/create";
          }}
        >
          Create a Blog
        </button>
      </div>

      {/* Render dynamic posts */}
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div className="entry" key={post.id}>
            <div className="image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="text">
              <h2>{post.title}</h2>
              <p className="info">
                <span id="author">{post.author}</span>
                <time className="when">{post.date}</time>
              </p>
              <p className="summary">{post.summary}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="notfound" >No posts found.</p>
      )}
    </>
  );
}
