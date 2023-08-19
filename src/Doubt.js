import { useState, useRef } from "react";
import { ref, set } from "firebase/database";
import db from "./FbConfig.js";

export default function Doubt() {
	const rName = useRef();
	const rEmail = useRef();
	const rPhone = useRef();
	const rQuestion = useRef();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [question, setQuestion] = useState("");

	const hName = (event) => { setName(event.target.value); }
	const hEmail = (event) => { setEmail(event.target.value); }
	const hPhone = (event) => { setPhone(event.target.value); }
	const hQuestion = (event) => { setQuestion(event.target.value); }

	const save = (event) => {
		event.preventDefault();
		const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
		const name_expression = /^[a-zA-Z]{2,}$/;
		const phone_expression = /^\d{10}$/;

		if ((name.trim() === "") || (!name.match(name_expression))) {
			alert("Name must contain only characters and have a minimum length of 2.");
			setName("");
			rName.current.focus();
			return;
		}

		if ((!email.match(emailPattern)) || (email.trim() === "")) {
			alert("Invalid E-mail ID");
			setEmail("");
			rEmail.current.focus();
			return;
		}

		if ((phone.trim() === "") || (!phone.match(phone_expression))) {
			alert("Phone must contain only numbers and have a length of 10.");
			setPhone("");
			rPhone.current.focus();
			return;
		}

		if ((question.trim() === "")) {
			alert("Please Enter your query and submit");
			setQuestion("");
			rQuestion.current.focus();
			return;
		}
		let data = {name, email, phone, question };
		let node = name + " " + new Date().toString();
		let r = ref(db, "contact_form/" + node);
		set(r, data);
		alert("Response recieved. We will get back to you ASAP");
		setName("");
		setEmail("");
		setPhone("");
		setQuestion('');
	}

	return (
		<>
			<div className="container">
				<h1> Contact Form </h1>
				<form onSubmit={save}>
					<input type="text" placeholder="Enter your Name" onChange={hName} value={name} ref={rName} />
					<br /><br />
					<input type="text" placeholder="Enter your Email Id" onChange={hEmail} value={email} ref={rEmail} />
					<br /><br />
					<input type="number" placeholder="Enter Phone Number" onChange={hPhone} value={phone} ref={rPhone} onWheel={() => document.activeElement.blur()} />
					<br /><br />
					<textarea placeholder="Please type in your query" rows={3} cols={30} onChange={hQuestion} value={question} ref={rQuestion} ></textarea>
					<br /><br />
					<input type="submit" />
				</form>
			</div>
		</>
	);

}