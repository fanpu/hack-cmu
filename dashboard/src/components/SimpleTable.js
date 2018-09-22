import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, subnet, l_lat, l_lon, g_lat, g_lon, total) {
  id += 1;
  return { id, name, subnet, l_lat, l_lon, g_lat, g_lon, total};
}

const data = [
  createData('Wean', "128.237.110.1", 40.442685, -79.945908, 40.442685, -79.945908, 250),
  createData('Wean', "128.237.110.1", 40.442685, -79.945908, 40.442685, -79.945908, 250),
  createData('Wean', "128.237.110.1", 40.442685, -79.945908, 40.442685, -79.945908, 250),
  createData('Wean', "128.237.110.1", 40.442685, -79.945908, 40.442685, -79.945908, 250),
  createData('Wean', "128.237.110.1", 40.442685, -79.945908, 40.442685, -79.945908, 250)
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Building</TableCell>
            <TableCell>Subnet Start</TableCell>
            <TableCell>Lat, Lon</TableCell>
            <TableCell numeric>Devices</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell>{n.subnet}</TableCell>
                <TableCell>{n.l_lat}, {n.l_lon}</TableCell>
                <TableCell numeric>{n.total}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
