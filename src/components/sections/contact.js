import React, { useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { motion } from "framer-motion"

import { useOnScreen } from "../../hooks"
import ContentWrapper from "../../styles/contentWrapper"
import Underlining from "../../styles/underlining"
import Social from "../social"

const StyledSection = styled(motion.section)`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
  display: flex;
  justify-content: center;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    /* Don't stretch container over the full page width */
    max-width: 45rem;
    height: 100%;
    display: inline-block;
    p {
      margin-top: 0;
      margin-bottom: 0;
      max-width: 500px;
    }
    .profile {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 3rem;
      margin-bottom: 2rem;
      @media (min-width: 526px) {
        align-items: center;
        margin-bottom: 3rem;
        justify-content: flex-start;
      }
      .avatar {
        width: 100%;
        max-width: 8.75rem;
        margin-right: 4rem;
        margin-bottom: 2rem;
        border-left: 2px solid black;
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          margin-bottom: 0;
        }
      }
      .details {
        font-size: 1.125rem;
        line-height: 2rem;
      }
    }
  }
`

const Contact = ({ content }) => {
  const { body, frontmatter } = content[0].node

  // Required for animation
  const ref = useRef()
  const onScreen = useOnScreen(ref)
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <StyledSection
      id="contact"
      ref={ref}
      variants={variants}
      animate={onScreen ? "visible" : "hidden"}
    >
      <StyledContentWrapper>
        <h3>{frontmatter.title}</h3>
        <p>{frontmatter.subtitle}</p>
        <MDXRenderer>{body}</MDXRenderer>
        <div className="profile">
          <img className="avatar" src="/sideEmoji.png" />
          <div className="details">
            <strong>{frontmatter.name}</strong>
            <br />
            <a
              href={`https://www.linkedin.com/in/hannah-wischnia/`}
              target="_blank"
            >
              <Underlining highlight>
                linkedin.com/in/hannah-wischnia
              </Underlining>
            </a>
            <br />
            <a href={`mailto:hannahwischnia@gmail.com}`} target="_blank">
              <Underlining highlight>{frontmatter.email}</Underlining>
            </a>
          </div>
        </div>
        {/* <Social width="9rem" padding="0.5rem 1.25rem" withIcon /> */}
      </StyledContentWrapper>
    </StyledSection>
  )
}

Contact.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Contact
