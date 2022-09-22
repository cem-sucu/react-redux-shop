import React from "react";
import { useSelector } from "react-redux";
import { buyPhone } from "../redux/phone/actionPhone";

function PhoneComponent(props) {
    const phones = useSelector((state) => state.phones);

    return (
        <div className="container">
            <img src="" alt="phone" />
            <p>
                Disponibilité :<span id="count"> {phones}</span>
            </p>
            <button>Acheter</button>
        </div>
    );
}

const mapDispatchToprops = (dispatch) => {
    return {
        buyPhone: () => dispatch(buyPhone()),
    };
};

export default PhoneComponent;

/* import React from "react";
import { connect } from "react-redux";
import { buyPhone } from "../redux/phone/actionPhone";

function PhoneComponent(props) {
    console.log(props.phones);
    return (
        <div className="container">
            <img src="" alt="phone" />
            <p>
                Disponibilité :<span id="count"> {props.phones}</span>
            </p>
            <button onClick={() => props.buyPhone()}>Acheter</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        phones: state.phones,
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        buyPhone: () => dispatch(buyPhone()),
    };
};

export default connect(mapStateToProps, mapDispatchToprops)(PhoneComponent);
 */
