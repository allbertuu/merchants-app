import { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import "./App.css";
import Merchant from "./components/Merchant";
import { Form } from "./components/Form/styled";
import StorefrontIcon from "@mui/icons-material/Storefront";

type MerchantsList = {
  id: number;
  name: string;
  email: string;
}[];

export default function App() {
  const [merchantsList, setMerchantsList] = useState<MerchantsList>();
  const [merchantData, setMerchantData] = useState({});

  useEffect(() => {
    getMerchants();
  }, []);

  function getMerchants() {
    axios.get("https://api-merchants-app.herokuapp.com/").then((res) => {
      setMerchantsList(res.data);
    });
  }

  function createMerchant(merchant = {}, e: FormEvent) {
    e.preventDefault();

    const inputName = document.getElementById("name") as HTMLInputElement;
    const inputEmail = document.getElementById("email") as HTMLInputElement;
    inputName.value = "";
    inputEmail.value = "";

    if (merchant) {
      axios.post("https://api-merchants-app.herokuapp.com/merchants", merchant).then((res) => {
        alert(res.data);
        getMerchants();
      });
    }
  }

  function deleteMerchant(id: number) {
    axios.delete(`https://api-merchants-app.herokuapp.com/merchants/${id}`).then((res) => {
      alert(res.data);
      getMerchants();
    });
  }

  const handleChange = (e: any) => {
    setMerchantData({ ...merchantData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <header>
        <StorefrontIcon fontSize="inherit" />
        <h1>Merchants</h1>
        <h2>O melhor lugar para mercadores!</h2>
      </header>

      {!merchantsList || merchantsList.length > 0 ? (
        <div className="merchants-list">
          {merchantsList?.map((merchant) => (
            <Merchant
              key={merchant.id}
              id={merchant.id}
              name={merchant.name}
              email={merchant.email}
              deleteMerchant={deleteMerchant}
            />
          ))}
        </div>
      ) : (
        <div className="without-merchants">
          Não há nenhuma informação disponível sobre os mercadores
        </div>
      )}

      <br />

      <Form onSubmit={(e) => createMerchant(merchantData, e)}>
        <div>
          <label htmlFor="name">Qual seu nome, mercador?</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="email">Qual seu email?</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="mercador@mercadores.com"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
          <button type="reset">Limpar campos</button>
        </div>
      </Form>
    </div>
  );
}
