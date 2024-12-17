import React from "react";
import { Helmet } from "react-helmet";
import Nav from "./Nav";

const LongFormPage = ({ title, description, content }) => {
  return (
    <div className="w-full">
                <Nav />

        {/* Meta Tags */}
        <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="/default-og-image.jpg" />
                <meta property="og:url" content={window.location.href} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
            </Helmet>
      {/* Hero Section */}

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4 md:px-8 leading-relaxed text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>

        <article className="prose lg:prose-lg max-w-none">
          {content}
        </article>
      </div>
    </div>
  );
};

export default LongFormPage;