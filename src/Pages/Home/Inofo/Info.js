import React from 'react';
import './Info.css';
import { TbGuitarPick } from 'react-icons/tb';
import { useSelector } from 'react-redux';

const Info = () => {
    
    const data = useSelector(state => state.home.data[0]?.info);

    return (
        <div className='max-w-7xl lg:h-[700px] md:h-[750px] h-[1350px] lg:relative md:relative static mx-auto lg:px-0 md:px-0 px-3 lg:mt-0 md:mt-0 mt-[50px]'>
            <div className='lg:w-[60%] lg:absolute md:absolute static lg:top-[-80px] md:top-[-80px] top-0 lg:left-[50%] md:left-[50%] lg:translate-x-[-50%] md:translate-x-[-50%] md:w-[80%] h-[500px] mx-auto'>
                <div className='info-container'>
                    <div className='brand-bg lg:flex md:flex items-center py-2 px-3'>
                        <div className='px-6 flex justify-center'>
                            <TbGuitarPick className='h-[100px] w-[100px] text-white' />
                        </div>
                        <p className='text-white lg:text-start md:text-start text-center lg:text-[17px] md:text-[17px] text-[15px] lg:px-5 md:px-2 py-2'>{data?.tableData?.firstRowText}</p>
                    </div>
                    <div className='lg:flex md:flex items-center'>
                        <div className='p-8 lg:text-start md:text-start text-center text-2xl font-bold brand-color lg:border-r-2 md:border-r-2 lg:border-b-0 md:border-b-0 border-b-2 border-[#820000]'>
                            {data?.tableData?.secondRowDollar}
                        </div>
                        <p className='brand-color lg:text-[20px] md:text-[20px] pl-5 lg:pr-16 md:pr-5 font-medium lg:py-0 md:py-0 py-3'>{data?.tableData?.secondRowText}</p>
                    </div>
                </div>
                <div>
                    {
                        data?.questions?.map((q, i) => <div key={i} className='mt-10'>
                            <h1 className='capitalize text-2xl font-bold brand-color'>{q?.question}</h1>
                            <p className='text-[18px] text-black font-medium mt-4'>{q?.ans}</p>
                            {
                                q?.note &&
                                <p className='lg:text-[20px] md:text-[18] text-black font-medium mt-4 italic'>Note: {q?.note} </p>
                            }
                        </div>)
                    }

                    {/* <div className='mt-10'>
                        <h1 className='capitalize text-2xl font-bold brand-color'>Converd Loans</h1>
                        <p className='text-[18px] text-black font-medium mt-4'>LRAP covers all Federal student and parent PLUS loans, as well as privet alternative loans, up to $17,000 per academic year and $70,000 in total.</p>
                    </div>

                    <div className='mt-10'>
                        <h1 className='capitalize text-2xl font-bold brand-color'>After Graduation</h1>
                        <p className='text-[18px] text-black font-medium mt-4'>To quality for remebursment, you must obtain employment, working 30+ hours per week accross any number of jobs, in any field. It dose not even need to be related to your degree. Assicestance and continue untill you earn more then $46,000 or your loans are fully repid.</p>
                        <p className='lg:text-[20px] md:text-[18] text-black font-medium mt-4 italic'>Note: This is summary. Tearms & conditions apply. See your LRAP Award for full detail. </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Info;