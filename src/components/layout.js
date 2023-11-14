import React from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from "./sitemetadata"
import Erasmus from "../images/erasmus.png"
import Web from "../svg/link.svg"
import Facebook from "../svg/facebook.svg"
import Twitter from "../svg/twitter.svg"
import Instagram from "../svg/instagram.svg"

import Nav from "./nav"
import ModalContact from "./modalcontact"

import "./layout.css"
import "./cssvars.css"

const Layout = ({ children }) => {
  
  const { mainSite, twitter, facebook, instagram, contactEmail, contactUrl1, contactUrl2 } = useSiteMetadata()

  return (
    <>
      <div id="root">
        <Nav />
        <div id={`main-wrapper`}     >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
              display: `flex`,
              flexFlow: `row wrap`,
              justifyContent: `space-between`,
              borderTop: `1px solid var(--colorB)`,
              paddingTop: `var(--unit3)`
            }}
          >
            <div id="euf"
              style={{
                fontSize: '70%', 
                color: 'var(--colorAA)',
                marginBottom: "0.5rem" 
              }}
            >
              <div id="copyright">
                © {new Date().getFullYear()}, European Ultimate Federation
              </div>
              <div id="followUs"
                style={{
                  marginBottom: `var(--unit1)`
                }}
              >
                Follow the EUF: 
                <span id="eufLinks">
                  <a title="EUF Website" aria-label="EUF Website" href={mainSite}><Web></Web></a>
                  <a title="EUF Facebook page" aria-label="EUF Facebook page" href={facebook}><Facebook></Facebook></a>
                  <a title="EUF on Twitter" aria-label="EUF on Twitter" href={twitter}><Twitter></Twitter></a>
                  <a title="EUF Instagram page" aria-label="EUF Instagram page" href={instagram}><Instagram></Instagram></a>
                </span>
              </div>
              <div id="feedback">
                Any feedback on this page? <ModalContact url1={contactUrl1} url2={contactUrl2} email ={contactEmail} />
              </div>
            </div>  
            <img 
              src={Erasmus} 
              alt="With the support of the Erasmus+ Programme of the European Union." 
              style={{
                maxHeight:'90px',
                marginBottom: "0"
              }}
              />
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
