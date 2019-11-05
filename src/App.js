import React, {Component} from 'react';
import './App.css';
import './index.css'
import Car from './Car/Car'
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {name: 'Ford', year: 2016},
                {name: 'Audi', year: 2016},
                {name: 'Mazda rx8', year: 2011}
            ],
            pageTitle: 'React Components',
            showCars: false,

        }
    }



   deleteHandler = (ind) => {
        const cars = this.state.cars.concat();
        cars.splice(ind, 1);

        this.setState({
            cars
        });
    };

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    };

    onChangeName = (name, ind) => {
        const car = this.state.cars[ind];
        car.name = name;
        const cars = [...this.state.cars];
        cars[ind] = car;
        this.setState({cars})
    };
    state;



    render() {
        console.log('render');

        let cars = null;

        if (this.state.showCars) {
      cars = this.state.cars.map((car, ind) => {
            return (
                <ErrorBoundary key={ind}>
                <Car
                    index={ind}
                    name={car.name}
                    year={car.year}
                    onChangeName={event => this.onChangeName(event.target.value, ind)
                    }
                    onDelete={this.deleteHandler.bind(this, ind)}
                />
                </ErrorBoundary>
            );
        })

        }

        return (
            <div style={{textAlign: 'center', padding: '2% 0 2% 0'}} className="page__container">
                <h1>{this.props.title}</h1>
               <Counter />
                <hr/>
                <button onClick={this.toggleCarsHandler}>Toggle cars</button>
                <div style={{
                    width: 600,
                    margin: 'auto',
                    padding: '5%, 0, 5%, 0'
                }}>
                 {cars}
                </div>
            </div>
        );
    }
}

export default App;
