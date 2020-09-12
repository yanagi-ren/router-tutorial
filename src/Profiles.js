import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';


function Profiles() {
    return (
        <div>
           <h3>사용자 목록</h3>
           <ul>
               <li><NavLink to="/profiles/yanagi" activeStyle={{ background: 'black', color: 'white'}}>yanagi</NavLink></li>
               <li><NavLink to="/profiles/Liu" activeStyle={{ background: 'black', color: 'white'}}>Liu</NavLink></li>
           </ul>

           <Route path="/profiles" exact render={() => <div>사용자를 선택해주세요</div>} />
           <Route path="/profiles/:username" component={Profile} />
           
        </div>
    );
}

export default Profiles;