// services/api.js
const API_URL =
  "https://script.google.com/macros/s/AKfycbwo-L2IIVep9Jj7U45N_-pS67lJ6XCFwKWOLDRMmlHQ5RFoPB8gxH2lY0YLqDftVTxz/exec";

export const loginUser = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ ...data, type: "login" }),
  });
  return res.json();
};

export const registerUser = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ ...data, type: "register" }),
  });
  return res.json();
};
