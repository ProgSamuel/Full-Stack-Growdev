import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { useAppSelector } from '../config/hooks';
import Home from './home';

const Transacoes = () => {
  const transacoes = useAppSelector((store) => store.transacoes);
  const saldo = useAppSelector((store) => store.saldo);

  const getBackgroundColor = (tipo: string) => {
    return tipo === 'Entrada' ? '#C8E6C9' : tipo === 'Saída' ? '#FFCDD2' : 'inherit';
  };

  return (
    <Grid container rowSpacing={3} columnSpacing={3}>
      <Home />

      <Box>
        <Box sx={{ marginBottom: '1rem' }}>
          <Typography variant="body1">
            Seu saldo é de: <strong>{saldo}</strong>
          </Typography>
        </Box>

        <TableContainer component={Paper} sx={{ marginLeft: '2rem' }}>
          <Table sx={{ minWidth: 650 }} aria-label="transacoes table">
            <TableHead>
              <TableRow>
                <TableCell>Movimentação</TableCell>
                <TableCell align="right">Valor</TableCell>
                <TableCell align="right">Observação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transacoes.map((transacao) => (
                <TableRow key={transacao.obs}  style={{ backgroundColor: getBackgroundColor(transacao.tipo) }}>
                  <TableCell component="th" scope="row">
                    {transacao.tipo}
                  </TableCell>
                  <TableCell align="right">{transacao.valor}</TableCell>
                  <TableCell align="right">
                    {transacao.obs}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  );
};

export default Transacoes;
