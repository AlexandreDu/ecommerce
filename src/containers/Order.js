import React, { useState } from 'react'
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


const Order = ({panier, handleClickClosePopUp}) => {

    const [orderForm, setState] = useState({
        email: "",
        firstName: "",
        lastName: "",
        card: "",
        cvc:""
    })
    

    const updateField = (e) => {

        setState({
            ...orderForm,
            [e.target.name]: e.target.value
        })
    }

    return (
            <form className="order-form">               
                <div 
                    className="cross-order-form-wrapper"
                    onClick={() => handleClickClosePopUp()}
                >
                    <FontAwesomeIcon icon={faTimesCircle} />
                </div>
                <legend className="order-title">Renseignez vos informations personnelles</legend>
                <input 
                    className="order-input"
                    placeholder="Email"
                    type="email" 
                    value={orderForm.email} 
                    onChange = {(e) => {
                        updateField(e)
                    }}
                    name="email"
                />
                <input 
                    className="order-input"
                    placeholder="Prénom"
                    type="text" 
                    value={orderForm.firstName} 
                    onChange = {(e) => {
                        updateField(e)
                    }}
                    name="firstName"
                />
                <input 
                    className="order-input"
                    placeholder="Nom"
                    type="text" 
                    value={orderForm.lastName} 
                    onChange = {(e) => {
                        updateField(e)
                    }}
                    name="lastName"
                />
                <input 
                    className="order-input"
                    placeholder="Numéro de carte"
                    type="number" 
                    value={orderForm.card} 
                    onChange = {(e) => {
                        updateField(e)
                    }}
                    name="card"
                />
                <input 
                    className="order-input"
                    placeholder="Cryptogramme visuel"
                    type="number" 
                    value={orderForm.cvc} 
                    onChange = {(e) => {
                        updateField(e)
                    }}
                    name="cvc"
                />
                
            </form>
                 
    )
}



const mapStateToProps = (store) => {
    return {
        panier: store.basket
    }
  }
  const mapDispatchToProps = {
  
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Order);