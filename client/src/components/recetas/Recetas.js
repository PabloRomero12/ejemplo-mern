import React from "react";
import IngresoReceta from "./IngresoReceta";
import MostrarRecetas from "./MostrarRecetas";

import { Grid } from "@material-ui/core";

class Receta extends React.Component {
  render() {
    return (
      <div>
        <h1>Receta Componente</h1>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <IngresoReceta />
          </Grid>
          <Grid item md={8} xs={12}>
            <MostrarRecetas />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Receta;
