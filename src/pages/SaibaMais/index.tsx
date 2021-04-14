import React, { useState, useEffect, useContext } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import { CountContext } from '../../context/DetailsContext';
import api from '../../services/api';

import {
  Container,
  PosterBlur,
  Poster,
  WatchButton,
  DownloadButton,
  SimilarContainer
} from './styles';

interface Movies {
  id: number;
  title: string;
  poster_path: string;
}

export default function Notificacoes() {
  const { details: { id, name, title, poster_path, backdrop_path, overview } } = useContext(CountContext);
  const [movies, setMovies] = useState<Movies[]>([]);
  const apiKey = '19bbf67061d9d2a2718489aff8e99eb9';

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await api(`/movie/${id}/similar?api_key=${apiKey}&language=pt-br`);
        setMovies(response.data.results);
      } catch (err) {
        const response = await api(`/tv/${id}/similar?api_key=${apiKey}&language=pt-br`);
        setMovies(response.data.results);
      }
    };

    getMovie();
  }, []);

  return (
    <>
      <PosterBlur
        blurRadius={5}
        source={{ uri: `https://image.tmdb.org/t/p/original/${backdrop_path}` }}
      >
        <Poster source={{ uri: `https://image.tmdb.org/t/p/w300/${poster_path}` }} />
      </PosterBlur>
      <Container>
        <View style={{ width: '100%' }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#fff', marginTop: 10 }}>{!title ? name : title}</Text>
          <Text style={{ color: '#fff', marginTop: 10 }}>Classificação: 12</Text>
          <Text style={{ color: '#fff', marginTop: 3 }}>Duração: 2h 2m</Text>
          <Text style={{ color: '#fff', marginTop: 3 }}>Ano: 2021 </Text>
        </View>

        <WatchButton>
          <Icon name="play" size={20} />
          <Text style={{ color: '#000', fontSize: 16, marginLeft: 15, fontWeight: 'bold' }}>Assitir</Text>
        </WatchButton>
        <DownloadButton>
          <Icon2 name="arrow-collapse-down" size={20} color={'#fff'} />
          <Text style={{ color: '#fff', fontSize: 16, marginLeft: 15, fontWeight: 'bold' }}>Baixar</Text>
        </DownloadButton>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
          <TouchableOpacity
            style={{ alignItems: 'center', width: 80 }}
          >
            <Icon2 name='plus' size={28} color='#fff' style={{ height: 30 }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>Add Lista</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', width: 80 }}>
            <Icon name='heart' size={22} color='#fff' style={{ height: 30 }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>Gostou?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', width: 80 }}>
            <Icon name='share-alt' size={24} color='#fff' style={{ height: 30 }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>Compartilhar</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', lineHeight: 20, marginBottom: 20 }}>{overview}</Text>
        <Text style={{ color: '#fff', marginTop: 20, fontSize: 24, fontWeight: 'bold' }}>Títulos Semelhantes</Text>
        <SimilarContainer>
          {movies.map(movie => (
            // <Text key={movie.id.toString()} style={{ color: '#fff' }} >{movie.title}</Text>
            <Image
              key={movie.id.toString()}
              style={{ height: 150, width: '30%', marginLeft: 8, marginBottom: 8, borderRadius: 2 }}
              source={{ uri: `https://image.tmdb.org/t/p/w300/${movie.poster_path}` }}
            />
          ))}
        </SimilarContainer>
      </Container>
    </>
  );
};
