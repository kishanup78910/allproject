import React, { useState } from 'react';
import data from './data';
import './style.css';

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [enablemultiSelect,setEnableMultiselect] = useState(false);
    const [multiple,setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
   setSelected(getCurrentId === selected ?null :getCurrentId)
    }

    function handlemultiSelection(getCurrentId){
       let copymultiple = [...multiple];
       const findIndexId = copymultiple.indexOf(getCurrentId)
       console.log(findIndexId);
       if(findIndexId === -1) copymultiple.push(getCurrentId);
       else copymultiple.splice(findIndexId,1);
       setMultiple(copymultiple);
    }

    return (
        <div className='wrapper'>
            <button onClick={()=>setEnableMultiselect(!enablemultiSelect)}>Enable Multi Selection</button>
            <div className='accordian'>
                {data && data.length > 0 ? (
                    data.map(dataitem => (
                        <div className='item' key={dataitem.id}>
                            <div onClick={
                                enablemultiSelect?
                                ()=>handlemultiSelection(dataitem.id)
                                :() => handleSingleSelection(dataitem.id)} className='title'>
                                <h3>{dataitem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected==dataitem.id  || multiple.indexOf(dataitem.id) !== -1?
                                <div className='content'>
                                   {dataitem.answer}
                                </div>:null
                            }
                        </div>
                    ))
                ) : (
                    <div>No data Found</div>
                )}
            </div>
        </div>
    );
};

export default Accordian;
