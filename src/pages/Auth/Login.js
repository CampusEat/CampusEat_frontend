import React, { useState } from "react";
import './Login.css';

import QRCode from "qrcode.react";
import * as KlipAPI from "./Klip.js";


const DEFAULT_QR_CODE = "DEFAULT";
const DEFAULT_ADDRESS = "0x00000000000000000000000000000";

function Login(props){

    const [qrvalue_auth, setQrvalue_auth] = useState(DEFAULT_QR_CODE);
    const [myAddress, setMyAddress] = useState(DEFAULT_ADDRESS);
    

    const redirectToKlip = () => {
        KlipAPI.getAddress(setQrvalue_auth, async (address) => {
            setMyAddress(address); // 지갑 주소
            window.location.href = `../UserPage/${address}`; // 주소를 MyPage로 전달
        });
    };

    return (
        <div className="LoginPage">
            
            <div className="circle"></div>
            <img src="assets/image/hamburger.svg" className="hamburger" alt="hamburger"></img>
            <h1 className="camEat">&nbsp;CAMPUS<br/>EAT</h1>
            <button onClick={redirectToKlip} className="klip-button">
                <img src="assets/image/klipIcon.svg" className="klipIcon" /> 클립으로 로그인
            </button>
            <div className="qr">
            {qrvalue_auth !== DEFAULT_QR_CODE && (<QRCode value={qrvalue_auth}></QRCode>)}
            </div>
            
        </div>
    );
}

export default Login;
