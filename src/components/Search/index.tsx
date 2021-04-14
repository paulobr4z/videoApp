import React, { useState, useEffect } from 'react';
import { Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../services/api';

const posterDefault = require('../../../assets/posterDefault.png');

import {
  Header,
  Container,
  Title,
  InputSearch,
  ResultsContainer,
  PosterContainer,
  TitleContainer,
  IconContainer,
} from './styles';

interface Movies {
  id: number;
  title: string;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  known_for: [];
}

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<Movies[]>([]);
  const apiKey = '19bbf67061d9d2a2718489aff8e99eb9';

  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    async function searchMovie() {
      if (searchQuery === '') {
        try {
          const response = await api(`trending/movie/week?api_key=${apiKey}&language=pt-br`);
          setMovies(response.data.results);
        } catch (error) {
          console.log(error);
        }
        return;
      }

      try {
        const response = await api(`search/multi?api_key=${apiKey}&language=pt-br&query=${searchQuery}`);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    searchMovie();
  }, [searchQuery]);

  return (
    <>
      <Header>
        <Title>Buscar</Title>
        <InputSearch
          placeholder="Filme, série, gênero, etc..."
          placeholderTextColor='#000'
          iconColor='#000'
          selectionColor='#000'
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </Header>
      <Container>
        {movies.map((movie) => (
          <ResultsContainer key={movie.id.toString()}>
            <PosterContainer>
              {movie.poster_path
                ? <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w300/${movie?.poster_path}` }}
                  style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
                />
                : <Image
                  source={posterDefault}
                  style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
                />
              }

            </PosterContainer>
            <TitleContainer>
              <Text style={{ color: '#fff', marginTop: 5, marginBottom: 15 }}>
                {!movie?.title ? movie?.name : movie?.title}
              </Text>
              <Text ellipsizeMode='tail' numberOfLines={5} style={{ color: '#fff' }}>
                {movie?.overview ? movie?.overview : 'Sem registros'}
              </Text>
            </TitleContainer>
            <IconContainer>
              <Icon name="play-circle-outline" color='#fff' size={38} />
            </IconContainer>
          </ResultsContainer>
        ))}
      </Container>
    </>
  );
};