import { useState, useMemo, FormEvent } from "react";
import { faker } from "@faker-js/faker";

type Post = {
  title: string;
  body: string;
};

function createRandomPost(): Post {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

// SLOW COMPONENT
const Archive = ({
  archiveOptions: { show },
}: {
  archiveOptions: { show: boolean };
}) => {
  const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 300000 }, () => createRandomPost())
  );

  return (
    <aside>
      {show ? (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              {/* <button onClick={() => onAddPost(post)}>Add as new post</button> */}
            </li>
          ))}
        </ul>
      ) : (
        false
      )}
    </aside>
  );
};

const Test = () => {
  const [posts, setPosts] = useState<Post[]>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const archiveOptions = useMemo(() => {
    return {
      show: false,
      title: `Post archive in addition to ${posts.length} main posts.`,
    };
  }, [posts.length]);

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post: Post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  const createPost = (e: FormEvent) => {
    e.preventDefault();
    setPosts((oldPosts) => [...oldPosts, { title, body }]);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <section>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>
      <section>
        <form onSubmit={createPost}>
          <div>
            <label htmlFor="title">title</label>
            <input
              name="title"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="body"></label>
            <input
              name="body"
              id="body"
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button>Create</button>
        </form>
      </section>
      <aside>
        <ul>
          {searchedPosts.map((post, idx) => (
            <li key={idx}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </aside>
      <Archive archiveOptions={archiveOptions} />
    </>
  );
};
