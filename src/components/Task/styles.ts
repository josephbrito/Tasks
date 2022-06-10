import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  word-wrap: break-word;
  word-break: break-all;
  padding: 15px;
  background: var(--secondary);
  width: 100%;
  border-radius: 10px;
  color: var(--color);
  border-left: ${(props) =>
    props.className ? "10px solid var(--green-color)" : ""};

  > span {
    cursor: pointer;
  }
`;

export const Options = styled.div`
  background: var(--terciary);
  padding: 5px;
  > svg {
    color: var(--red);
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
