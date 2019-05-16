import { Component, Fragment } from "react";
import axios from "axios";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default class extends Component {
  // SERVER RENDERED FROM API

  // Resolve promise and set initial props.
  static async getInitialProps(context) {
    const slug = context.query.slug;

    // Make request for posts.
    const response = await axios.get(
      `https://wp-next-demo.armyofbees.net/wp-json/wp/v2/posts?slug=${slug}`
    );

    // Return our only item in array from response to posts object in props.
    return {
      post: response.data[0]
    };
  }

  render() {
    const { post } = this.props;
    return (
      <Fragment>
        <Navigation />
        <div style={{ padding: 20, background: "mediumorchid" }}>
          <h2>Server-rendered</h2>
        </div>
        <h1>{post.title.rendered}</h1>
        <article
          className="entry-content"
          dangerouslySetInnerHTML={{
            __html: post.content.rendered
          }}
        />
        <h2>
          <Link prefetch href={`/posts-on-client/${post.slug}`}>
            <a style={{ color: "dodgerblue" }}>Render me from the client</a>
          </Link>
        </h2>
      </Fragment>
    );
  }
}
