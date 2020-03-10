import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red
    `

export default function UserCard(props){
    // console.log(props);

    return (
        <>
            <Card>
                <h3>{props.profile.name}</h3>
                <img src={`${props.profile.avatar_url}`} alt={`A profile of ${props.profile.name}`} />
                <p>{props.profile.login}</p>                
            </Card>
        </>
    )
} 