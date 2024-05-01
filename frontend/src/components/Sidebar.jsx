import React, { useState, useEffect } from 'react';
import { Link as Lk } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBell, faUser, faList } from '@fortawesome/free-solid-svg-icons';
// import '../styles/Sidebar.css';
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 200; // Adjust as needed
      setIsCollapsed(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
//     <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
//     <Lk to='/' activeClassName='active'>
//       <div className='sidebar-icons'>
//         <FontAwesomeIcon icon={faHouse} className='faiconss' />
//         {!isCollapsed?<h5 className='sidebar-text'>Home</h5>:''}
//       </div>
//     </Lk>
//     <Lk to='/notifications' activeClassName='active'>
//       <div className='sidebar-icons'>
//         <FontAwesomeIcon icon={faBell} className='faiconss'/>
//         {!isCollapsed?<h5 className='sidebar-text'>Notification</h5>:''}
//       </div>
//     </Lk>
//     <Lk to='/profile' activeClassName='active'>
//       <div className='sidebar-icons'>
//         <FontAwesomeIcon icon={faUser} className='faiconss'/>
//         {!isCollapsed?<h5 className='sidebar-text'>Profile</h5>:''}
//       </div>
//     </Lk>
//     <Lk to='/more' activeClassName='active'>
//       <div className='sidebar-icons'>
//         <FontAwesomeIcon icon={faList} className='faiconss' />
//         {!isCollapsed?<h5 className='sidebar-text'>More</h5>:''}
//       </div>
//     </Lk>
//   </div>
<div className={`${isCollapsed ? 'w-32' : 'w-64'} border-r fixed transition-all ease-in-out duration-500 pt-8 h-full ml-0`}>
      <Lk to='/Home' className='block'>
        <div className='flex items-center hover:bg-slate-100 mb-4 mr-4 ml-4 rounded-full'>
          <FontAwesomeIcon icon={faHouse} className='w-10 h-8 mb-4 mt-4 ml-8' />
          {!isCollapsed && <h5 className='ml-3 text-xl mb-4 mt-4'>Home</h5>}
        </div>
      </Lk>
      <Lk to='/notifications' className='block'>
        <div className='flex items-center hover:bg-slate-100 mb-4 mr-4 ml-4 rounded-full'>
          <FontAwesomeIcon icon={faBell} className='w-10 h-8 mb-4 mt-4 ml-8' />
          {!isCollapsed && <h5 className='ml-3 text-xl mb-4 mt-4'>Notification</h5>}
        </div>
      </Lk>
      <Lk to='/profile' className='block'>
        <div className='flex items-center hover:bg-slate-100 mb-4 mr-4 ml-4 rounded-full'>
          <FontAwesomeIcon icon={faUser} className='w-10 h-8 mb-4 mt-4 ml-8' />
          {!isCollapsed && <h5 className='ml-3 text-xl mb-4 mt-4'>Profile</h5>}
        </div>
      </Lk>
      <Lk to='/more' className='block'>
        <div className='flex items-center hover:bg-slate-100 mb-4 mr-4 ml-4 rounded-full'>
          <FontAwesomeIcon icon={faList} className='w-10 h-8 mb-4 mt-4 ml-8' />
          {!isCollapsed && <h5 className='ml-3 text-xl mb-4 mt-4'>More</h5>}
        </div>
      </Lk>
    </div>
  );
};

export default Sidebar;