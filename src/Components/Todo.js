import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function ToDo(props) {

    const [modelIsOpen, setModelIsOpen] = useState(false);

    function deleteHandler(){
      setModelIsOpen(true);
    }

    function modalHide(){
      setModelIsOpen(false);
    }
    return (
      <div>
        <div className='card'>
          <h2>{props.text}</h2> 
          <div className='actions'>
            <button className='btn' onClick={deleteHandler}> Delete </button>
           </div>
        </div>
        {modelIsOpen ? <Modal onCancel ={modalHide} onConfirm ={modalHide}/> :null}
        {modelIsOpen && <Backdrop onCancel={modalHide}/>}
      </div>
    );
   }
  
  export default ToDo;
  