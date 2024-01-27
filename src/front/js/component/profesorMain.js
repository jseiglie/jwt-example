import React from "react";

export const ProfesorMain = () => {
    useEffect(()=>{
		//localStorage.getitem("token")
		if (!store.user) navigate("/")
		console.log(store.user)
	},[])


   

    return (
        <section>

            <ul>
                {store.user.rol=="admin"? <li>admin</li> : ""}
                <li>Opcion 2</li>
            </ul>
        </section>
    )

}