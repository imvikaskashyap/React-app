import React, { useEffect, useState } from "react";

function Usestate() {
  const [name, setName] = useState();
  const [roles, setRoles] = useState();
  const [roleList, setRoleList] = useState();

  useEffect(() => {
    if (name) {
      setRoleList(Object.keys(roles).filter((item) => roles[item]));
    }
  }, [name, roles]);

  const loadUser = () => {
    setName("user1");
    setRoles({ reader: true });
  };

  //   function increment() {
  //     setValue((previousValue) => previousValue + 1);
  //     setValue((previousValue) => previousValue + 2);
  //   }
  return (
    <div>
      <h3>{JSON.stringify(name)}</h3>
      <h3>{JSON.stringify(roles)}</h3>
      <h3>{JSON.stringify(roleList)}</h3>
      <button onClick={loadUser}>Load User</button>
    </div>
  );
}

export default Usestate;
