import { Helmet } from "react-helmet-async";
import type { Metadata } from "../lib/definitions";

export default function PageMetadata({
  title,
  description,
  keywords,
}: Metadata) {
  const formattedKeywords = keywords?.join(", ");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={formattedKeywords} />}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
  );
}
