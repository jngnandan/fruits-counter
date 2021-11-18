
import React, { Component } from 'react';
import '../FruitsCounter/banana.jpeg'
import '../FruitsCounter/mango.jpeg'


class FruitsCounter extends Component {
    state = {
        bananaValue: 0,
        mangoValue: 0
    }


    render() {
        const { bananaValue, mangoValue } = this.state

        const clickBanana = () => {
            this.setState({ bananaValue: bananaValue + 1 })
        }

        const clickMango = () => {
            this.setState({ mangoValue: mangoValue + 1 })
        }


        return (
            <body>
                <div className="easyBackground d-flex flex-row justify-content-center" >
                    <div className="card h-75 w-75 m-5 p-5 ">
                        <h3>Bobo ate <span>{mangoValue}</span> mangos <span>{bananaValue}</span> Bananas</h3>

                        <div className="d-flex flex-row justify-content-center">

                            <div className="m-4 text-center d-flex flex-column justify-content-center">
                                <p>Mango</p>
                                <img src="../src/components/FruitsCounter/banana.jpeg" />
                                <button onClick={clickMango} className="btn btn-primary">Eat Mangos</button>
                            </div>

                            <div className="m-4 text-center d-flex flex-column justify-content-center">
                                <p>Banana</p>
                                <img src="../FruitsCounter/mango.jpeg" />
                                <button onClick={clickBanana} className="btn btn-primary">Eat Banana</button>
                            </div>

                        </div>
                    </div>
                </div>

            </body>

        )
    }

}
export default FruitsCounter