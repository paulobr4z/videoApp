import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #000;
  padding: 0 14px;
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

export const WatchButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  margin-top: 15px;
  margin-bottom: 8px;
`;

export const DownloadButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #272727;
  padding: 10px 0;
  border-radius: 4px;
`;

export const SimilarContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #000;
  padding: 10px 0;
`;