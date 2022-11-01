import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "xjsvwda9",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skRNxSOh2DZCASd2bI8EilJ62EmFF7ThZ9HkBHBXEOr56SGh0uERnfEcFaSSgw8wFtdvl0J0zX9TjO49HbXMnhp6w9n57SimbsKizr10pDfey9IUkG0SmvFFVGSmJXyVxVG5FlmnWivJpg2WlGThzXd8wLirGWUfgw9ZrBfemdmuxLAeJs1C",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
