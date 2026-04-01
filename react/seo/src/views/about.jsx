import { Helmet } from "react-helmet"
export default function About() {
  return (
    <>
     <Helmet>
      <title>About</title>
      <meta name="description" content="About content" />
      <meta name="keywords" content="react, meta tags, seo" />
      <meta name="author" content="Your Name" />
      <meta property="og:image" content="https://popupsmart.com/blog/user/pages/365.free-keyword-research-tools/Free-keyword-research-tools-cover.png" />
      <meta property="og:title" content="Başlığınız"/>
      <meta property="og:description" content="Sayfanın tam açıklaması."/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
    </Helmet>
      <h1>About</h1>
    </>
  )
}
