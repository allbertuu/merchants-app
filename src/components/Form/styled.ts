import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 250px;
  margin: 0 auto;

  div {
    padding: 0.25rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    input {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
      border: 1px solid #e6e6e6;
      padding: 0.5rem 1rem;
      &:hover {
        background-color: rgb(243 244 246);
      }
      &:focus {
        outline: none;
      }
    }
  }

  :last-child {
    button {
      border: none;
      padding: 0.5rem 1rem;
      flex: 1;
      text-align: center;
      @apply rounded-md;

      &:hover {
        cursor: pointer;
      }

      &[type="submit"] {
        @apply bg-green-600 hover:bg-green-500 active:bg-green-700 text-white;
      }

      &[type="reset"] {
        @apply hover:bg-gray-300 active:bg-gray-400;
      }
    }
  }
`;
