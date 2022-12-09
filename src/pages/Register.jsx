import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import { Section } from 'components/Shared/Section.styled';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <Section>
        <div>
          <RegisterForm />
        </div>
      </Section>
    </>
  );
};

export default Register;
