import React, { useEffect, useState } from 'react';

const useDonation = () => {
	const [donations, setDonation] = useState([]);

	useEffect(() => {
		fetch('https://lit-lowlands-70936.herokuapp.com/manageAllDonation')
		.then(res=> res.json())
		.then(data => setDonation(data));
	},[]);

	return [donations, setDonation];
};

export default useDonation;