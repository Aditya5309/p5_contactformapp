import db from "./FbConfig";
import {get, ref, child} from "firebase/database";
import {useState, useEffect} from "react";

export default function View()
{
	const [info,setInfo] = useState([]);

	useEffect(() => {
		const dbref = ref(db);

		get(child(dbref,"contact_form/"))
		.then((snapshot) => 
		{
			if(snapshot.exists()) 
			{
				setInfo([]);
				console.log(snapshot.val());
				const data = snapshot.val();
				if(data !== null)
				{
					Object.values(data).map((da) => {
						setInfo((oldArray) => [...oldArray, da]);
					});
				}
			}
			else 
			{
				console.log("no data");
			}
		})
	},[])

    return(
		<>
			<div>
				<h1> View Details </h1>
				<table className="styled-table">
					<tr>
						<th> Name </th>
						<th> Phone Number </th>
						<th> Email Id </th>
                        <th> Query </th>
					</tr>
					{
						info.map(( e => 
						<tr style={{ "text-align":"center" }}>
							<td> {e.name } </td>
							<td> {e.phone } </td>
							<td> {e.email} </td>
                            <td> {e.question} </td>
						</tr>
						))
					}
				</table>
			</div>
		</>
	);
}