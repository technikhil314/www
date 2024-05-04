import { BlogPostProvider } from "@docusaurus/theme-common/internal";
import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import Layout from "@theme/Layout";
import TOC from "@theme/TOC";
import React from "react";
import BackTo from "./backTo";
import Comments from "./comments";

function BlogPostPage(props) {
  const { content: BlogPostContents } = props;
  const { frontMatter, metadata, ...restContent } = BlogPostContents;
  const { title, description, nextItem, prevItem } = metadata;
  const { hide_table_of_contents: hideTableOfContents } = frontMatter;
  return (
    <Layout
      title={title}
      description={description}
      wrapperClassName="blog-wrapper "
    >
      <BlogPostProvider content={props.content} isBlogPostPage>
        {BlogPostContents && (
          <div className="container margin-vert--lg">
            <div className="justify-center row">
              <main className="relative col max-w-blog">
                <BackTo url="/blog" text="Back to blog list"></BackTo>
                <BlogPostItem
                  frontMatter={frontMatter}
                  metadata={metadata}
                  isBlogPostPage
                  {...restContent}
                >
                  <BlogPostContents />
                </BlogPostItem>
                <div className="margin-top--md">
                  <BackTo url="/blog" text="Back to blog list"></BackTo>
                </div>
                {(nextItem || prevItem) && (
                  <div className="margin-vert--lg">
                    <BlogPostPaginator
                      nextItem={nextItem}
                      prevItem={prevItem}
                    />
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
      </BlogPostProvider>
    </Layout>
  );
}

export default BlogPostPage;
