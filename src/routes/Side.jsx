import {Sidebar,Menu,MenuItem,sidebarClasses, SubMenu} from 'react-pro-sidebar'
import {Link} from 'react-router-dom'

export default function Side(){
    return(
        <Sidebar
        
        rootStyles={{[`.${sidebarClasses.container}`]:{
            backgroundColor: 'green', color:'#000'
        }}}

        >
            <Menu>
                <SubMenu label="Dashboard">
                    <MenuItem component={<Link to="/" />}>Home</MenuItem>
                    <MenuItem component={<Link to="/exemplo1"/>}>Exemplo1</MenuItem>
                    <MenuItem component={<Link to="exemplo2"/>}>Exemplo2</MenuItem>
                </SubMenu>
                <SubMenu label="Items">
                    <MenuItem>Exemplo1</MenuItem>
                    <MenuItem>Exemplo2</MenuItem>
                </SubMenu>
             </Menu>
                    
        </Sidebar>
    )
}