import "./UserTable.css";
const UserTable = ({ users, onDelete, onEdit }) => {
  return (
    <div>
      <table
        className=" mt-3"
        style={{ background: "linear-gradient(to right, #fc5c7d, #6a82fb)" }}
      >
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Skills</th>
            <th>Language</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>

                <td>
                  {user.skills.map((s) => (
                    <span>{`${s},`}</span>
                  ))}
                </td>
                <td>{user.language}</td>
                <td>
                  <i
                    className="fa fa-trash text-danger"
                    onClick={() => {
                      onDelete(user);
                    }}
                  ></i>
                </td>
                <td>
                  <i
                    className="fa fa-pencil-square-o text-dark"
                    aria-hidden="true"
                    onClick={() => {
                      onEdit(index);
                    }}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
