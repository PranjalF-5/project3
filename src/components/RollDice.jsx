import styled from "styled-components";

function RollDice({ rollDice, currentDice }) {

  return (
    <DiceContainer>
      <div className="Dice" onClick={rollDice}>
        <img style={{height : '100px'}} src={`/Images/dice_${currentDice}.png`} alt="dice 1" />
      </div>

      <p>Click to Roll On the Dice</p>
    </DiceContainer>
  );
}

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;
  .Dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
