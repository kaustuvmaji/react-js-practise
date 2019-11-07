import React, { Component } from 'react';

export default class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product_name: '',
            product_description: '',
            product_tags: [],
            product_brand: '', 
            product_price: '',
            product_imageurl: ''
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            product_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.product_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        
        this.setState({
            product_name: '',
            product_description: '',
            product_tags: [],
            product_brand: '', 
            product_price: '',
            product_imageurl: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>tags: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>brand: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>price: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>imageurl: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}