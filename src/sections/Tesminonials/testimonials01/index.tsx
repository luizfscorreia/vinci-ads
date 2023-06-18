import Button from "../../../components/button";
import { sanitizer } from "../../../shared/sanitizer";
import {
  GlobalWrapper,
  Wrapper,
  Content,
  Title,
  Description,
  Topics,
  TopicIcon,
  TopicTitle,
  Testimonials,
  Testimonial,
  TestRating,
  TestText,
  TestFooter,
  TestAvatar,
  TestFooterWrapper,
  TestName,
  TestCompany,
} from "./styles";

interface ContentProps {
  title: string;
  content: string;
  testimonials: {
    rating?: number;
    name: string;
    company: string;
    website?: string;
    avatar: string;
    testimonial: string;
  }[];
}

export function Testimonials01({ title, content, testimonials }: ContentProps) {
  
    // Not the best implementation and trully not something that I'm pround off.
    // As many things, I promised myself that I will come back to fix it... probably won't... sorry, be bether than me.
    function renderRating(rating: number) {
    const start = <span> ⭐ </span>
    switch (rating) {
      case 1:
        return (
          <>
            {start}
          </>
        );
        break;

      case 2:
        return (
          <>
            {start}
            {start}
          </>
        );
        break;

      case 3:
        return (
          <>
            {start}
            {start}
            {start}
          </>
        );
        break;

      case 4:
        return (
          <>
            {start}
            {start}
            {start}
            {start}
          </>
        );
        break;

      case 5:
        return (
          <>
            {start}
            {start}
            {start}
            {start}
            {start}
          </>
        );
        break;
      default:
        break;
    }
  }

  return (
    <GlobalWrapper>
      <Wrapper>
        <Content>
          <Title dangerouslySetInnerHTML={{ __html: sanitizer(title) }}></Title>
          <Description>
            {content}
          </Description>
          <Topics>
            <TopicIcon></TopicIcon>
            <TopicTitle></TopicTitle>
          </Topics>
          <Button style="solid">QUERO TER OS MESMOS RESULTADOS!</Button>
        </Content>

        <Testimonials>
          <Testimonial className="empty testimonial"></Testimonial>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} className="testimonial">
              
              {testimonial.rating && (
                <TestRating>{renderRating(testimonial.rating)}</TestRating>
              )}
              <TestText className="testimonialText">{testimonial.testimonial}</TestText>
              <TestFooter>
                <TestAvatar>
                  {" "}
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} - ${testimonial.company}`}
                  />
                </TestAvatar>
                <TestFooterWrapper>
                  <TestName>{testimonial.name}</TestName>
                  <TestCompany>{testimonial.company}</TestCompany>
                </TestFooterWrapper>
              </TestFooter>
            </Testimonial>
          ))}
          <Testimonial className="empty testimonial"></Testimonial>
        </Testimonials>
      </Wrapper>
    </GlobalWrapper>
  );
}
