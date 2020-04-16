import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Content = styled.View`
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 200px;
  width: 200px;
  border-radius: 100px;

  margin-bottom: 30px;
`;

export const Name = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #999;
  font-weight: bold;
`;
