import React from "react";

import { connect } from "react-redux";

import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { getAllRecetas } from "../../actions/recetaActions";

class MostrarRecetas extends React.Component {
  componentDidMount() {
    this.props.getAllRecetas();
  }

  render() {
    const { recetas } = this.props.recetas;
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Recetas Ingresadas
          </ListSubheader>
        }
      >
        {recetas.map((receta, index) => {
          return (
            <ListItem button key={index}>
              <ListItemText
                primary={receta.nombre}
                secondary={receta.descripcion}
              />
            </ListItem>
          );
        })}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  recetas: state.recetas
});

export default connect(
  mapStateToProps,
  { getAllRecetas }
)(MostrarRecetas);
