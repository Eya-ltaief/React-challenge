import React from "react" ;
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export default function SideBar(){
const styles = {lineHeight:"2em",fontWeight:"600",backgroundColor:"#1A1B1C",width:"20%",marginTop:"0%",
    height:"100%",
    position: "fixed",fontSize:"28px",letterSpacing:"0.1em"
}
    return(
        <ProSidebar expand="lg"  >
            <Menu iconShape="square" style={styles} >
                <MenuItem >Dashboard</MenuItem>
                <SubMenu title="Cocktails">
                    <MenuItem >with alcohol</MenuItem>
                    <MenuItem>free alcohol</MenuItem>
                </SubMenu>
                <SubMenu title="Shots" >
                    <MenuItem>Vodka</MenuItem>
                    <MenuItem>Margeritta</MenuItem>     
                </SubMenu>
                <MenuItem >About us</MenuItem>
            </Menu>
        </ProSidebar>
    );
}