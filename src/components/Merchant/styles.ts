import styled from "styled-components";

export const MerchantBox = styled.div`
  position: relative;
  border-radius: 1rem;

  background-color: #fff;
  color: rgba(0, 0, 0, 0.7);

  padding: 1rem;
  padding-top: 1.5rem;

  transition: all 0.3s;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.1);
  }
`;

export const DeleteIcon = styled.button`
  position: absolute;
  cursor: pointer;
  content: "X";
  display: block;
  width: 22px;
  height: 10px;
  right: 15px;
  top: 10px;
  background-color: rgb(226, 65, 65);
`;

export const MerchantInfo = styled.div``;
export const Name = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
`;
export const Email = styled.p``;
