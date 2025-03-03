import "./BackOfficeNav.scss";
import React, {useContext} from "react";
import {NavLink} from 'react-router-dom'
import AppContext from '../../contexts/AppContext';
import cn from 'classnames';

function BackOfficeNav({currentSubSection}) {
    const {currentSection} = useContext(AppContext);

    let debugEnabled = window._env_.FEATURE_DEBUG_ENABLED
    let ticketsEnabled = window._env_.FEATURE_TICKETS_ENABLED
    let c4pEnabled = window._env_.FEATURE_C4P_ENABLED
    let speakersEnabled = window._env_.FEATURE_SPEAKERS_ENABLED

    return (
        <div className={cn({
            ["BackOfficeNav"]: true,
            ["--backoffice"]: currentSection === "back-office",
        })}>
            <div className="BackOfficeNav__container">
                <div className="BackOfficeNav__link">
                    <NavLink
                        className={cn({
                            ["--default"]: !currentSubSection,
                        })}
                        activeClassName='--active' to='/back-office-page/features' exact> Features
                    </NavLink>
                </div>
                {c4pEnabled === 'true' && (
                        <div className="BackOfficeNav__link">
                            <NavLink activeClassName='--active' to='/back-office-page/proposals' exact> Proposals
                            </NavLink>
                        </div>
                )}
                {ticketsEnabled === 'true' && (
                    <div className="BackOfficeNav__link">
                        <NavLink activeClassName='--active' to='/back-office-page/tickets' exact> Tickets Queue</NavLink>
                    </div>
                )}
            </div>
        </div>
    );

}

export default BackOfficeNav;
