import React from 'react';
import styled from 'styled-components';
import Posts from '../Components/posts';
import post from '../api/post.json'

const Page = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available; /* mobile viewport bug fix */
  overflow: auto;
  scroll-behavior: smooth;
`;

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  /* Fake padding-right */
  &::after {
    content: '';
    position: absolute;
    display: block;
    flex-shrink: 0;
    height: 1px;
  }

  /* Hide the others cards */
  > button:not(:first-child) {
    visibility: visible; /* switch to 'visible' */
  }
`;

function Home() {
  return (
    <Page>
      <Grid>
        {post.map((post, index) => (
          <Posts
          author={post.author}
          usedlan={post.usedlan}
          title={post.title}
          description={post.description}
          image={post.image} />
        ))}
      </Grid>
    </Page>
  );
}

export default Home;
