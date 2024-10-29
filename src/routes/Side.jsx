import {Sidebar,Menu,MenuItem,sidebarClasses, SubMenu} from 'react-pro-sidebar'
import {Link} from 'react-router-dom'

export default function Side(){
    return(
        <Sidebar
        
        rootStyles={{[`.${sidebarClasses.container}`]:{
            backgroundColor: 'red', color:'#000'
        }}}

        >
            <Menu>
                <SubMenu label="Dashboard">
                    <MenuItem component={<Link to="/" />}>Home</MenuItem>
                    <MenuItem component={<Link to="/Cadastro"/>}>Cadastro</MenuItem>
                    <MenuItem component={<Link to="/Resultado"/>}>Resultados</MenuItem>
                </SubMenu>
                
             </Menu>
                    
        </Sidebar>
    )
}