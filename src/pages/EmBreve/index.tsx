import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import api from '../../services/api'

import {
  Header,
  Title,
  PosterBlur,
  Poster
} from './styles';

interface Movies {
  id: number;
  title: string;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
}

export default function Embreve() {
  const apiKey = '19bbf67061d9d2a2718489aff8e99eb9';
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    async function getMovie() {
      const response = await api(`movie/now_playing?api_key=${apiKey}&language=pt-BR`);
      setMovies(response.data.results);
    };

    getMovie();
  }, []);

  return (
    <>
      <Header>
        <Title>Em breve</Title>
      </Header>
      <FlatList
        style={{ backgroundColor: "#000", paddingHorizontal: 4 }}
        data={movies}
        keyExtractor={movie => movie.id.toString()}
        renderItem={({ item: movie }) => (
          <View>
            <PosterBlur
              blurRadius={1}
              source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` }}
            >
              <Poster source={{ uri: `https://image.tmdb.org/t/p/w300/${movie.poster_path}` }} />
            </PosterBlur>
            <Text style={{ color: '#fff', fontSize: 26, fontWeight: 'bold', marginTop: 10 }}>{movie.title}</Text>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Estréia: {movie.release_date.split("-").reverse().join(" ")}</Text>
            <Text style={{ color: '#fff', marginVertical: 10 }}>{movie.overview}</Text>
          </View>
        )}
      />

      {/* {movies.map(movie => (
          <View key={movie.id.toString()}>
            <PosterBlur
              blurRadius={1}
              source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` }}
            >
              <Poster source={{ uri: `https://image.tmdb.org/t/p/w300/${movie.poster_path}` }} />
            </PosterBlur>
            <Text style={{ color: '#fff', fontSize: 26, fontWeight: 'bold', marginTop: 10 }}>{movie.title}</Text>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Estréia: {movie.release_date.split("-").reverse().join(" ")}</Text>
            <Text style={{ color: '#fff', marginVertical: 10 }}>{movie.overview}</Text>
          </View>
        ))} */}
    </>
  );
};

