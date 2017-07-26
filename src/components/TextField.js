import React from 'react'
import styled from 'styled-components'

const Label = styled.div`
    width: 100%;
    padding: 5px 0px;
`

const Input = styled.input`
    width: 80%;
    outline: none;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

class TextField extends React.Component {
    render() {
        const { value, label, name, type, onChange } = this.props;
        return (
            <div>
                <Label>{label}</Label>
                <Input 
                    type={type} 
                    name={name} 
                    onChange={onChange} 
                    value={ value } />
            </div>
        )
    }
}

export default TextField