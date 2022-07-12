import { DeleteIcon, Email, MerchantBox, MerchantInfo, Name } from "./styles";

interface MerchantProps {
  id: number;
  name: string;
  email: string;
  deleteMerchant: (id: number) => void;
}

export default function Merchant({
  id,
  name,
  email,
  deleteMerchant,
}: MerchantProps) {
  return (
    <MerchantBox>
      <DeleteIcon onClick={() => deleteMerchant(id)} />
      <MerchantInfo>
        <Name>Mercador {name}</Name>
        <Email>Email: {email}</Email>
      </MerchantInfo>
    </MerchantBox>
  );
}
