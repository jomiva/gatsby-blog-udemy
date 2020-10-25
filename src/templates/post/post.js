import React from 'react';
import SEO from '../../components/seo';
import BlogLayout from '../../layouts/BlogLayout';
import './post.scss';

const Post = ({ pageContext }) => {
  const { data: post } = pageContext;
  console.log(post);
  return (
    <BlogLayout className="post">
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        image={post.thumbnail.publicURL}
      />
      <h1>{post.title}</h1>
      <div className="markdown-body">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </BlogLayout>
  );
};

export default Post;
