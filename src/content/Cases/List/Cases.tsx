import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Myboscase } from '../../../types';
import { getAllCases } from '../../../services/cases';
import CasesTable from './CasesTable';

function Cases() {
  let navigate = useNavigate();
  const [mybosCases, setMybosCases] = useState<Myboscase[]>();

  useEffect(() => {
    getAllCases()
      .then((res) => {
        localStorage.setItem(
          'max_case_number',
          res.length > 0 ? String(res[0].case_number) : '0'
        );
        setMybosCases(res);
      })
      .catch((error) => {
        navigate('/login');
      });
  });

  return <div>{mybosCases && <CasesTable myboscases={mybosCases} />}</div>;
}

export default Cases;
