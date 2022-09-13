import React, { useState } from 'react'

export default function Alert(props) {
    // const [alert, setName] = useState({ firstName: "Bharat", lastName: "" })
    return ( 
      props.alert &&
    <div className="alert alert-success alert-dismissible fade show" role="alert">
           <strong>{props.alert.type} </strong>: {props.alert.msg}     
    </div>
  )
}
