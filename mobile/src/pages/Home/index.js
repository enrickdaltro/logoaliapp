import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import Card from '../../components/Card';
import CardCategories from '../../components/CardCategories';

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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/users');

      setInfos(response.data);
    }

    async function getCategories() {
      const response = await api.get('/categories');

      setCategories(response.data);
    }

    getData();
    getCategories();
  }, []);
  return (
    <Container>
      <Content>
        <Title>Olá!</Title>

        <ProviderTitle>Últimos prestadores</ProviderTitle>
        <Card data={infos} />

        <CategoriesTitle>Categorias</CategoriesTitle>
        <CardCategories data={categories} />
      </Content>
    </Container>
  );
}
