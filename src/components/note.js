import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return  <div className="note">
    <span>hello this is our first note</span>
    <div className="note-footer">
<small>04/08/2021</small>
<MdDeleteForever className='delete-icon' size='1.3em'/>
    </div>

    </div>;
};

export default Note;