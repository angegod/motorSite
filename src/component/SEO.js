import { Helmet } from 'react-helmet';

const SEO = ({
  title = "測試標題",
  description = "測試content",
  url,
  children
}) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    {children}
    {
      url ? (
        <link rel="canonical" href={url} />
      ) : ""
    }
  </Helmet>
)

export default SEO;