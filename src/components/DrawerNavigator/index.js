import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import "antd/dist/antd.min.css"
import { Typography } from 'antd'
import { Link } from "react-router-dom";
import {MenuOutlined} from '@ant-design/icons'
  
const styles={
    typography:{
        padding:5
    }
}
export const DrawerNavigator= () => {
    const [visible, setVisible] = useState(false);
  
    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
  
    return (
      <>
       <div >
        <Typography onClick={showDrawer}>
        <MenuOutlined style={{ fontSize: '25px', color: 'black'}} />
        </Typography>
        </div>
        <Drawer title="Pet Arena" placement="left" onClose={onClose} visible={visible}>
            <Link to='adopt'> <Typography style={styles.typography}>Adopt a pet</Typography></Link>
            <Link to='about'> <Typography style={styles.typography}>About us</Typography></Link>
            {/* <Link to='gallery'> <Typography style={styles.typography}>Gallery</Typography></Link> */}
            <Link to='feed'> <Typography style={styles.typography}>Feed</Typography></Link>
            <Link to='ReportMissing'> <Typography style={styles.typography}>Report Missing Pet</Typography></Link>
            <Link to='MissingPets'> <Typography style={styles.typography}>All Missing Pets</Typography></Link>
            <Link to='Volunteer'> <Typography style={styles.typography}>Volunteer</Typography></Link>
        </Drawer>
      </>
    );
  };
  