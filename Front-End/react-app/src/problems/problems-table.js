import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { Link } from 'react-router-dom';
import moment from 'moment';
import HttpService from '../common/http-service';

const Row = (props) => (
    <TableRow key={props.entry.id} hoverable={true}>
        <TableRowColumn>{props.entry.id}</TableRowColumn>
        <TableRowColumn>{props.entry.location_id}</TableRowColumn>
        <TableRowColumn>{props.entry.description}</TableRowColumn>
        <DateRowColumn date={props.entry.date} />
        <FixedRowColumn fixed={props.entry.fixed} id={props.entry.id}/>
        <Link to={"/problems/technician/" + props.entry.id}><TableRowColumn>
                {props.entry.technician ? props.entry.technician : "N/A"}
        </TableRowColumn></Link>
    </TableRow>
)

const FixedRowColumn = (props) => {
    const fixProblem = (id) => {
        HttpService.fixProblem(id);
        window.location = "/problems";
    }
    
    if (props.fixed == 1) {
        return (
            <TableRowColumn style={{backgroundColor: '#28a745'}}>Fixed</TableRowColumn>
        )
    }
    if (props.fixed == 0) {
        return (
            <TableRowColumn onClick={() => fixProblem(props.id)} style={{backgroundColor: '#dc3545', cursor: 'pointer'}}>Not Fixed</TableRowColumn>
        )
    }
}

const DateRowColumn = (props) => {
    const momentDate = moment(props.date);
    const formattedDate = momentDate.format('MMM Do YY, h:mm:ss a');
    
    return (
        <TableRowColumn>{formattedDate}</TableRowColumn>
    )
}

const Rows = (props) => props.entries.map(e => (
    <Row entry={e}/>
));

const ProblemsTable = (props) => (
    <Table>
        <TableHeader displaySelectAll={false}>
            <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Location</TableHeaderColumn>
                <TableHeaderColumn>Description</TableHeaderColumn>
                <TableHeaderColumn>Date</TableHeaderColumn>
                <TableHeaderColumn>Fixed</TableHeaderColumn>
                <TableHeaderColumn>Technician</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            <Rows entries={props.entries} />
        </TableBody>
    </Table>
)


export default ProblemsTable;
