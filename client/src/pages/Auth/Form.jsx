import React from 'react'

const Form = () => {
  return (
    <div>
        <div class="container">
      <div class="title">Registration</div>
      <div class="content">
        <form action="#">
          <div class="user-details">
            <div class="input-box">
              <span class="details">Full Name</span>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div class="input-box">
              <span class="details">Username</span>
              <input type="text" placeholder="Enter your username" required />
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div class="input-box">
              <span class="details">Phone Number</span>
              <input type="text" placeholder="Enter your number" required />
            </div>
            <div class="input-box">
              <span class="details">Age</span>
              <input type="text" placeholder="Enter your password" required />
            </div>
            <div class="input-box">
              <span class="details">Height</span>
              <input type="text" placeholder="Confirm your password" required />
            </div>
            <div class="input-box">
              <span class="details">Weight</span>
              <input type="text" placeholder="Enter your password" required />
            </div>
            <div class="input-box">
              <span class="details">Diseases</span>
              <select name="otherproblem" multiple>
                <option value="Nothing">Nothing</option>
                <option value="Allergy: Penicillin">Allergy: Penicillin</option>
                <option value="Aspirin">Aspirin</option>
                <option value="Erythromycin">Erythromycin</option>
                <option value="Latex or Rubber Products">
                  Latex or Rubber Products
                </option>
                <option value="Codeine">Codeine</option>
                <option value="Tetracycline">Tetracycline</option>
                <option value="Germicides/Pesticides, Foods">
                  Germicides/Pesticides, Foods
                </option>
                <option value="Other">Other</option>
                <option value="Asthma">Asthma</option>
                <option value="Bleeding Disorders">Bleeding Disorders</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Epilepsy">Epilepsy</option>
                <option value="GI disorders">GI disorders</option>
                <option value="Heart disease">Heart disease</option>
                <option value="Hepatitis">Hepatitis</option>
                <option value="Jaundice">Jaundice</option>
                <option value="Liver disease">Liver disease</option>
                <option value="Neoplasm">Neoplasm</option>
                <option value="Psychiatric Problems">
                  Psychiatric Problems
                </option>
                <option value="Respiratory diseases">
                  Respiratory diseases
                </option>
                <option value="Rheumatic fever">Rheumatic fever</option>
              </select>
            </div>
          </div>
          <div class="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span class="gender-title">Gender</span>
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div class="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Form;