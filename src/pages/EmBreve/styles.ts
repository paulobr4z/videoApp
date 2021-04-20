import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  background-color: #000;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin: 40px 0px 15px 10px;
  color: #fff;
`;

export const Container = styled.FlatList`
  background-color: #000;
  padding: 0px 4px;
`;

export const PosterBlur = styled.ImageBackground`
	height: 320px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

export const Poster = styled.Image`
	height: 300px;
  width: 200px;
`;