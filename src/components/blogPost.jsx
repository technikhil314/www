import BlogPostItem from "@theme/BlogPostItem";
import BlogPostPaginator from "@theme/BlogPostPaginator";
import BlogSidebar from "@theme/BlogSidebar";
import IconEdit from "@theme/IconEdit";
import Layout from "@theme/Layout";
import TOC from "@theme/TOC";
import React from "react";
import Comments from "./comments";

function BlogPostPage(props) {
  const { content: BlogPostContents, sidebar } = props;
  const { frontMatter, metadata } = BlogPostContents;
  const { title, description, nextItem, prevItem, editUrl } = metadata;
  const { hide_table_of_contents: hideTableOfContents } = frontMatter;

  return (
    <Layout
      title={title}
      description={description}
      wrapperClassName="blog-wrapper"
    >
      {BlogPostContents && (
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--2">
              <BlogSidebar sidebar={sidebar} />
            </div>
            <main className="col col--8 position--relative">
              <BlogPostItem
                frontMatter={frontMatter}
                metadata={metadata}
                isBlogPostPage
              >
                <BlogPostContents />
              </BlogPostItem>
              <div>
                {editUrl && (
                  <a href={editUrl} target="_blank" rel="noreferrer noopener">
                    <IconEdit />
                    Edit this page
                  </a>
                )}
              </div>
              {(nextItem || prevItem) && (
                <div className="margin-vert--xl">
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
