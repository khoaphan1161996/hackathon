import React from 'react'

export class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            data=[]
        }
    }
    render() {
        return (
            <div className="Admin">
                <div className="Headeradmin">
                    <button>User</button>
                </div>
                <div className="Contentadmind">
                    {this.state.data}
                </div>
            </div>
        )
    }
}