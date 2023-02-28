import React from "react";
import { format } from "date-fns";
import Head from "next/head";

import { Article, Title, Content } from "@/components";
import styles from "./styles.module.scss";
import { client } from "@/lib/client";

const Post = ({ post }) => {
  const date = format(new Date(post.publishedDate), "dd MMMM, yyyy");
  return (
    <Article backUrl="/" className={styles.post}>
      <Head>
        <title>{post.meta_title} | Thoughts Unleashed</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Title className={styles.postTitle}>{post.title}</Title>
      <p className={styles.postDate}>{date}</p>
      <Content body={post.body} />
    </Article>
  );
};

export default Post;

export async function getStaticPaths() {
  const query = `*[_type == "post"]{
        slug{
            current
        }
    }`;
  const posts = await client.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
  const post = await client.fetch(query);
  return {
    props: {
      post,
    },
  };
}
