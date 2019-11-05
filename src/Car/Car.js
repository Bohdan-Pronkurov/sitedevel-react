import React from 'react'
import "./Car.css"
import ProptTypes from 'prop-types';
import withClass from "../HOC/withClass";

class Car extends React.Component {

    componentDidMount() {
        if(this.props.index === 0) {
            this.inputRef.focus();
        }
    }

    render()
    {


        const inputClasses = ['input'];
        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold');
        }

        return (
              <React.Fragment>
                    <h3>Car name: {this.props.name}</h3>
                    <p>Year: <b>{this.props.year}</b></p>
                    <input
                        ref = {
                            (inputRef) => this.inputRef = inputRef
                        }
                        type="text"
                        onChange={this.props.onChangeName}
                        placeholder={this.props.name}
                        className={inputClasses.join('   ')}
                    />
                    <button onClick={this.props.onDelete}>Delete</button>
              </React.Fragment>
        )
    }
}

Car.propTypes = {
    name: ProptTypes.string,
    year: ProptTypes.number,
    index: ProptTypes.number,
    onChangeName: ProptTypes.func,
    onDelete: ProptTypes.func,
};
export default withClass(Car, 'Car')


