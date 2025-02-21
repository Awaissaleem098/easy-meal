import { Form, Input } from 'antd';
import './Register.css';
import Button from '../Button/Button';

const Register = ({ onRegister }) => {
  const onFinish = (values) => {
    onRegister(values);
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className="form page__flexbox-column"
      name="basic"
      layout="vertical"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      // style={{ maxWidth: 600 }}
      // initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h3 className="form__title">Регистрация</h3>

      <fieldset className="form__box page__flexbox-column">
        {/* <Form.Item
        className="form__box_inner"
        label="Username"
        name="username"
        rules={[{ required: true, message: "Введите ваше имя!" }]}
      >
        <Input className="form__input" />
      </Form.Item> */}

        <Form.Item
          className="form__box_inner"
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'В почте содержатся ошибки, попробуйте снова!'
            },
            {
              required: true,
              message: 'Введите вашу почту!'
            }
          ]}
        >
          <Input className="form__input" />
        </Form.Item>

        <Form.Item
          className="form__box_inner"
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Введите ваш пароль!' }]}
        >
          <Input.Password className="form__input" />
        </Form.Item>

        <Button
          btnClass={'button_type_login'}
          btnText="Зарегистрироваться"
          btnType="submit"
          // onClick={}
        />
        <Button />
      </fieldset>
    </Form>
  );
};

export default Register;
