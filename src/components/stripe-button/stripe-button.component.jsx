import React from "react";
import StripeCheckout from "react-stripe-checkout";

export function StripeCheckoutButton({price}){
	const priceForStripe = price * 100;
	const publishablekey ='pk_test_51IvwiqAe5ZmSifyn9iKBsKGAQwW7qN65mOOxfo1dA3zn53t1bLwpG1CLtSGThqKe86qgHTfGv3QSRjPy5uaTLt0t00CNZ9p78s';
	function onToken(token){
		console.log(token);
		alert(token);
	}
	return(
		<StripeCheckout stripeKey={publishablekey} token={onToken} label='Pay Now' name='AMB Clothing Ltd.' billingAddress shippingAddress
		image='https://svgshare.com/i/Cuz.svg' description={`Your total is $${price}`} amount={priceForStripe} panelLabel='Pay Now'/>
	);
}

