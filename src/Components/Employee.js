function Employee(props){
   
      return (
        <>
          <h3>Here is an employee called: {props.Name}</h3>
          <p class="Role">Role in the Agency: </p>{" "}
          {props.role ? (
            props.role
          ) : (
            <p class="noRole">No role in the Company</p>
          )}
        </>
      );
};

export default Employee;