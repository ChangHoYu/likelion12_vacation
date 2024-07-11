import styled from 'styled-components';

export default function Basic() {
  return (
    <>
      {/* 동적할당 
      <Button $color="green">green</Button>
      <Button $color="red">red</Button> */}
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
    </>
  );
}

// 동적 할당
// const Button = styled.button`
//   background: ${({ $color }) => $color};
//   color: white;

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #bf4f74;
//   border-radius: 3px;
// `;

//상속
const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
