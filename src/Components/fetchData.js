import { useEffect, useState } from "react";
import Axios from "axios";
import "./style.css";

function DummyData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.users);
          setData(res.data.users);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  const ListNames = () => {
    return data.map((val) => {
      return (
        <tr>
          <td class="Dd">{val.id}</td>
          <td class="Dd">
            <img src={val.image} style={{ height: "70px" }}></img>
          </td>
          <td class="Dd">{val.firstName}</td>
          <td class="Dd">{val.lastName}</td>
          <td class="Dd">{val.gender}</td>
          <td class="Dd">{val.email}</td>
          <td class="Dd">{val.username}</td>
          <td class="Dd">{val.domain}</td>
          <td class="Dd">{val.ip}</td>
          <td class="Dd">{val.university}</td>
        </tr>
      );
    });
  };
  return (
    <div id="DD">
      <h1 align="center" class="Dd">
        Dummy Data
      </h1>
      <table id="Dt">
        <tr>
          <th class="Dd1">Sno</th>
          <th class="Dd1">Profile Pic</th>
          <th class="Dd1">First Name</th>
          <th class="Dd1">Last Name</th>
          <th class="Dd1">Gender</th>
          <th class="Dd1">E-mail</th>
          <th class="Dd1">Username</th>
          <th class="Dd1">Domain</th>
          <th class="Dd1">IP</th>
          <th class="Dd1">University</th>
        </tr>
        {ListNames()}
      </table>
    </div>
  );
}

export default DummyData;
