import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import Card from '../../components/Card';

import api from '../../services/api';

import {
  Container,
  Content,
  Title,
  ProviderTitle,
  CategoriesTitle,
} from './styles';

export default function Home() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/users');

      setInfos(response.data);
    }

    getData();
  }, []);
  return (
    <Container>
      <Content>
        <Title>Olá!</Title>

        <ProviderTitle>Últimos prestadores</ProviderTitle>

        <Card data={infos} />

        <CategoriesTitle>Categorias</CategoriesTitle>
      </Content>
    </Container>
  );
}
