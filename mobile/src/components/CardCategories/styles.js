import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
`;

export const CardList = styled.View``;

export const CardBox = styled.TouchableOpacity`
  width: 180px;

  border: 2px solid #eee;

  margin-right: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const CardImage = styled.Image`
  height: 220px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
`;
