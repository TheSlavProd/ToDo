import { Container } from "react-bootstrap";

import Slide from "./Carousel";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import ProductCard from "./ProductCard";
import FamousPeople from "./FamousePeople";
import Questions from "./Questions";
import Partners from "./Partners";
function Naymax() {
  return (
    <Container>
      <Slide />
      <ProductCard />
      <ContactForm />
      <Partners />
      <Questions />
      <FamousPeople />
      <ContactForm />
      <Footer />
    </Container>
  );
}

export default Naymax;
