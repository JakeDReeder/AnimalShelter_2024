// Animal info page leads to animal page for updating animal information.
// also serves as location of front end code.
import React from 'react';
import AnimalSearch from '../components/forms/AnimalSearch';

const AnimalInfo: React.FC = () => {
  sessionStorage.setItem('feature', 'animal');
  return (
    <div className="card flex grid items-stretch mx-auto bg-secondary min-h-[550px] h-[85vh] shadow-sm">
      <div className="card-body">
        <div>
          <h3 className="card-title text-primary">Animal Information</h3>
        </div>
        <br />
        <br />
        <div className="self-center">
          <AnimalSearch />
        </div>
      </div>
    </div>
  );
};

export default AnimalInfo;
