/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        <Link
          aria-label="Link to the author's github repo for this website."
          href="https://github.com/spencer-tb"
        >
         @spencer-tb
        </Link>
      </div>
      <div>
        &copy; {new Date().getFullYear()} {siteTitle}
      </div>
    </footer>
  )
}

export default Footer
