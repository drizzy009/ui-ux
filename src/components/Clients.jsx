import React from 'react';
import { airbnb, binance, coinbase, dropbox         } from '../assets';
import styles, { layout } from '../style';
import { clients } from '../constants';

const Clients = () =>  (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map(( client) => (
          <div className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`} key={client.id}>
            <img src={client.logo} alt="clients" className='sm:w-[192px] w-[100px] object-contain hover:invert-[1] hover:brightness-0' />
          </div>
        ))}
      </div>
    </section>
  )

export default Clients
