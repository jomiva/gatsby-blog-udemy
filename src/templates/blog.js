import React from 'react';
import { graphql } from 'gatsby';
import BlogLayout from '../layouts/BlogLayout';
import PostList from '../components/PostList/PostList';
import Pagination from '../components/Pagination/Pagination';
import SEO from '../components/seo';
import imageBlog from '../images/web-programacion.jpg';

const Blog = ({ data, pageContext }) => {
  const posts = data.allStrapiPost.nodes;

  return (
    <BlogLayout>
      <SEO
        title="Blog sobre programación"
        description="Web sobre Desarrollo web,programación JavaScript, React,Node, Electron..."
        image={imageBlog}
      />
      <PostList posts={posts} />
      <Pagination pageContext={pageContext} />
    </BlogLayout>
  );
};

export default Blog;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allStrapiPost(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        id
        title
        seoTitle
        url
        seoDescription
        content
        createdAt
        thumbnail {
          publicURL
        }
      }
    }
  }
`;
