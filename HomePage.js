import React, { useState } from 'react';
import '../HomePage.css';

const CreditCardForm = () => {
    const [cardNumberDisplay, setCardNumberDisplay] = useState('****************');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolderDisplay, setCardHolderDisplay] = useState('');

    const handleCardNumberChange = (event) => {
        const { value } = event.target;
        let updatedCardNumber = '****************';
        for (let i = 0; i < value.length && i < 16; i++) {
            if (!isNaN(value[i])) {
                updatedCardNumber = updatedCardNumber.slice(0, i) + value[i] + updatedCardNumber.slice(i + 1);
            }
        }
        setCardNumberDisplay(updatedCardNumber);
    }

    const handleCardHolderChange = (event) => {
        setCardHolderDisplay(event.target.value.toUpperCase());
    }

    const handleExpiryDateChange = (event) => {
        setExpiryDate(event.target.value);
    }

    const handleCvvChange = (event) => {
        setCvv(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img" alt="map"></img>
                            <div className="row">
                                <img src="https://i.ibb.co/G9pDnYJ/chip.png" width="60px" alt="chip"></img>
                                <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px" alt="visa"></img>
                            </div>
                            <div className="row card-no">
                                <p>{cardNumberDisplay}</p> 
                            </div>
                            <div className="holderOnTheCard">Holder Card</div>
                            <div className="ExpiresOnTheCard">Expires</div>

                            <div className="row card-text">
                                <p>{cardHolderDisplay}</p> 
                                <p>{expiryDate}</p> 
                            </div>
                        </div>
                        <div className="back">
                            <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img" alt="map"></img>
                            <div className="bar"></div>
                            <div className="row card-cvv">
                                <div>
                                    <img src="https://i.ibb.co/S6JG8px/pattern.png" alt="pattern"></img>
                                </div>
                                <p>{cvv}</p>
                            </div>
                            <div className="row signature">
                                <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="80px" alt="visa"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="cardNumber"></label>
                        <input
                            type="text"
                            id="cardNumber"
                            onChange={handleCardNumberChange}
                            placeholder="Card Number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardHolder"></label>
                        <input
                            type="text"
                            id="cardHolder"
                            value={cardHolderDisplay}
                            onChange={handleCardHolderChange}
                            placeholder="Card Holder"
                        />
                    </div>
                    <div className="expiry-cvv-container">
                        <input
                            className="date"
                            type="text"
                            id="expiryDate"
                            value={expiryDate}
                            onChange={handleExpiryDateChange}
                            placeholder="MM/YY"
                        />
                        <input
                            className="date"
                            type="text"
                            id="cvv"
                            value={cvv}
                            onChange={handleCvvChange}
                            placeholder="CVV"
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreditCardForm;
