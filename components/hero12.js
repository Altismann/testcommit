import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Hero12 = (props) => {
  return (
    <>
      <div className="hero12-header76">
        <a href="https://dyoid.webflow.io/category/all" className="hero12-link">
          <h1 className="hero12-text1">
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero12-text2 thq-heading-1">
                  Visit our new site
                </h1>
              </Fragment>
            )}
          </h1>
        </a>
        <div className="hero12-max-width thq-section-max-width">
          <img
            alt={props.image3Alt}
            src={props.image3Src}
            className="hero12-placeholder-image thq-img-ratio-1-1"
          />
        </div>
      </div>
      <style jsx>
        {`
          .hero12-header76 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: 1006px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .hero12-link {
            display: contents;
          }
          .hero12-text1 {
            text-decoration: none;
          }
          .hero12-max-width {
            width: 570px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .hero12-placeholder-image {
            width: 515px;
            height: 437px;
            align-self: stretch;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero12-text2 {
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
            .hero12-header76 {
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
            .hero12-max-width {
              align-self: center;
              flex-direction: column;
            }
            .hero12-placeholder-image {
              width: 780px;
              height: 663px;
              align-self: center;
            }
            .hero12-text2 {
              height: 312px;
              margin-top: 53px;
            }
          }
          @media (max-width: 767px) {
            .hero12-placeholder-image {
              width: 100%;
              height: 752px;
              align-self: center;
            }
            .hero12-text2 {
              width: 631px;
              height: 204px;
              margin-top: var(--dl-space-space-threeunits);
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .hero12-placeholder-image {
              width: 424px;
              height: 387px;
              align-self: center;
              margin-top: 220px;
            }
            .hero12-text2 {
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

Hero12.defaultProps = {
  image3Src: '/fractal_tera_1-1400w.png',
  image3Alt: 'Hero Image',
  heading1: undefined,
}

Hero12.propTypes = {
  image3Src: PropTypes.string,
  image3Alt: PropTypes.string,
  heading1: PropTypes.element,
}

export default Hero12
