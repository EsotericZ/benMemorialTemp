import { useEffect, useState } from 'react';

import { format, parseISO } from 'date-fns';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBTextArea,
    MDBInputGroup
} from 'mdb-react-ui-kit';

import getAllMemories from '../../services/getAllMemories';
import newMemory from '../../services/newMemory';

export const Memories = () => {
    const [loading, setLoading] = useState(true);
    const [memories, setMemories] = useState([]);
    const [newMem, setNewMem] = useState('')

    async function fetchData() {
        try {
            getAllMemories()
            .then((res) => {
                setMemories(res.data);
                setLoading(false);
            });
        } catch (err) {
            console.log(err);
        }
    } 

    const handleAdd = (e) => {
        const { name, value } = e.target;
        setNewMem((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSave = () => {
        newMemory(newMem)
            .then(fetchData())
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {loading ? 
                <h1>Loading</h1>
                :
                <>
                    <div className="d-flex justify-content-center text-center m-3">
                        Please share your favorite memories here. All are welcome, we just ask that you remain kind and courtious of others. You are welcome to post anonymously. Thank you.
                    </div>

                    <form className='m-2'>
                        <MDBInputGroup className='mb-2' noBorder>
                            <input className='form-control' type='text' placeholder='Name' name='name' onChange={handleAdd} />
                        </MDBInputGroup>
                        <MDBInputGroup>
                            <MDBTextArea className='bg-light' label='Memory' id='textArea' rows={4} name='memory' onChange={handleAdd} />
                        </MDBInputGroup>
                        <MDBBtn type='submit' className='m-2 bg-success' onClick={handleSave}>
                            Post
                        </MDBBtn>
                    </form>

                    <div className="d-flex justify-content-center m-4">
                        <h1>
                            ~ Memories ~
                        </h1>
                    </div>

                    {memories.map((memory, index) => {
                        return (
                            <MDBCard alignment='center' className='m-4' key={index}>
                                <MDBCardBody>
                                    <MDBCardTitle>Posted By {memory.name}</MDBCardTitle>
                                    <MDBCardText>
                                        {memory.memory}
                                    </MDBCardText>
                                </MDBCardBody>
                                <MDBCardFooter>{format(parseISO(memory.createdAt), 'MMMM dd, Y')}</MDBCardFooter>
                            </MDBCard>
                        )
                    })}
                </>
            }   
        </>
    );
}