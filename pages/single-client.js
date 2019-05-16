import { Component, Fragment } from "react";
import axios from "axios";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default class extends Component {
  // CLIENT RENDERED FROM API WITH LOADING STATE

  state = { loading: true };

  static async getInitialProps(context) {
    return {
      slug: context.query.slug
    };
  }

  async componentDidMount() {
    // Make request for posts.
    const response = await axios.get(
      `http://wp-next-from-scratch.local/wp-json/wp/v2/posts?slug=${
        this.props.slug
      }`
    );

    const post = response.data[0];

    this.setState({
      post,
      loading: false
    });
  }

  render() {
    const { loading, post } = this.state;
    if (loading)
      return (
        <Fragment>
          <Navigation />
          <div style={{ padding: 10, background: "dodgerblue" }}>
            <h2>Client-rendered</h2>
          </div>
          <h1>
            <span style={{ fontSize: 60 }}>🤔</span> Loading from API...
          </h1>
        </Fragment>
      );

    return (
      <Fragment>
        <Navigation />
        <div style={{ padding: 10, background: "dodgerblue" }}>
          <h2>Client-rendered</h2>
        </div>
        <h1>{post.title.rendered}</h1>
        <article
          className="entry-content"
          dangerouslySetInnerHTML={{
            __html: post.content.rendered
          }}
        />
        <h2>
          <Link prefetch href={`/posts/${post.slug}`}>
            <a style={{ color: "mediumorchid" }}>Render me from the server</a>
          </Link>
        </h2>
      </Fragment>
    );
  }
}
