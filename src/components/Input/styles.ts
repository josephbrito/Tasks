import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  align-items: center;
`;

export const InputTask = styled.input`
  height: 30px;
  flex: 1;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 1rem;
  outline: none;
  background: var(--secondary);
  color: var(--color);
`;

export const Button = styled.button`
  height: 40px;
  flex: 1;
  cursor: pointer;
  border-radius: 10px;
  background: var(--green-color);
  color: var(--color);
  letter-spacing: 1px;
  padding: 0 8px;
`;
