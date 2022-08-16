import { useContext, Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { SuggestionsContext } from "../../contexts/suggestions/suggestions.context";
import SimpleBar from 'simplebar-react';


const Suggestions = () => {
    const { open, results } = useContext(SuggestionsContext)

    return (
        <Fragment>
            {open &&
                <div className="col-span-4 h-auto absolute  w-full px-3 py-1 rounded-lg bg-[#192026] rounded-t-none" style={{ top: '110%', right: '3px' }}>
                    <Tabs selectedTabClassName="bg-red-500 transition-color duration-200">
                        <TabList className={'flex flex-row justify-around px-2  py-1 bg-fixed '}>
                            <Tab className={' text-white text-center   py-2 text-xl w-28 font-DMSans font-bold bg-[#BE123C]  rounded-md'}>Series</Tab>
                            <Tab className={'text-white text-center  py-2 text-xl w-28 font-DMSans font-bold bg-[#BE123C] rounded-md'}>Movies</Tab>
                        </TabList>
                        <SimpleBar className="max-h-52">
                            <TabPanel className={'flex-col h-auto max-h-50'}>
                                {
                                    results?.series?.results?.map((item, index) => {
                                        return (
                                            <p key={index} className={'text-white'}>{item.title}</p>
                                        )
                                    })
                                }
                            </TabPanel>
                            <TabPanel className={'flex-col h-auto max-h-48'}>
                                {
                                    results?.movies?.results?.map((item, index) => {
                                        return (
                                            <p key={index} className={'text-white'}>{item.title}</p>
                                        )
                                    })
                                }
                            </TabPanel>
                        </SimpleBar>

                    </Tabs>
                </div>
            }
        </Fragment>
    )
}

export default Suggestions;