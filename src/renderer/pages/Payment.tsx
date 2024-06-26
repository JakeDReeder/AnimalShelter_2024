// New customer page

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReclaimFee: React.FC = () => {
  return <p>Reclaim Fee of $45 will be charged.</p>;
};

const Payment: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="card flex grid items-stretch mx-auto bg-secondary min-h-[550px] h-[85vh] shadow-sm">
      <div className="card-body">
        <br />
        <br />
        <br />
        <br />
        <div className="self-center">
          <div className="card min-w-96 w-[55vh] bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Payment</h2>
              <p>
                <ReclaimFee />
              </p>
              <br />
              <div className="card-actions justify-end">
                <button
                  type="button"
                  onClick={() => {
                    navigate('/layout/home');
                  }}
                  className="btn btn-primary"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
