import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

import { Wrapper } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Wrapper>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Wrapper>
    </div>
  );
};
