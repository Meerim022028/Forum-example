import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  function formSubmitCallback(event) {
    const form = new FormData(event.target);
    const data = {
      firstName: form.get('firstName'),
      lastName: form.get('lastName')
    }
    event.preventDefault();
  }
  const [example, setExample] = useState("Lodaing...")
  useEffect(() => {
    axios.get('https://forum-example-bf43a-default-rtdb.firebaseio.com/example.json')
      .then(response => {
        setExample(response.data);
      });
  }, []);

  return (
    <form className="App" onSubmit={formSubmitCallback}>
      <div>
        <label for="firstName">First name</label>
        <input type="text"
          name="firstName"
          id="firstName" />
      </div>
      <div>
        <label for="lastName">Last name</label>
        <input type="text"
          name="lastName"
          id="lastName" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email"
          name="email"
          id="email" />
      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="tel"
          name="phone"
          id="phone" />
      </div>
      <div>
        <label for="dateOfBirth">Date of birth</label>
        <input type="date"
          name="dateOfBirth"
          id="dateOfBirth" />
      </div>
      <div>
        <label for="gender">Gender</label>
        <select name="gender"
          id="gender">
          <option>- Select -</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label>Education</label>
        <div>
          <label for="school">
            <input type="radio"
              name="education"
              id="school"
              value="school" /> School
          </label>
        </div>
        <div>
          <label for="university">
            <input type="radio"
              name="education"
              id="university"
              value="university" /> University
          </label>
        </div>
      </div>
      <div>
        <label>Languages</label>
        <div>
          <label for="english">
            <input type="checkbox"
              name="language"
              id="english"
              value="english" /> English
          </label>
        </div>
        <div>
          <label for="kyrgyz">
            <input type="checkbox"
              name="language"
              id="kyrgyz"
              value="kyrgyz" /> Kyrgyz
          </label>
        </div>
        <div>
          <label for="russian">
            <input type="checkbox"
              name="language"
              id="russian"
              value="russian" /> Russian
          </label>
        </div>
      </div>
      <div>
        <label for="address">Address</label>
        <input type="text"
          name="address"
          id="address" />
      </div>
      <div>
        <label for="city">City</label>
        <input type="text"
          name="city"
          id="city" />
      </div>
      <div>
        <label for="zip">ZIP</label>
        <input type="number"
          name="zip"
          id="zip" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
export default App;