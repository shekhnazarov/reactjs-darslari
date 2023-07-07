import React from "react";
import students from "./database";

export class State extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: " ",
            surname: " ",
            data: students,
        }
    }
    render(){

        const onChangeInput = (e) => {
            if(e.target.name === "ism") this.setState({name: e.target.value})
            if(e.target.name === "familiya") this.setState({surname: e.target.value})
        }

        const onChangeFilter = ({target: {value}}) => {
            let res = students.filter((user) => {
                return user.name.includes(value)
            });
            this.setState({data: res})
        }

        const onDeleteUser = (id) => {
            console.log(id)
        }

    
        return <div>
            <h2>Name: {this.state.name}</h2>
            <h2>Surname: {this.state.surname}</h2>
            <input onChange={(event)=>onChangeInput(event)} name="ism" type="text" placeholder="Ism kiriting" />
            <input onChange={(event)=>onChangeInput(event)} name="familiya" type="text" placeholder="Familiya kiriting" /> <br /><br /><hr />
            <input onChange={onChangeFilter} type="text" placeholder="Filter" />
            {
                this.state.data.map((users) => {
                    return <h3>{users.id} - {users.name} - {users.website}</h3>
                })
            }
        </div>
    }
}

export default State;