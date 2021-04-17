import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import IconEdit from "@theme/IconEdit";
import Layout from "@theme/Layout";
import TOC from "@theme/TOC";
import React from "react";
import BackTo from "./backTo";
import Comments from "./comments";

function BlogPostPage(props) {
  const { content: BlogPostContents } = props;
  const { frontMatter, metadata } = BlogPostContents;
  const { title, description, nextItem, prevItem, editUrl } = metadata;
  const { hide_table_of_contents: hideTableOfContents } = frontMatter;

  return (
    <Layout
      title={title}
      description={description}
      wrapperClassName="blog-wrapper "
    >
      {BlogPostContents && (
        <div className="container margin-vert--lg">
          <div className="row justify-center">
            <main className="col position--relative max-w-blog">
              <BackTo url="/blog" text="Back to blog list"></BackTo>
              <BlogPostItem
                frontMatter={frontMatter}
                metadata={metadata}
                isBlogPostPage
              >
                <BlogPostContents />
              </BlogPostItem>
              <BackTo url="/blog" text="Back to blog list"></BackTo>
              <div>
                {editUrl && (
                  <a href={editUrl} target="_blank" rel="noreferrer noopener">
                    <IconEdit />
                    Edit this page
                  </a>
                )}
              </div>
              {(nextItem || prevItem) && (
                <div className="margin-vert--lg">
                  <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
                </div>
              )}
              <Comments />
            </main>
            {!hideTableOfContents && BlogPostContents.toc && (
              <div className="col col--2">
                <TOC toc={BlogPostContents.toc} />
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default BlogPostPage;
