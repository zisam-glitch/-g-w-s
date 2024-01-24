import { useState, useEffect } from "react";
import ModalBox from "./ModalBox";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as contentful from "contentful";

const client = contentful.createClient({
  space: "5m3h1k8mc33m",
  accessToken: "bNLL6JrS-qwtgfUmkzy3RL5Go2Hc45pRzjXI1ZRGoRY",
});


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await client.getEntries({
          content_type: "blogPost",
          order: "-fields.publishDate", // Adjust as needed
        });
  
        // Ensure that response.items is an array before setting the state
        setBlogs(response.items || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
  
    fetchBlogs();
  }, []);

  const hidden = (value) => (value === modal ? "" : "news_hidden_details");

  const renderRichText = (richText) => {
    return documentToReactComponents(richText);
  };
  return (
    <div className="aali_tm_section" id="blog">
      <div className="aali_tm_news">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <span>Latest Updates</span>
            <h3>From My Blog</h3>
            <p>
              We offer high quality products for competitive prices. Our main
              goal is customer satisfaction
            </p>
          </div>
          <div className="news_list">
            <ul>
              {blogs.map((blog, index) => (
                <li className="wow fadeInLeft" data-wow-duration="1s" key={index}>
                  <div className="list_inner">
                    <div className="image">
                      <img src={blog.fields.image.fields.file.url} alt={blog.fields.title} />
                      <div className="main" data-img-url={blog.fields.image.fields.file.url} />
                      <a
                        className="aali_tm_full_link"
                      
                        onClick={() => setModal(index)}
                      />
                    </div>
                    <div className="details">
                      <span className="category">
                        <a>{blog.fields.category}</a>
                      </span>
                      <h3 className="title">
                        <a onClick={() => setModal(index)}>
                          {blog.fields.title}
                        </a>
                      </h3>
                      <span className="date">{blog.fields.publishDate}</span>
                    </div>
                    <div className="button">
                      <div className="aali_tm_learn_more">
                        <a onClick={() => setModal(index)}>
                          Full Story
                        </a>
                      </div>
                    </div>
                    <div className={hidden(index)}>
                      <ModalBox close={() => setModal(null)}>
                        <div className="news_popup_informations">
                          <div className="image">
                            <img src={blog.fields.image.fields.file.url} alt={blog.fields.title} />
                            <div className="main" data-img-url="img/news/1.jpg" />
                          </div>
                          <div className="details">
                            <span className="category">
                              <a>{blog.fields.category}</a>
                            </span>
                            <h3 className="title">
                              <a>{blog.fields.title}</a>
                            </h3>
                            <span className="date">{blog.fields.publishDate}</span>
                            <div />
                          </div>
                          <div className="text">
                          {renderRichText(blog.fields.content)}
                          </div>
                        </div>
                      </ModalBox>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
