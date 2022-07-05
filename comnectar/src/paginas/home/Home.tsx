import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import './Home.css';
import React from "react";

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixatop">
                <Grid alignItems="center" item xs={12}>
                    <Box display="flex" alignItems="center" flexDirection="column" justifyContent="end" className="boxfoto">
                    <Box display="flex" alignItems="center" flexDirection="column" justifyContent="end">
                        <Typography variant="h1" align="center" className="tituloh">
                            Cuide da sua saúde
                        </Typography>
                        <Typography variant="h2" align="center" className="tituloh">
                            e ajude o meio ambiente
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" marginBottom="24px">
                        <Button variant="outlined" className="botaoh">
                            Comprar
                        </Button>
                    </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid alignItems="center" item xs={12}>
                <Box className="beneficios">
                    <Typography variant="h3" align="center">Nossos Benefícios</Typography>
                </Box>
            </Grid>
            <Grid alignItems="center" item xs={12} className="caixacard">
                <Box display="flex" justifyContent="space-evenly">
                    <Card className="card1">
                        <CardContent>
                            <Typography>Card1</Typography>
                        </CardContent>
                    </Card>
                    <Card className="card2">
                        <CardContent>
                            <Typography>Card2</Typography>
                        </CardContent>
                    </Card>
                    <Card className="card3">
                        <CardContent>
                            <Typography>Card3</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </>
    );
}


export default Home;