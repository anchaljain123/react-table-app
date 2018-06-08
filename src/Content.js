import React, { Component } from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { makeData } from './Utils';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const columns = [
	{
		Header: 'Name',
		columns: [
			{
				Header: 'First Name',
				accessor: 'firstName',
			},
			{
				Header: 'Last Name',
				id: 'lastName',
				accessor: (d) => d.lastName,
			},
		],
	},
];

class Content extends Component {
	constructor() {
		super();
		this.state = {
			data: makeData(),
		};
	}
	handleClick = (key) => {
		this.props.updateValue(`row${key}`);
	};

	render() {
		const { data } = this.state;
		console.log('this.props.rowReducer', this.props.rowReducer);
		const { row0, row1 } = this.props.rowReducer;
		return (
			<div>
				<ReactTable
					data={data}
					columns={columns}
					className="-striped -highlight"
					// getTdProps={(state, rowInfo, column, instance) => {
					// 	return {
					// 		onClick: (e, handleOriginal) => {
					// 			console.log('It was in this row:', rowInfo);
					// 			this.handleClick(rowInfo.index);
					// 		},
					// 	};
					// }}
					SubComponent={(row) =>
						row0 ? (
							<div style={{ padding: '20px' }}>
								 <Link to="/home1"> r1 subrow1</Link>
								  <Link to="/home2"> r1 subrow2</Link>
							</div>
						) : (
							<div style={{ padding: '20px' }}>
								<Link to="/home1">r2 subrow1</Link>
								  <Link to="/home2">r2 subrow2</Link>
							</div>
						)}
				/>
			</div>
		);
	}
}

export default connect(
	(state) => state,
	(dispatch) => ({
		updateValue: (key) =>
			dispatch({
				type: 'UPDATE_VALUES',
				keyValue: key,
			}),
	})
)(Content);
