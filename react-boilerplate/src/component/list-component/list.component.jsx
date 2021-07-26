import React, { Component } from "react";
import { connect } from "react-redux";
import { getLeads, deleteLead } from "../../actions/leads";
import { Table, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

class ListComponent extends Component {
    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <div className="container">
                {console.log(this.props.leads)}
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map((item) => (
                            <tr key={item.id}>
                                <td>No: {item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.email}</td>
                                <td>{item.message}</td>
                                <td>
                                    <Image
                                        src={item.image}
                                        width="50"
                                        height="50"
                                        roundedCircle
                                    />
                                </td>

                                <td>
                                    <Button variant="primary">Update</Button>{" "}
                                    <Button
                                        onClick={this.props.deleteLead.bind(
                                            this,
                                            item.id
                                        )}
                                        variant="danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads, deleteLead })(ListComponent);
