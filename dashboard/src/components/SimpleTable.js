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
  createData('Wean', "128.237.210.1", 40.442685, -79.945908, 40.442685, -79.945908, 250),
  createData('Baker', "128.237.123.3", 40.441526, -79.945110, 40.441526, -79.945110, 250),
  createData('Porter', "128.237.145.7", 40.441716, -79.946317, 40.441716, -79.946317, 250),
  createData('Hunt', "128.237.119.9", 40.441087, -79.943729, 40.441087, -79.943729, 250),
  createData('CFA', "128.237.144.5", 40.441575, -79.942905, 40.441575, -79.942905, 250),
  createData('Posner', "128.237.183.2", 40.441163, -79.942181, 40.441163, -79.942181, 250),
  createData('UC', "128.237.189.2", 40.443469, -79.942052, 40.443469, -79.942052, 250),
  createData('GHC', "128.237.129.3", 40.443592, -79.944493, 40.443592, -79.944493, 250),
  createData('Newell-Simon Hall', "128.237.138.8", 40.443349, -79.945595, 40.443349, -79.945595, 250),
  createData('Scott', "128.237.170.5", 40.443010, -79.946786, 40.443010, -79.946786, 250),
  createData('Wean', "128.237.188.5", 40.442714, -79.945703, 40.442714, -79.945703, 250),
  createData('Doherty', "128.237.133.2", 40.442549, -79.944531, 40.442549, -79.944531, 250),
  createData('Hamerschlag Hall', "128.237.199.0", 40.442451, -79.946848, 40.442451, -79.946848, 250),
  createData('Scaife', "128.237.215.1", 40.441773, -79.947317, 40.441773, -79.947317, 250),
  createData('Tepper Quad', "128.237.110.0", 40.445313, -79.944879, 40.445313, -79.944879, 250),
  createData('Hamburg Hall', "128.237.161.4", 40.444309, -79.945565, 40.444309, -79.945565, 250)
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
