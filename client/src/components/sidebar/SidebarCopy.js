import React,{useRef,useEffect} from "react";
import PropTypes from 'prop-types';
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import Button from "./button/Button";


const SidebarCopy = (props) => {
    const sidebarContainerRef=useRef(null);

    const handleClickOutside=(e)=>{
        if(sidebarContainerRef.current&&!sidebarContainerRef.current.contains(e.target)){
          props.toggleSidebar()
        }
      }
    
      useEffect(()=>{
        document.addEventListener('mousedown',handleClickOutside);
        return ()=> document.removeEventListener('mousedown',handleClickOutside)
      })
  return (   
      <div className='sidebarCopy' ref={sidebarContainerRef}>
        <Logo />
        <Button />
        <Menu noArrow />
      </div>

  );
};

SidebarCopy.propTypes={
    toggleSidebar:PropTypes.func.isRequired
}

export default SidebarCopy;
