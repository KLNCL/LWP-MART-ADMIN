// import React, { useEffect, useState } from 'react';
// import './UserManagement.scss';
// import instance from '../../utils/AxiosInstance';

// export default function UserManagement() {
//   const [users, setUsers] = useState([]); // Initialize users as an empty array

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const res = await instance.get("/users");
//         if (res.data) {
//           setUsers(res.data);
//         }
//       } catch (err) {
//         console.error("Error fetching users:", err);
//       }
//     };
//     getUsers();
//   }, []);

//   const handleActivate = async (userId) => {
//     try {
//       const response = await instance.post(`/userActivation/${userId}`);
//       if (response.status === 200) {
//         // Update the local state to reflect the new activation state
//         setUsers((prevUsers) =>
//           prevUsers.map((user) =>
//             user._id === userId ? { ...user, activation: true } : user
//           )
//         );
//         alert("User activated successfully.");
//       } else {
//         alert("User activation failed.");
//       }
//     } catch (err) {
//       console.error("Error activating user:", err);
//     }
//   };

//   const handleDeactivate = async (userId) => {
//     try {
//       const response = await instance.post(`/userDeactivation/${userId}`);
//       if (response.status === 200) {
//         // Update the local state to reflect the new activation state
//         setUsers((prevUsers) =>
//           prevUsers.map((user) =>
//             user._id === userId ? { ...user, activation: false } : user
//           )
//         );
//         alert("User deactivated successfully.");
//       } else {
//         alert("User deactivation failed.");
//       }
//     } catch (err) {
//       console.error("Error deactivating user:", err);
//     }
//   };

//   return (
//     <div className="userMangement-container">
//       <div
//         className="table-heder"
//         style={{
//           fontWeight: 'bold',
//           fontSize: '20px',
//           backgroundColor: 'rgb(221, 221, 221)',
//           color: 'black',
//           marginTop: '150px',
//           // marginLeft: "190px"
//         }}
//       >
//         <div className="id" style={{ height: '50px', width: '150px' }}>
//           <p></p>
//         </div>
//         <div className="userName" style={{ height: '50px', width: '250px' }}>
//           <p>User Name</p>
//         </div>
//         <div className="email" style={{ height: '50px', width: '260px' }}>
//           <p>Email</p>
//         </div>
//         <div className="contactNo" style={{ height: '50px', width: '240px' }}>
//           <p>Contact No</p>
//         </div>
//         <div className="type" style={{ height: '50px', width: '240px' }}>
//           <p>User Type</p>
//         </div>
//         <div className="activation" style={{ height: '50px', width: '240px' }}>
//           <p>Activation</p>
//         </div>
//       </div>
//       <div
//         className="table-body"
//         style={{
//           marginTop: '8px',
//           width: '65vw',
//           borderRadius: '6px',
//           flexDirection: 'column',
//         }}
//       >
//         {users.length > 0 ? (
//           users.map((user, index) => (
//             <div
//               className="detail-card"
//               key={user._id} // Use user._id as the key
//               style={{
//                 display: 'flex',
//                 // backgroundColor: 'gray',
//                 height: '90px',
//                 marginBottom: '4px',
//               }}
//             >
//               <div className="id" style={{ width: '150px' }}>
//                 <p>{index + 1}</p>
//               </div>
//               <div className="userName" style={{ width: '250px' }}>
//                 <p>{user.userName}</p>
//               </div>
//               <div className="email" style={{ width: '260px' }}>
//                 <p>{user.email}</p>
//               </div>
//               <div className="contactNo" style={{ width: '240px' }}>
//                 <p>{user.contactNo}</p>
//               </div>
//               <div className="type" style={{ width: '240px' }}>
//                 <p>{user.role}</p>
//               </div>
//               <div className="activation" style={{ width: '240px' }}>
//                 {user.activation === true ? (
//                   <button
//                     className="deactivate"
//                     onClick={() => handleDeactivate(user._id)}
//                   >
//                     Deactivate
//                   </button>
//                 ) : (
//                   <button
//                     className="activate"
//                     onClick={() => handleActivate(user._id)}
//                   >
//                     Activate
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No users found</p>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import './UserManagement.scss';
import instance from '../../utils/AxiosInstance';


export default function UserManagement() {
  const [users, setUsers] = useState([]); // Initialize users as an empty array

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await instance.get("/users");
        if (res.data) {
          setUsers(res.data);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    getUsers();
  }, []);

  const handleActivate = async (userId) => {
    try {
      const response = await instance.post(`/userActivation/${userId}`);
      if (response.status === 200) {
        // Update the local state to reflect the new activation state
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, activation: true } : user
          )
        );
        alert("User activated successfully.");
      } else {
        alert("User activation failed.");
      }
    } catch (err) {
      console.error("Error activating user:", err);
    }
  };

  const handleDeactivate = async (userId) => {
    try {
      const response = await instance.post(`/userDeactivation/${userId}`);
      if (response.status === 200) {
        // Update the local state to reflect the new activation state
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, activation: false } : user
          )
        );
        alert("User deactivated successfully.");
      } else {
        alert("User deactivation failed.");
      }
    } catch (err) {
      console.error("Error deactivating user:", err);
    }
  };

  return (
    <div className="userMangement-container">
      <div
        className="table-heder"
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          backgroundColor: 'rgb(221, 221, 221)',
          color: 'black',
          marginTop: '150px',
          // marginLeft: "190px"
        }}
      >
        <div className="id" style={{ height: '50px', width: '150px' }}>
          <p></p>
        </div>
        <div className="userName" style={{ height: '50px', width: '250px' }}>
          <p>User Name</p>
        </div>
        <div className="email" style={{ height: '50px', width: '260px' }}>
          <p>Email</p>
        </div>
        <div className="contactNo" style={{ height: '50px', width: '240px' }}>
          <p>Contact No</p>
        </div>
        <div className="type" style={{ height: '50px', width: '240px' }}>
          <p>User Type</p>
        </div>
        <div className="activation" style={{ height: '50px', width: '240px' }}>
          <p>Activation</p>
        </div>
      </div>
      <div
        className="table-body"
        style={{
          marginTop: '8px',
          width: '65vw',
          borderRadius: '6px',
          flexDirection: 'column',
        }}
      >
        {users.length > 0 ? (
          users.map((user, index) => (
            <div
              className="detail-card"
              key={user._id} // Use user._id as the key
              style={{
                display: 'flex',
                // backgroundColor: 'gray',
                height: '90px',
                marginBottom: '4px',
              }}
            >
              <div className="id" style={{ width: '150px' }}>
                <p>{index + 1}</p>
              </div>
              <div className="userName" style={{ width: '250px' }}>
                <p>{user.userName}</p>
              </div>
              <div className="email" style={{ width: '260px' }}>
                <p>{user.email}</p>
              </div>
              <div className="contactNo" style={{ width: '240px' }}>
                <p>{user.contactNo}</p>
              </div>
              <div className="type" style={{ width: '240px' }}>
                <p>{user.role}</p>
              </div>
              <div className="activation" style={{ width: '240px' }}>
                {user.role === "seller" ? (
                  user.activation === true ? (
                    <button
                      className="deactivate"
                      onClick={() => handleDeactivate(user._id)}
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      className="activate"
                      onClick={() => handleActivate(user._id)}
                    >
                      Activate
                    </button>
                  )
                ) : (
                  <p>Not a seller</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}