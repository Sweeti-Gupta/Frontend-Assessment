import React, { useState } from "react";

import UserDetailsCard from "components/UserDetailsCard/UserDetailsCard";
import UserList from "components/UserList/UserList";

function UserInfo() {
  const [userId, setUserId] = useState(null);

  function setState(id) {
    setUserId(id);
  }

  return (
    <>
      <UserDetailsCard userId={userId} />
      <UserList setUserId={setState} />
    </>
  );
}

export default UserInfo;
