import Container from "./components/ui/container";
import CustomLink from "./components/ui/link";
import SectionTitle from "./components/ui/section-title";

const NotFound = () => {
  return (
    <Container className="flex h-screen flex-col gap-4">
      <SectionTitle className="text-accent">404</SectionTitle>
      <p className="mb-10">
        This page doesn&apos;t exist. Are you lost in my awesomeness?
      </p>
      <CustomLink href="/" className="py-4">
        Go Home
      </CustomLink>
    </Container>
  );
};

export default NotFound;
