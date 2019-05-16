import { Fragment, Component } from "react";
import axios from "axios";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default class extends Component {
  // Resolve promise and set initial props.
  static async getInitialProps() {
    // Make request for posts.
    const response = await axios.get(
      "http://wp-next-from-scratch.local/wp-json/wp/v2/posts"
    );

    // Return response to posts object in props.
    return {
      posts: response.data
    };
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <div style={{ padding: 20, background: "mediumorchid" }}>
          <h2>SERVER RENDERED</h2>
        </div>
        <h1>Our Posts Page!</h1>
        <ul>
          {this.props.posts.map(post => {
            return (
              <li
                key={post.id}
                style={{
                  background: "ghostwhite",
                  padding: 20,
                  margin: 10
                }}
              >
                <h2>{post.title.rendered}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered
                  }}
                />
                <h3>
                  <span>Render me on the </span>
                  <Link prefetch href={`/posts/${post.slug}`}>
                    <a style={{ color: "mediumorchid" }}>server</a>
                  </Link>
                  <span> or the </span>
                  <Link prefetch href={`/posts-on-client/${post.slug}`}>
                    <a style={{ color: "dodgerblue" }}>client</a>
                  </Link>
                </h3>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}
