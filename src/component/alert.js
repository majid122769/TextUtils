import React from 'react'

function alert(props) {
    const capatilize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capatilize(props.alert.type)}</strong>:{props.alert.message}
  </div>
  )
}

export default alert