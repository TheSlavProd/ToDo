import React from "react";

export default function request(url, method = "GET", body) {
  const config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }
  return fetch(url, config)
    .then(async (response) => {
      const res = await response.json();
      if (response.status >= 400 && response.status < 600) {
        if (response.error) {
          throw response.error;
        } else {
          throw new Error("something error");
        }
      }
      return res;
    })
    .catch((error) => {
      console.log("catch error", error);
    });
}
