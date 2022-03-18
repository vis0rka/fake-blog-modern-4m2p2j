import React, { Component, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import { getPost, IPostWithUser } from './fakePost';
import { Post } from './Post';

function App() {
  const [data, setData] = React.useState<IPostWithUser[]>();
  const [loading, setLodaing] = React.useState<boolean>(true);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const result = await getPost(5);

        const resultWithUser: IPostWithUser[] = result
          .map((post) => {
            return {
              ...post,
              user: 'John',
            };
          })
          .sort((a, b) => b.date.getTime() - a.date.getTime());

        setData(resultWithUser);
        setLodaing(false);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div className="wrapper">
      {data.map((post: IPostWithUser) => (
        <Post
          title={post.title}
          body={post.body}
          date={post.date}
          user={post.user}
        />
      ))}
    </div>
  );
}

render(<App />, document.getElementById('root'));
