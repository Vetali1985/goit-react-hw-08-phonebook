import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Form, Label } from './LoginForm.syled';
import { ButtonLogOut } from 'components/UserMenu/UserMenu.styled';
import Notiflix from 'notiflix';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    if (logIn) {
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );

      form.reset();
    }
    Notiflix.Notify.failure('the data entered is incorrect');
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <ButtonLogOut type="submit">Log In</ButtonLogOut>
    </Form>
  );
};
