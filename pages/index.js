import React, { useState } from "react";

import {
  Socials,
  Cover,
  Section,
  Title,
  PostGrid,
  Post,
  Button,
} from "@/components";
import Head from "next/head";

import { loadData } from "./api/post";

const LOAD_MORE_STEP = 8;

const Home = ({ initialPosts, total }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [loaded, setLoaded] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const showLoadingButton = total > loaded;

  const getMorePosts = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `/api/post?start=${loaded}&end=${loaded + LOAD_MORE_STEP}`
      ).then((res) => res.json());
      setLoaded(loaded + LOAD_MORE_STEP);
      setPosts([...posts, ...data.posts]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        marginBottom: "2rem",
      }}
    >
      <Head>
        <title>Thoughts Unleashed</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Section>
        <Cover />
        <Socials />
      </Section>
      <Section>
        <Title>Read some stuff</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post key={post._id} {...post} />
          ))}
        </PostGrid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {showLoadingButton && (
            <Button disabled={false} onClick={getMorePosts}>
              Load More
            </Button>
          )}
        </div>
      </Section>
    </div>
  );
};

export async function getServerSideProps() {
  const { posts, total } = await loadData(0, LOAD_MORE_STEP);
  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
}

export default Home;
