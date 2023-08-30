import React from 'react';
import Article from '../../../components2/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Một số tài liệu tham khảo <br /> về công nghệ thực tế ảo 3D</h1>

    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <a href="http://www.3ders.org/articles/20181003-3d-printed-jellyfish-robots-created-to-monitor-fragile-coral-reefs.html" target="_blank"><Article imgUrl={blog01} date="Oct 28, 2021" text="The Types of 3D Printing Technology in 2022" /></a>
      </div>
      <div className="gpt3__blog-container_groupB">
        <a href="https://www.frontiersin.org/articles/10.3389/fphar.2020.00122/full" target="_blank"><Article imgUrl={blog02} date="March 20, 2020" text="Progressive 3D Printing Technology and Its Application in Medical Materials" /></a>
        <a href="http://www.3ders.org/articles/20181003-3d-printed-jellyfish-robots-created-to-monitor-fragile-coral-reefs.html" target="_blank"><Article imgUrl={blog03} date="Oct 3, 2018" text="3D printed jellyfish robots created to monitor fragile coral reefs" /></a>
        <a href="http://www.3ders.org/articles/20181001-paul-g-allens-stratolaunch-space-venture-uses-3d-printing-to-develop-pga-rocket-engine.html" target="_blank"><Article imgUrl={blog04} date="Oct 1, 2018" text="Paul G. Allen's Stratolaunch space venture uses 3D printing to develop PGA rocket engine" /></a>
        <a href="http://www.3ders.org/articles/20180403-mx3d-to-install-worlds-first-3d-printed-steel-bridge-over-amsterdam-canal.html" target="_blank"><Article imgUrl={blog05} date="Apr 3, 2018" text="MX3D to install world's first 3D printed steel bridge over Amsterdam canal" /></a>
      </div>
    </div>
  </div>
);

export default Blog;
