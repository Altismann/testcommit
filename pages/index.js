import React, { Fragment } from 'react'
import Head from 'next/head'

import Hero12 from '../components/hero12'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Round Reliable Koala</title>
          <meta property="og:title" content="Round Reliable Koala" />
        </Head>
        <Hero12
          heading1={
            <Fragment>
              <span className="home-text thq-heading-1">
                Visit our new site
              </span>
            </Fragment>
          }
          image3Src="/fractal_tera_1-700w.png"
        ></Hero12>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text {
            color: #e2e2e2;
            width: 415px;
            display: inline-block;
            font-size: 110px;
            text-align: right;
            font-family: 'Poppins';
            line-height: 1.1;
            text-transform: uppercase;
            text-decoration: underline;
          }
          @media (max-width: 991px) {
            .home-text {
              height: 312px;
              margin-top: 53px;
            }
          }
          @media (max-width: 767px) {
            .home-text {
              width: 631px;
              height: 204px;
              margin-top: var(--dl-space-space-threeunits);
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .home-text {
              width: 426px;
              height: 285px;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
