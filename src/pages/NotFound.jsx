import { Helmet } from 'react-helmet';
import { NotFoundMessage } from 'components/NotFoundMessage/NotFoundMessage';

import { Section } from 'components/Shared/Section.styled';
const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>

      <Section>
        <div>
          <NotFoundMessage />
        </div>
      </Section>
    </>
  );
};

export default NotFound;
