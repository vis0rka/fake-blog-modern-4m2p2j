import React, { Component, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import { getPost, IPostWithUser } from './fakePost';
import { Post } from './Post';

function App() {
  const [data, setData] = React.useState<IPostWithUser[]>();
  const [loading, setLodaing] = React.useState<boolean>(true);
  const [error, setError] = React.useState()

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
        setError('Something went wrong')
      }
    };

    getData();
  }, []);

  if(error) {
    return <div className='wrapper'>{error}</div>
  }

  if (loading) {
    return <div className='wrapper'>...loading</div>;
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
