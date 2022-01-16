import Swal from "sweetalert2";
export const showMessage = (icon, mess) => {
  return Swal.fire({
    icon: icon,
    title: mess,
    heightAuto: true,
    timerProgressBar: false,
    showConfirmButton: false,
    timer: 2000,
    allowOutsideClick: false,
  });
};

// local
export const setLocalStorages = (name, value) => {
  return localStorage.setItem(name, JSON.stringify(value));
};
export const getLocalStorage = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

export const getToken = (name) => {
  const token = getLocalStorage(name).accessToken;
  return token;
};

export const removeLocalStorage = (name) => {
  return localStorage.removeItem(name);
};

// path
export const checkPathURL = () => {
  return window.location.pathname;
};
