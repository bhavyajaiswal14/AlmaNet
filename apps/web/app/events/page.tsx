import React from 'react'; 
import Createevent from '../../components/event/Createevent'

const EventCreation: React.FC = () => {
    return (
      <main className="flex justify-center items-center min-h-screen bg-blue-50">
        <Createevent />
      </main>
    );
  };
  
  export default EventCreation;