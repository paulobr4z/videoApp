import styled from 'styled-components/native';

export const PosterContainer = styled.TouchableOpacity`
  height: 150px;
  width: 100px;
  border: 1px solid black;
  border-radius: 4px;
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 30px 0px 10px 10px;
  color: #fff;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonTitle = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fff;
  border-radius: 4px;
  padding: 8px 20px;
  margin-top: 10px;
`;