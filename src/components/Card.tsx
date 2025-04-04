import { Alert, Box, Center, Input } from '@chakra-ui/react';
import { Button } from './Button/Button';
import { ChangeEvent, useState } from 'react';

interface IForm {
  password: string;
  email: string;
  name: string;
}

export const Card = () => {
  const [formData, setFormData] = useState<IForm>({
    password: '',
    email: '',
    name: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormDataEvent) => {
    e.preventDefault();
    const { name, email, password } = formData;
    let formFullFilled: boolean = true;

    if (!name.trim()) {
      alert('Por favor, preencha o campo Nome.');
      formFullFilled = false;
    }
    if (!email.trim()) {
      alert('Por favor, preencha o campo Email.');
      formFullFilled = false;
    }
    if (!password.trim()) {
      alert('Por favor, preencha o campo Senha.');
      formFullFilled = false;
    }

    if (formFullFilled) {
      setFormData({
        password: '',
        email: '',
        name: '',
      });
      alert(`
        Bem vindo ${formData.name}!
        Seu email(${formData.email}) foi cadastrado com sucesso!
      `);
    }
  };

  return (
    <form>
      <Box minHeight="100vh" backgroundColor="#888" padding="25px">
        <Box
          backgroundColor="#FFFFFF"
          borderRadius="25px"
          padding="15px"
          maxWidth="400px"
          marginInline="auto"
        >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <label htmlFor="name">Nome</label>
          <Input
            marginBottom="12px"
            placeholder="Digite seu nome"
            onChange={handleChange}
            value={formData.name}
            id="name"
            name="name"
            type="text"
          />
          <label htmlFor="email">Email</label>
          <Input
            marginBottom="12px"
            placeholder="seuemail@email.com"
            onChange={handleChange}
            value={formData.email}
            id="email"
            name="email"
            type="email"
          />
          <label htmlFor="password">Senha</label>
          <Input
            marginBottom="20px"
            placeholder="Digite sua senha"
            onChange={handleChange}
            value={formData.password}
            id="password"
            name="password"
            type="password"
          />
          <Center>
            <Button onClick={handleSubmit}>Login</Button>
          </Center>
        </Box>
      </Box>
    </form>
  );
};
