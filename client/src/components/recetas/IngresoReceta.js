import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";

import { insertReceta } from "../../actions/recetaActions";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  previewImage: {
    maxWidth: "10vh"
  }
});

const initialState = {
  nombre: "",
  descripcion: "",
  ingredientes: [],
  preparacion: "",
  imagen: "",
  ingrediente: ""
};

class IngresoReceta extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleIngredientes = event => {
    if (this.state.ingrediente !== "") {
      let { ingredientes } = this.state;
      ingredientes.push(this.state.ingrediente);
      this.setState({ ingredientes: ingredientes, ingrediente: "" });
    }
  };

  handleSave = event => {
    event.preventDefault();

    const newReceta = {
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      ingredientes: this.state.ingredientes,
      preparacion: this.state.preparacion,
      imagen: this.state.imagen
    };

    this.props.insertReceta(newReceta);
    this.setState({ ...initialState, ingredientes: [] });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSave}>
          <h1>Ingreso Receta</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="nombre"
                name="nombre"
                label="Nombre"
                fullWidth
                value={this.state.nombre}
                className={classes.textField}
                onChange={this.handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="descripcion"
                name="descripcion"
                label="Descripcion"
                fullWidth
                value={this.state.descripcion}
                onChange={this.handleChange}
                className={classes.textField}
                margin="normal"
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="ingrediente"
                name="ingrediente"
                label="Ingrediente"
                fullWidth
                value={this.state.ingrediente}
                onChange={this.handleChange}
                className={classes.textField}
                margin="normal"
              />
            </Grid>
            <Grid item xs={2}>
              <Button variant="outlined" onClick={this.handleIngredientes}>
                +
              </Button>
            </Grid>
            <Grid item xs={12}>
              <h4>Ingredientes</h4>
              {this.state.ingredientes.map((ing, index) => (
                <p key={index}>{ing}</p>
              ))}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="preparacion"
                label="Preparacion"
                name="preparacion"
                multiline
                rowsMax="4"
                value={this.state.preparacion}
                onChange={this.handleChange}
                className={classes.textField}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                required
                id="imagen"
                name="imagen"
                label="Imagen"
                fullWidth
                value={this.state.imagen}
                onChange={this.handleChange}
                className={classes.textField}
                margin="normal"
              />
            </Grid>
            <Grid item xs={5}>
              {this.state.imagen ? (
                <img
                  src={this.state.imagen}
                  className={classes.previewImage}
                  alt="Imagen de la receta preparada"
                />
              ) : null}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" type="submit" color="primary">
              Ingresar
            </Button>
          </Grid>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  recetas: state.recetas
});

export default connect(
  mapStateToProps,
  { insertReceta }
)(withStyles(styles)(IngresoReceta));
