import React from 'react';
import useFund from '../../Hooks/useFund';
const ManageFunds = () => {

	const [funds, setFunds] = useFund();


	//handle delete button

	const handleDelete = id => {
		const url = `https://warm-island-50331.herokuapp.com/products/${id}`;

		const confirm = window.confirm("Are you sure to delete?");

		if(confirm) {
			fetch(url, {
				method : 'DELETE'
			})
			.then(res => res.json())
			.then(data => {
				if(data.deletedCount > 0) {
					alert('Deleted Successfully');

					const remainingFund = funds.filter(fund => fund._id !== id);
					setFunds(remainingFund);

				}
			})
		}


	}
	return (
		<div>
			<div className="container">
			<h1 className="text-center my-5">Manage Product</h1>
			</div>

			<div className="container  ">

			<div className="row d-none d-md-block">
			<div className="col ">
	<div className="card pt-3 shadow-lg h-100 bg-success text-white  ">
  <div className="card-body ">
    <div className="row manage-order">
		<div className="col-2">
			<p>Product Name</p>
		</div>
		<div className="col-4">
			<p>Description</p>
		</div>
		<div className="col d-flex justify-content-center">
			<p>Price</p>
		</div>

		<div className="col d-flex justify-content-center">
			<p>Delete</p>
		</div>
	</div>

  </div>
</div>
</div>
			</div>

			<div className="row">
			{
				funds.map(fund=> <div key={fund._id}>
					<div className="col">
				<div className="card pt-3 shadow-lg h-100">
			  <div className="card-body">
				<div className="row manage-order">
					<div className="col-md-2">
					<p><span className="d-md-none">Product name: </span>{fund.title}</p>
					</div>
					<div className="col-md-4 text-start">
						<p><span className="d-md-none">Description: </span>{fund.description}</p>
					</div>
					<div className="col d-flex justify-content-center">
						<p><span className="d-md-none">Price: </span>${fund.price}</p>
					</div>

					<div className="col text-center">
						<button onClick={() => handleDelete(fund._id)}  className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
					</div>
				</div>

			  </div>
			</div>
			</div>
				</div>)
			}
			</div>
			</div>
		</div>
	);
};

export default ManageFunds;