import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/37147786?s=460&u=b168ecbb640860b13ea75b734ab879f013c74d27&v=4"
          alt="Gabriel Araujo"
        />

        <div>
          <strong>Gabriel Araujo</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida lobortis nisl mattis egestas
        <br /><br />
        Praesent scelerisque euismod tellus, et interdum ante imperdiet ac. 
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 75,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;


