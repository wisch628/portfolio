import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import SkeletonLoader from "tiny-skeleton-loader-react"
import { motion, useAnimation } from "framer-motion"
import { StyledSocialProfile } from "../social";
import Context from "../../context"
import ContentWrapper from "../../styles/contentWrapper"
import Underlining from "../../styles/underlining"
import { parseDate } from "../../utils"
import { projects, shownArticles} from "../../../config"
// import { rssFeed,  } from "../../../config"
import { lightTheme, darkTheme } from "../../styles/theme"

const StyledSection = motion.custom(styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`)

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
    .articles {
      display: flex;
      justify-content: flex-start;
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      margin: -2rem 0 0 0;
      padding: 0 2rem;
      &::-webkit-scrollbar {
        display: none;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 0 1rem;
      }
      /* Show scrollbar if desktop and wrapper width > viewport width */
      @media (hover: hover) {
        scrollbar-color: ${({ theme }) => theme.colors.scrollBar} transparent; // Firefox only
        &::-webkit-scrollbar {
          display: block;
          -webkit-appearance: none;
        }

        &::-webkit-scrollbar:horizontal {
          height: 0.8rem;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 8px;
          border: 0.2rem solid ${({ theme }) => theme.colors.background};
          background-color: ${({ theme }) => theme.colors.scrollBar};
        }

        &::-webkit-scrollbar-track {
          background-color: ${({ theme }) => theme.colors.background};
          border-radius: 8px;
        }
      }
    }
    .card {
      // width: 16.25rem;
      width: 280px;
      height: 12rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
      margin: 2rem 1rem;
      box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadow};
      border-radius: ${({ theme }) => theme.borderRadius};
      background: ${({ theme }) => theme.colors.card};
      transition: box-shadow 0.3s ease-out;
      &:hover {
        box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadowHover};
      }
      &:hover ${Underlining} {
        box-shadow: inset 0 -1rem 0 ${({ theme }) => theme.colors.secondary};
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        margin: 2rem 2.5rem 2rem 0;
      }
      .category {
        font-weight: 700;
      }
      .title {
        color: ${({ theme }) => theme.colors.primary};
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
      }

      img {
        width: 200px;
        height: auto;
      }
      .description {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.subtext};
      }
    }
  }
`

const Articles = () => {
  const MAX_ARTICLES = shownArticles

  const { isIntroDone, darkMode } = useContext(Context).state
  const [articles, setArticles] = useState()
  const articlesControls = useAnimation()
  const sControls = useAnimation()
  // Load and display articles after the splashScreen sequence is done
  // useEffect(() => {
  //   const loadArticles = async () => {
  //     if (isIntroDone) {
  //       await articlesControls.start({
  //         opacity: 1,
  //         y: 0,
  //         transition: { delay: 1 },
  //       })
  //       // fetch(mediumRssFeed, { headers: { Accept: "application/json" } })
  //       //   // fetch(rssFeed, { headers: { Accept: "application/json" } })
  //       //   .then(res => res.json())
  //       //   // Feed also contains comments, therefore we filter for articles only
  //       //   .then(data => data.items.filter(item => item.categories.length > 0))
  //       //   // .then(data => data.items.filter(item => item.title.length > 0))
  //       //   .then(newArticles => newArticles.slice(0, MAX_ARTICLES))
  //       //   .then(articles => setArticles(articles))
  //       //   .catch(error => console.log(error))
  //     }
  //   }
  //   setArticles(projects)
  //   loadArticles()
  // }, [isIntroDone, articlesControls, MAX_ARTICLES])

  return (
    <StyledSection
      id="articles"
      initial={{ opacity: 100, y: 20 }}
      animate={articlesControls}
    >
      <StyledContentWrapper>
        <h3 className="section-title">Latest Projects</h3>
        <div className="articles">
          {projects
            ? projects.map(item => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title={item.name}
                  aria-label={item.url}
                  key={item.url}
                >
                  <div className="card">
                    <span className="category">
                      <Underlining color="tertiary" hoverColor="secondary">
                        {item.name}
                      </Underlining>
                    </span>
                    {/* <h4 className="title"></h4> */}
                    {/* <img src={window.location.origin + item.img} /> */}
                    <p className="description">{item.description}</p>
                    <motion.div animate={sControls}>
                      <StyledSocialProfile
                        key={item.url}
                        href={item.url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        fontWeight="auto"
                        aria-label={item.url}
                        fontSize=".95rem" 
                        padding=".3rem 1.25rem"
                        width="auto"> 
                        Visit
                        </StyledSocialProfile>
                     </motion.div>
                  </div>
                </a>
              ))
            : [...Array(MAX_ARTICLES <= 3 ? MAX_ARTICLES : 3)].map((i, key) => (
                <div className="card" key={key}>
                  <SkeletonLoader
                    height="1.5rem"
                    style={{ marginBottom: ".5rem" }}
                    background={
                      darkMode
                        ? darkTheme.colors.tertiary
                        : lightTheme.colors.tertiary
                    }
                  />
                  <SkeletonLoader
                    height="4rem"
                    background={
                      darkMode
                        ? darkTheme.colors.tertiary
                        : lightTheme.colors.tertiary
                    }
                  />
                  <SkeletonLoader
                    height=".75rem"
                    width="50%"
                    style={{ marginTop: ".5rem" }}
                    background={
                      darkMode
                        ? darkTheme.colors.tertiary
                        : lightTheme.colors.tertiary
                    }
                  />
                </div>
              ))}
        </div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Articles
