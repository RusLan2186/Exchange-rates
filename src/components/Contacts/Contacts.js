import React from 'react';
import cl from './Contacts.module.scss';
const mail = 'https://cdn-icons-png.flaticon.com/512/2791/2791398.png';
const phone = 'https://cdn.icon-icons.com/icons2/806/PNG/512/phone_icon-icons.com_65958.png';

const Contacts = () => {
  return (
    <div className={cl.wrapper}>
      <h1 className={cl.title}>Contacts</h1>
      <div className={cl.links}>
        <div className={cl.tel}>
          <img src={phone} alt='phone' />
          <a href='tel:+1 236 -456 -78'> +1 236 - 456 - 78</a>
        </div>
        <div className={cl.mail}>
          <img src={mail} alt='mail' />
          <a href='mailto:cometous@gmail.com'> cometous@gmail.com</a>
        </div>
      </div>
      <div className={cl.cart}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d638455.6028387208!2d5.68681921193368!3d51.311727787555135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1695306058314!5m2!1suk!2sua'
          width='800'
          height='600'
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
