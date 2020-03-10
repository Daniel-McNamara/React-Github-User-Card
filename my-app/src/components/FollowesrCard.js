import React from "react"

const FollowersCard = props => {
    console.log('do something', props)
    return (
        <div>
            <img src={props.img} alt={props.login} />
        </div>
    )
}

export default FollowersCard 