function User() {
  return (
    <div className="p-5 bg-light">
      <div className="bg-white rounded p-4">
        <table className="table caption-top ">
          <caption className="text-black fs-4">Recent Orders</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="c01">First Name</th>
              <th scope="c01">Last Name</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">l</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Snapchat</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>acob</td>
              <td>Thornton</td>
              <td>Instagram</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>Twitter</td>
            </tr>
            <tr>
              <th scope=" row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>Twitter</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>Facebook</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>Telegram</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
