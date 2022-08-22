import ContentLoader from "react-content-loader";

const DescriptionLoader = () => (
  <ContentLoader
    width={420}
    height={250}
    viewBox="0 0 420 250"
    backgroundColor="#ecebeb"
    foregroundColor="#d6d2d2"
  >
    <rect x="120" y="0" rx="10" ry="10" width="400" height="250" />
  </ContentLoader>
);

DescriptionLoader.metadata = {
  name: "RJavlonbek",
  github: "RJavlonbek",
  description: "Blog item",
  filename: "BlogItem",
};

export default DescriptionLoader;
