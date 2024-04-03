import { AiTwotoneHome } from "react-icons/ai";
import React from 'react';
import { BsBagHeart } from "react-icons/bs";
import { BsBackpack2Fill } from "react-icons/bs";
import { BsBalloonHeart } from "react-icons/bs";
import { BsGear } from "react-icons/bs";

const TabBar = () => {
  return (
    <div style={styles.tabBar}>
      <div style={styles.tabItem}><BsBagHeart /></div>
      <div style={styles.tabItem}><BsBackpack2Fill /></div>
      <div style={styles.tabItem}><BsBalloonHeart /></div>
      <div style={styles.tabItem}><BsGear /></div>
    </div>
  );
};

const styles = {
  tabBar: {
    position: 'fixed', 
    bottom: 0, 
    left: 0,
    width: '100%', 
    height: '60px', 
    backgroundColor: '#D2B48C',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 9999, 
  },
  tabItem: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '16px',
  },
};

export default TabBar; // Exporte o componente TabBar como o padrão
