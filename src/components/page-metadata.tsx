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
    </Helmet>
  );
}
