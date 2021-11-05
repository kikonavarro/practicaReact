import React from 'react';
import Layout from '../layout/Layout';

import { useEffect, useState, useRef } from 'react';
import { Redirect, useHistory } from 'react-router';
//import { Button, Photo} from '../../common';
// import Layout from '../../layout';
import { createAdvert } from '../service';

//import './NewTweetPage.css';

//const MAX_CHARACTERS = 280;

function NewAdvertPage() {
  const history = useHistory();
  const textareaRef = useRef(null);
  const [value, setValue] = useState({ content: '' });
  const [createdAdvertId, setCreatedAdvertId] = useState('');
  const [error, setError] = useState(null);
  const { content } = value;

  useEffect(() => {
    console.log(textareaRef.current);
  }, []);

  const handleChange = event => {
    setValue({ content: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const createdAdvert = await createAdvert(value);
      setCreatedAdvertId(createdAdvert.id);
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        return history.push('/login');
      }
      setError(error());
    }
  };

  // const characters = `${content.length} / ${MAX_CHARACTERS}`;

  if (createdAdvertId) {
    return <Redirect to={`/adverts/${createdAdvertId}`} />;
  }

  return (
    <Layout title="Nuevo Anuncio">
      <div >
        <div >
          
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            
              
          
            <div>
              <button type="submit">
                           
                Let's go!
            </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default NewAdvertPage;
