

import React, { Component } from 'react'

class FruitsCounter extends Component {
    state = {
        mangoNo: 0,
        bananaNo: 0
    }
    render() {
        const { mangoNo, bananaNo } = this.state

        const eatMango = () => {
            return (
                this.setState({
                    mangoNo: mangoNo + 1
                })
            )
        }
        const eatBanana = () => {
            return (
                this.setState({
                    bananaNo: bananaNo + 1
                })
            )
        }


        return (
            <div className="row vh-100">
                <div className="col align-self-center text-center card p-5">
                    <h1 className="font-weight-bold p-3">Bob ate <span className="text-warning">{mangoNo}</span> mangoes <span className="text-warning">{bananaNo}</span> bananas</h1>
                    <div className="col-12 d-flex flex-row justify-content-center">
                        <div className="col-6 p-3">
                            <img className="m-1 col-8 imgBox" src="https://images.unsplash.com/photo-1602081593819-65e7a8cee0dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="avatar" />
                            <button onClick={eatMango} className="col-8 btn btn-primary m-4">Eat Mango</button>
                        </div>
                        <div className="col-6 p-3">
                            <img className="col-6 imgBox" src="https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="avatar" />
                            <button onClick={eatBanana} className="col-8 btn btn-primary m-4">Eat Banana</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default FruitsCounter
