import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

import { Section } from 'components/Shared/Section.styled';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Section>
        <div>
          <LoginForm />
        </div>
      </Section>
    </>
  );
};

export default Login;
