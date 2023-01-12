/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { VITE_BACKEND_URL } = import.meta.env;

export default function Register() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [birthday, setBirthday] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password and confirm password should be the same");
      return;
    }
    setError("");

    axios
      .post(
        `${VITE_BACKEND_URL}/api/register`,
        {
          email,
          password,
          firstname,
          lastname,
          city,
          birthday,
          drivingLicense,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function handleResponse() {
        navigate("/login");
      });
  };

  // return (
  //   <div className="width content flex flex-col items-center justify-center ">
  //     <form onSubmit={handleSubmit}>
  //       <div className="">
  //         <div className="relative z-0 mb-6 w-full group">
  //           <input
  //             type="text"
  //             name="floating_last_name"
  //             id="name"
  //             value={lastname}
  //
  //             className="block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  //             placeholder=" "
  //             required
  //           />
  //           <label
  //             htmlFor="floating_last_name"
  //             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  //           >
  //             Nom
  //           </label>
  //         </div>
  //         <div className="relative z-0 mb-6 w-full group">
  //           <input
  //             type="text"
  //             name="floating_first_name"
  //             id="first_name"
  //             value={firstname}
  //             onChange={(e) => setFirstName(e.target.value)}
  //             className="block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  //             placeholder=" "
  //             required
  //           />
  //           <label
  //             htmlFor="floating_first_name"
  //             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  //           >
  //             Prénom
  //           </label>
  //         </div>
  //       </div>

  //       <div className="relative z-0 mb-6 w-full group">
  //         <input
  //           type="email"
  //           name="floating_email"
  //           id="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           className="block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  //           placeholder=" "
  //           required
  //         />
  //         <label
  //           htmlFor="floating_email"
  //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  //         >
  //           Adresse e-mail
  //         </label>
  //       </div>

  //       <div className="relative z-0 w-full mb-6 group">
  //         <input
  //           type="tel"
  //           pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
  //           name="floating_phone"
  //           id="phone"
  //           value={phone}
  //           onChange={(e) => setPhone(e.target.value)}
  //           className="block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  //           placeholder=" "
  //           required
  //         />
  //         <label
  //           htmlFor="floating_phone"
  //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  //         >
  //           Numéro de téléphone
  //         </label>
  //       </div>

  //       <div className="relative z-0 mb-6 w-full group">
  //         <input
  //           type="password"
  //           name="floating_password"
  //           id="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           className="block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  //           placeholder=" "
  //           required
  //         />
  //         <label
  //           htmlFor="floating_password"
  //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  //         >
  //           Mot de passe
  //         </label>
  //       </div>
  //       <div className="relative z-0 mb-6 w-full group">
  //         <input
  //           type="password"
  //           name="repeat_password"
  //           id="floating_repeat_password"
  //           value={confirmPassword}
  //           onChange={(e) => setConfirmPassword(e.target.value)}
  //           className="block py-2.5 px-2  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  //           placeholder=" "
  //           required
  //         />
  //         <label
  //           htmlFor="floating_repeat_password"
  //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  //         >
  //           Confirmer le mot de passe
  //         </label>
  //       </div>

  //       {btn}
  //     </form>
  //   </div>
  // );
  const hiddenFileInput = useRef(null);
  const user = {};
  const myAvatar = {};

  // eslint-disable-next-line no-unused-vars
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    const formData = new FormData();
    myAvatar.name = fileUploaded.name;
    formData.append("avatar", fileUploaded);
    user.avatar = formData;
  };
  // hSubmit(evt){
  //   evt.preventDefault();
  //   axios.post(`${VITE_BACKEND_URL}/api/users`, )
  // }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Profile
            </h3>
          </div>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="flex items-center">
                  <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <input
                    type="file"
                    name="myfile"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{ display: "none" }}
                  />
                  <button
                    type="button"
                    name="myfile"
                    onClick={handleClick}
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                First name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Last name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  onChange={(e) => setLastName(e.target.value)}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="birthday"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Birthday (must be on YYYY-MM-DD format)
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="birthday"
                  id="birthday"
                  autoComplete="birthday"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={(e) => setBirthday(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Email address
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                City
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="drivingLicense"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Driving License Number
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="drivingLicense"
                  id="drivingLicense"
                  autoComplete="driving-number"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={(e) => setDrivingLicense(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Password
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Confirm password
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  autoComplete="confirm-password"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
