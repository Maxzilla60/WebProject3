import React, { Component } from 'react';

import StatusreportsTable from './statusreports-table';
import TextField from 'material-ui/TextField';

import HttpService from '../common/http-service';
import { connect } from "react-redux";

import mapDispatchToPropsTitle from '../common/title-dispatch-to-props';

import { Link } from 'react-router-dom';

let hasFetchedStatusreports = false;

class StatusreportsPage extends Component {
    componentWillMount() {
        if (!hasFetchedStatusreports) {
            HttpService.getAllStatusReports().then(fetchedStatusreports => this.props.setStatusreports(fetchedStatusreports));
            hasFetchedStatusreports = true;
        }
    }
    
    searchByLocation = (evt) => {
        if (evt.target.value != null && evt.target.value != "") {
            HttpService.getStatusReportByLocation(evt.target.value).then(fetchedStatusreports => this.props.setStatusreports(fetchedStatusreports));
        }
        else {
            HttpService.getAllStatusReports().then(fetchedStatusreports => this.props.setStatusreports(fetchedStatusreports));
        }
    }

    render() {
        const fetchedStatusreports = this.props.statusreports;
        console.log("Hierzo");
        console.log(fetchedStatusreports);
        return (
            <div>
                <TextField type="number" onChange={(evt) => this.searchByLocation(evt)} hintText="Search by Location ID" style={{width: '100%'}} />
                <StatusreportsTable entries={this.props.statusreports} />
            </div>
        );
    }
    componentDidMount() {
        this.props.setTitle('Status Reports');
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        statusreports: state.statusreports,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ...mapDispatchToPropsTitle(dispatch, ownProps),
        setStatusreports: (statusreports) => {
            dispatch({ type: 'SET_STATUSREPORTS', payload: statusreports });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusreportsPage);