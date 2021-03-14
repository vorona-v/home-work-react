import React from "react"
import offers from "./offers"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Offers.css';

const OffersList = () => {
    return (
        <div className="flat-hoot-offer-wrap">
            <div className="container">
                <div className="flat-hoot-offer-title">What can DuHoot offer to you?</div>
                <div className="flat-hoot-offer-subtitle">Etiam cursus ipsum quis enim faucibus</div>

                <Tabs>
                    <TabList>
                        <div className="flat-offer-category-wrap">
                            {
                                offers.map(({
                                    id,
                                    tabListTitle,
                                    tabListIcon,
                                }) =>
                                    <Tab key={id}><div className={"flat-offer-category flat-" + tabListTitle}><span className={tabListIcon}></span></div></Tab>
                                )
                            }
                        </div>
                    </TabList>
                    <div className="flat-offer-info-wrap">
                        {
                            offers.map(({
                                id,
                                tabListTitle,
                                tabPanelIcon1,
                                tabPanelIcon2,
                                tabPanelDescText1,
                                tabPanelDescText2
                            }) =>
                                <TabPanel key={id}>
                                    <div className={"flat-offer-item flat-offer-home-wrap flat-" + tabListTitle}>
                                        <h3 className="flat-offer-info-title">{tabListTitle}</h3>
                                        <div className="flat-offer-info-item">
                                            <i className={tabPanelIcon1}></i>
                                            <span className="flat-offer-info-text">{tabPanelDescText1}</span>
                                        </div>
                                        <div className="flat-offer-info-item">
                                        <i className={tabPanelIcon2}></i>
                                            <span className="flat-offer-info-text">{tabPanelDescText2}</span>
                                        </div>
                                    </div>
                                </TabPanel>
                            )
                        }
                    </div>
                    
                </Tabs>
            </div>
        </div>
    )
}

export default OffersList