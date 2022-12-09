import { Helmet } from 'react-helmet';
import { WelcomeMessage } from 'components/WelcomeMessage/WelcomeMessage';

import { Section } from 'components/Shared/Section.styled';
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Section>
        <div>
          <WelcomeMessage />
        </div>
      </Section>
    </>
  );
};

export default Home;
