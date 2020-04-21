import React from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new"> Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
        </div>
    )
}