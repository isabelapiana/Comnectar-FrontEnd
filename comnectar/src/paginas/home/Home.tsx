import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import './Home.css';
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { TokenState } from "../../store/tokens/tokensReducer";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";

function Home() {
    var homeComponent;

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    if (token !== "") {
        homeComponent =
            <Grid container justifyContent="center" alignItems="center" className="caixatop">
                <Link to="/produtos" className="text-decorator-none">
                    <Button variant="outlined" className="botao">Listar Produtos</Button>
                </Link>
            </Grid>
    }

    else {
        homeComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixatop">
            <Box display="flex" alignItems="center" flexDirection="column" justifyContent="end" className="boxfoto">
                <Box display="flex" alignItems="center" flexDirection="column" justifyContent="end">
                    <Typography variant="h1" align="center" className="tituloh">
                        Cuide da sua saúde
                    </Typography>
                    <Typography variant="h2" align="center" className="tituloh">
                        e ajude o meio ambiente
                    </Typography>
                    <Box display="flex" justifyContent="center" marginBottom="24px">
                        <Button variant="outlined" className="botaoh">
                            Comprar
                        </Button>
                    </Box>
                </Box>

            </Box>
            </Grid>
    }


    return (
        <>
            {homeComponent}
        </>
    );
}


export default Home;