import React from "react";

import ExternalLink from "../ExternalLink";
import { config } from "../../../data";

import "./index.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="architecture">
            Build with&nbsp;
            <ExternalLink href="https://www.gatsbyjs.org/" title="GatsbyJS" />
            &nbsp;and&nbsp;
            <ExternalLink
              href="https://reactjs.org/"
              title={`React ${React.version}`}
            />
            <br />
            The code is open source and available at&nbsp;
            <ExternalLink
              href="https://github.com/steadyzest/gatsby-starter-steadyzest-blog"
              title="steadyzest/gatsby-starter-steadyzest-blog"
            />
          </p>
          <p className="copyright">
            Copyright&nbsp;
            <ExternalLink
              href="https://steadyzest.github.io/"
              title="&copy;steadyzest"
            />
            &nbsp;
            {/* {config.title} */}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
