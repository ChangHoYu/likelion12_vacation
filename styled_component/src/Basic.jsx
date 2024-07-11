import styled from 'styled-components';

export default function Basic() {
  return (
    <>
      <Button $color="green">green</Button>
      <Button $color="red" $font="white">
        red
      </Button>
      {/* <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton> */}
    </>
  );
}

// 동적 할당
/**
 * 7월 11일 스터디 내용(추가적)
 *  - 삼항연산자를 사용
 *  - 객체 구조분해 할당
 */
const Button = styled.button`
  background: ${props => props.$color};
  color: ${props => (props.$font ? props.$font : 'blue')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

//상속
// const Button = styled.button`
//   color: #bf4f74;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #bf4f74;
//   border-radius: 3px;
// `;

// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;
