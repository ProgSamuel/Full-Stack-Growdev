// home.tsx
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { entrada, saida } from "../config/modules/saldoSlice";
import { addTransacao } from "../config/modules/transacoesSlice";
import transacao from "../models/transacoes";

const Home = () => {
  const dispatch = useDispatch();

  const submitForm = (event: any) => {
    event.preventDefault();
    const transacao:transacao= {
      valor: event.target.valor.value,
      tipo: event.target.tipo.value,
      obs: event.target.obs.value

    }
    const tipo = event.target.tipo.value

    tipo === "Entrada"
      ? dispatch(entrada(event.target.valor.value))
      : dispatch(saida(event.target.valor.value));    
      
    dispatch(addTransacao(transacao))

  };

  return (
    <div>
      <Box
        component={"form"}
        onSubmit={submitForm}
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          required
          variant="outlined"
          label="Valor"
          type="number"
          name="valor"
          color="warning"
          id="valor"
        />
        <TextField
          required
          variant="outlined"
          select
          label="Tipo"
          name="tipo"
          helperText="Insira o tipo de movimentação"
          id="tipo"
          color="warning"
        >
          <MenuItem value={"Entrada"}>Entrada</MenuItem>
          <MenuItem value={"Saída"}>Saída</MenuItem>
        </TextField>
        <TextField variant="outlined" label="Observação" id="obs"  name="obs" color="warning" />
        <Button variant="contained" type="submit">
          Lançar transação
        </Button>
      </Box>
    </div>
  );
};

export default Home;
