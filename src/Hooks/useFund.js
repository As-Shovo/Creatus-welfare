import { useEffect, useState } from "react";


const useProducts = () => {
	const [funds, setFunds] = useState([]);

	useEffect(() => {
		fetch('https://lit-lowlands-70936.herokuapp.com/funds/')
		.then(res=> res.json())
		.then(data => setFunds(data));
	},[]);

	return [funds, setFunds];
};

export default useProducts;